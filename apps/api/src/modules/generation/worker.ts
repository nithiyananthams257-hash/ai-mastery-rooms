import { CaseModel, EvidenceModel, JobModel, SolutionModel, SuspectModel, TimelineModel } from "../../models/index.js";
import { generateDraft } from "../mystery-engine/generator.js";
import { config } from "../../config/index.js";
let active = false;
const stages = ["Understanding the scenario","Designing the mystery","Creating suspects","Establishing the hidden solution","Generating evidence","Checking consistency","Preparing visual assets","Finalizing the case"];
export async function runOneJob(): Promise<boolean> {
  const job = await JobModel.findOneAndUpdate({status:"QUEUED"},{$set:{status:"RUNNING",startedAt:new Date(),currentStage:stages[0],progressPercent:5},$inc:{attemptCount:1}},{new:true,sort:{createdAt:1}});
  if(!job) return false;
  const caseDoc = await CaseModel.findOne({_id:job.caseId,ownerHash:job.ownerHash});
  if(!caseDoc){ await JobModel.updateOne({_id:job._id},{$set:{status:"FAILED",safeErrorMessage:"This case could not be generated."}}); return true; }
  try {
    const input = {scenario:caseDoc.scenario,title:caseDoc.titleOverride,genre:caseDoc.genre,difficulty:caseDoc.difficulty,caseLength:caseDoc.caseLength,suspectCount:caseDoc.suspectCount??4,evidenceIntensity:caseDoc.evidenceIntensity,generateVisuals:caseDoc.generateVisuals,provider:caseDoc.provider,language:caseDoc.language};
    for(let i=0;i<stages.length-1;i++) await JobModel.updateOne({_id:job._id},{$set:{currentStage:stages[i],progressPercent:Math.min(10+i*10,75),completedStages:stages.slice(0,i)}});
    const draft = await generateDraft(input as Parameters<typeof generateDraft>[0]);
    const caseId=String(caseDoc._id);
    await Promise.all([SuspectModel.deleteMany({caseId}),EvidenceModel.deleteMany({caseId}),TimelineModel.deleteMany({caseId}),SolutionModel.deleteMany({caseId})]);
    await Promise.all([
      SuspectModel.insertMany(draft.suspects.map(s=>({...s,caseId}))),
      EvidenceModel.insertMany(draft.evidence.map(e=>({...e,caseId}))),
      TimelineModel.insertMany(draft.timeline.map(e=>({...e,caseId})))
    ]);
    await SolutionModel.create({caseId,...draft.solution});
    await CaseModel.updateOne({_id:caseDoc._id},{$set:{title:draft.title,briefing:draft.briefing,status:"READY",suspectIds:draft.suspects.map(s=>s.id),evidenceIds:draft.evidence.map(e=>e.id),timelineEventIds:draft.timeline.map(e=>e.id)}});
    await JobModel.updateOne({_id:job._id},{$set:{status:"SUCCEEDED",currentStage:stages[7],progressPercent:100,completedStages:stages,completedAt:new Date()}});
  } catch(error) {
    const message=error instanceof Error?error.message:"Unknown generation error";
    const retries=Number(job.attemptCount)<config.JOB_MAX_ATTEMPTS && /timeout|temporar|429|503|network/i.test(message);
    await Promise.all([JobModel.updateOne({_id:job._id},{$set:{status:retries?"QUEUED":"FAILED",safeErrorMessage:retries?undefined:"We could not generate this case. Please retry.",currentStage:"Generation could not be completed",completedAt:retries?undefined:new Date()}}),CaseModel.updateOne({_id:caseDoc._id},{$set:{status:retries?"GENERATING":"FAILED"}})]);
  }
  return true;
}
export function startWorker(){ if(active)return; active=true; const loop=async()=>{await JobModel.updateMany({status:"RUNNING"},{$set:{status:"QUEUED",currentStage:"Resuming after restart"}});while(active){try{const worked=await runOneJob();if(!worked)await new Promise(r=>setTimeout(r,config.JOB_POLL_INTERVAL_MS));}catch{await new Promise(r=>setTimeout(r,config.JOB_POLL_INTERVAL_MS));}}}; void loop(); }
export function stopWorker(){active=false;}

import mongoose from "mongoose";
import { CaseModel, EvidenceModel, InvestigationModel, JobModel, SolutionModel, SuspectModel, TimelineModel } from "./models/index.js";
import { config } from "./config/index.js";
import { generateDraft } from "./modules/mystery-engine/generator.js";

await mongoose.connect(config.MONGODB_URI);
const ownerHash="demo-fixture-owner";
const draft=await generateDraft({scenario:"A prototype vanished from a university laboratory after the evening team completed its final check. Four people had access, and their explanations of the evening do not agree.",title:"The Vanishing Prototype",genre:"Theft",difficulty:"Medium",caseLength:"Short",suspectCount:4,evidenceIntensity:"Balanced",generateVisuals:true,provider:"mock",language:"English"});
await Promise.all([CaseModel.deleteMany({ownerHash}),JobModel.deleteMany({ownerHash}),InvestigationModel.deleteMany({ownerHash})]);
const c=await CaseModel.create({ownerHash,title:draft.title,scenario:"A prototype vanished from a university laboratory after the evening team completed its final check. Four people had access, and their explanations of the evening do not agree.",genre:"Theft",difficulty:"Medium",caseLength:"Short",language:"English",provider:"mock",status:"READY",briefing:draft.briefing,suspectIds:draft.suspects.map(s=>s.id),evidenceIds:draft.evidence.map(e=>e.id),timelineEventIds:draft.timeline.map(e=>e.id)});
const caseId=String(c._id);await Promise.all([SuspectModel.insertMany(draft.suspects.map(s=>({...s,caseId}))),EvidenceModel.insertMany(draft.evidence.map(e=>({...e,caseId}))),TimelineModel.insertMany(draft.timeline.map(e=>({...e,caseId}))),SolutionModel.create({caseId,...draft.solution})]);
console.log(`Seeded demo case ${caseId}. The seed uses a fixture owner; create a case through the website for a guest-owned case.`);await mongoose.disconnect();

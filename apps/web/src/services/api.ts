import type { CasePublic, EvidenceItem, GenerationJob, PublicSuspect, TimelineEvent } from "@mystery/shared";

const API=import.meta.env.VITE_API_URL??"http://localhost:4000/api/v1";
function getGuestToken(){let token=localStorage.getItem("mystery-guest-token");if(!token){const bytes=crypto.getRandomValues(new Uint8Array(32));token=Array.from(bytes,b=>b.toString(16).padStart(2,"0")).join("");localStorage.setItem("mystery-guest-token",token);}return token;}
export class ApiError extends Error { constructor(message:string,public code:string){super(message);} }
export async function api<T>(path:string,init:RequestInit={}):Promise<T>{const response=await fetch(`${API}${path}`,{...init,headers:{"Content-Type":"application/json","X-Guest-Token":getGuestToken(),...init.headers}});const json=await response.json();if(!response.ok||!json.success)throw new ApiError(json.error?.message??"The request failed.",json.error?.code??"REQUEST_FAILED");return json.data as T;}
export const services={
  create:(body:unknown,key:string)=>api<{caseId:string;jobId:string;status:string}>("/cases",{method:"POST",headers:{"Idempotency-Key":key},body:JSON.stringify(body)}),
  job:(id:string)=>api<GenerationJob>(`/generation-jobs/${id}`),
  retry:(id:string)=>api(`/generation-jobs/${id}/retry`,{method:"POST"}),
  listCases:()=>api<CasePublic[]>("/cases"),
  getCase:(id:string)=>api<CasePublic>(`/cases/${id}`),
  archive:(id:string)=>api(`/cases/${id}`,{method:"DELETE"}),
  suspects:(id:string)=>api<PublicSuspect[]>(`/cases/${id}/suspects`),
  evidence:(id:string)=>api<EvidenceItem[]>(`/cases/${id}/evidence`),
  timeline:(id:string)=>api<TimelineEvent[]>(`/cases/${id}/timeline`),
  start:(id:string)=>api<{id:string;caseId:string;status:string;reviewedEvidenceIds:string[];bookmarkedEvidenceIds:string[];notes:{id:string;text:string}[];board:BoardData}>(`/cases/${id}/investigations`,{method:"POST"}),
  investigation:(id:string)=>api<InvestigationData>(`/investigations/${id}`),
  update:(id:string,action:string,evidenceId:string)=>api(`/investigations/${id}`,{method:"PATCH",body:JSON.stringify({action,evidenceId})}),
  note:(id:string,text:string,noteId?:string)=>api<{notes:{id:string;text:string}[]}>(`/investigations/${id}/notes`,{method:"POST",body:JSON.stringify({text,id:noteId})}),
  saveBoard:(id:string,board:BoardData)=>api<BoardData>(`/investigations/${id}/board`,{method:"PUT",body:JSON.stringify(board)}),
  hint:(id:string,level:number)=>api<{level:number;text:string}>(`/investigations/${id}/hints`,{method:"POST",body:JSON.stringify({level})}),
  accuse:(id:string,body:{selectedSuspectId:string;selectedEvidenceIds:string[];explanation:string})=>api<ResultData>(`/investigations/${id}/accusations`,{method:"POST",body:JSON.stringify(body)}),
  result:(id:string)=>api<ResultData>(`/investigations/${id}/results`)
};
export interface BoardData {nodes:{id:string;type:"SUSPECT"|"EVIDENCE"|"NOTE"|"HYPOTHESIS";referencedEntityId?:string;title:string;content?:string;position:{x:number;y:number}}[];connections:{id:string;sourceNodeId:string;targetNodeId:string;relation:"SUPPORTS"|"CONTRADICTS"|"CORROBORATES"|"DEPENDS_ON"|"RULES_OUT"|"UNCERTAIN";label?:string}[];viewport:{x:number;y:number;zoom:number}}
export interface InvestigationData {id:string;caseId:string;status:string;reviewedEvidenceIds:string[];bookmarkedEvidenceIds:string[];notes:{id:string;text:string}[];board:BoardData;hintsUsed:number}
export interface ResultData {isCorrect:boolean;selectedSuspectId:string;culpritSuspectId:string;culpritName:string;score:number;evidenceScore:number;explanationScore:number;motive:string;opportunityExplanation:string;actionSequence:string[];deductionSteps:string[];criticalEvidenceIds:string[];alternativeSuspectExplanations:{suspectId:string;explanation:string}[];finalExplanation:string;hintsUsed:number}

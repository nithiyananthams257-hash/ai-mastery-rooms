import { z } from "zod";
import type { MysteryDraft } from "../interfaces/index.js";
const DraftSchema = z.object({ title:z.string(), briefing:z.object({summary:z.string(),location:z.string(),incidentTime:z.string(),objective:z.string()}), suspects:z.array(z.object({id:z.string(),name:z.string(),role:z.string(),background:z.string(),personality:z.string(),motive:z.string(),claimedAlibi:z.string(),publicStatement:z.string(),timelineEventIds:z.array(z.string()),evidenceIds:z.array(z.string())})).min(3).max(8), evidence:z.array(z.object({id:z.string(),type:z.string(),title:z.string(),summary:z.string(),description:z.string(),fictionalSource:z.string(),fictionalTimestamp:z.string().optional(),relatedSuspectIds:z.array(z.string()),relatedEventIds:z.array(z.string()),supportsFactIds:z.array(z.string()),contradictsFactIds:z.array(z.string()),reliability:z.enum(["LOW","MEDIUM","HIGH"]),authenticityLabel:z.literal("AI_GENERATED_FICTION"),chat:z.array(z.object({id:z.string(),sender:z.string(),time:z.string(),text:z.string()})).optional(),reconstruction:z.object({cameraLabel:z.string(),frames:z.array(z.object({time:z.string(),caption:z.string()}))}).optional()})).min(6), timeline:z.array(z.object({id:z.string(),timestamp:z.string(),eventType:z.string(),description:z.string(),location:z.string(),suspectIds:z.array(z.string()),evidenceIds:z.array(z.string()),sourceType:z.string(),reliability:z.enum(["LOW","MEDIUM","HIGH"])})).min(4), solution:z.object({culpritSuspectId:z.string(),motive:z.string(),opportunityExplanation:z.string(),actionSequence:z.array(z.string()),criticalEvidenceIds:z.array(z.string()),deductionSteps:z.array(z.string()),alternativeSuspectExplanations:z.array(z.object({suspectId:z.string(),explanation:z.string()})),finalExplanation:z.string()})});
export function validateDraft(input: unknown): MysteryDraft {
  const draft = DraftSchema.parse(input) as MysteryDraft;
  const ids = new Set(draft.suspects.map(s=>s.id));
  if (ids.size !== draft.suspects.length || !ids.has(draft.solution.culpritSuspectId) || draft.suspects.some(s=>!s.id || !s.name)) throw new Error("Invalid suspect references.");
  const evidenceIds = new Set(draft.evidence.map(e=>e.id));
  if (evidenceIds.size !== draft.evidence.length || draft.solution.criticalEvidenceIds.some(id=>!evidenceIds.has(id))) throw new Error("Invalid evidence references.");
  const eventIds = new Set(draft.timeline.map(event=>event.id));
  if(eventIds.size!==draft.timeline.length || draft.timeline.some(event=>event.suspectIds.some(id=>!ids.has(id)) || event.evidenceIds.some(id=>!evidenceIds.has(id)))) throw new Error("Timeline references are invalid.");
  if (draft.suspects.some(s=>s.timelineEventIds.some(id=>!eventIds.has(id)) || s.evidenceIds.some(id=>!evidenceIds.has(id)))) throw new Error("Suspect references are invalid.");
  if (draft.evidence.some(e=>e.relatedSuspectIds.some(id=>!ids.has(id)) || e.relatedEventIds.some(id=>!eventIds.has(id)))) throw new Error("Evidence references are invalid.");
  if(draft.solution.criticalEvidenceIds.length<3 || draft.solution.deductionSteps.length<2) throw new Error("The case does not have enough supporting deductions.");
  return draft;
}

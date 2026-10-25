import { describe, expect, it } from "vitest";
import { generateDraft } from "./modules/mystery-engine/generator.js";
import { validateDraft } from "./ai.js";

const input={scenario:"A prototype disappeared from a university laboratory after a late-night equipment check, and four people disagree about the timeline.",genre:"Theft" as const,difficulty:"Medium" as const,caseLength:"Short" as const,suspectCount:4,evidenceIntensity:"Balanced" as const,generateVisuals:true,provider:"mock" as const,language:"English"};
describe("mock mystery pipeline",()=>{
  it("creates a linked case with a canonical private solution",async()=>{const draft=await generateDraft(input);expect(draft.suspects).toHaveLength(4);expect(draft.evidence.length).toBeGreaterThanOrEqual(8);expect(draft.suspects.some(s=>s.id===draft.solution.culpritSuspectId)).toBe(true);expect(draft.solution.criticalEvidenceIds.every(id=>draft.evidence.some(e=>e.id===id))).toBe(true);expect(draft.evidence.every(e=>e.authenticityLabel==="AI_GENERATED_FICTION")).toBe(true);expect(validateDraft(draft).solution.culpritSuspectId).toBe(draft.solution.culpritSuspectId);});
  it("rejects a solution that references an unknown suspect",async()=>{const draft=await generateDraft(input);expect(()=>validateDraft({...draft,solution:{...draft.solution,culpritSuspectId:"not-a-suspect"}})).toThrow();});
  it("gives the same mock scenario a stable intended solution",async()=>{const a=await generateDraft(input);const b=await generateDraft(input);expect(a.solution.culpritSuspectId).toBe(b.solution.culpritSuspectId);});
  it("keeps selected case size and visual settings meaningful",async()=>{const standard=await generateDraft({...input,caseLength:"Standard"});const textOnly=await generateDraft({...input,generateVisuals:false});expect(standard.evidence).toHaveLength(14);expect(textOnly.evidence.find(e=>e.id==="evidence-4")?.type).toBe("LOCATION_RECORD");expect(textOnly.evidence.find(e=>e.id==="evidence-4")?.reconstruction).toBeUndefined();});
});

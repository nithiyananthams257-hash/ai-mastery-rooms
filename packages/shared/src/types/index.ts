import type { z } from "zod";
import type {
  AccusationInputSchema,
  BoardSchema,
  CasePublicSchema,
  CreateCaseSchema,
  EvidenceSchema,
  GenerationJobSchema,
  PublicSuspectSchema,
  TimelineEventSchema,
} from "../schemas/index.js";

export type CreateCaseInput = z.infer<typeof CreateCaseSchema>;
export type PublicSuspect = z.infer<typeof PublicSuspectSchema>;
export type EvidenceItem = z.infer<typeof EvidenceSchema>;
export type TimelineEvent = z.infer<typeof TimelineEventSchema>;
export type CasePublic = z.infer<typeof CasePublicSchema>;
export type GenerationJob = z.infer<typeof GenerationJobSchema>;
export type AccusationInput = z.infer<typeof AccusationInputSchema>;
export type CaseBoard = z.infer<typeof BoardSchema>;


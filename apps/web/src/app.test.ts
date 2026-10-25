import { describe, expect, it } from "vitest";
import { CreateCaseSchema } from "@mystery/shared";

describe("case creation form contract",()=>{
  it("accepts the valid local mock configuration and supplies safe defaults",()=>{
    const value=CreateCaseSchema.parse({scenario:"A prototype disappeared from a university laboratory after a late-night equipment check.",provider:"mock"});
    expect(value.suspectCount).toBe(4);
    expect(value.generateVisuals).toBe(true);
    expect(value.evidenceIntensity).toBe("Balanced");
  });
  it("rejects a scenario that is too short",()=>{
    expect(CreateCaseSchema.safeParse({scenario:"A short prompt."}).success).toBe(false);
  });
});

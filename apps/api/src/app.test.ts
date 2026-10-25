import { describe, expect, it } from "vitest";
import request from "supertest";
import { app, publicCase } from "./app.js";

describe("API security boundaries",()=>{
  it("reports liveness without disclosing configuration",async()=>{
    const response=await request(app).get("/api/v1/health").expect(200);
    expect(response.body.data).toHaveProperty("status","ok");
    expect(JSON.stringify(response.body)).not.toMatch(/API_KEY|culprit|solution/i);
  });
  it("requires a guest token before case lookup",async()=>{
    const response=await request(app).get("/api/v1/cases").expect(401);
    expect(response.body.error.code).toBe("GUEST_SESSION_REQUIRED");
  });
  it("requires an idempotency key before queuing a case",async()=>{
    const response=await request(app).post("/api/v1/cases").set("X-Guest-Token","a".repeat(64)).send({scenario:"A prototype disappeared from the university laboratory after an evening equipment check."}).expect(400);
    expect(response.body.error.code).toBe("IDEMPOTENCY_KEY_REQUIRED");
  });
  it("projects the case public fields and drops private data",()=>{
    const view=publicCase({_id:"case-1",title:"File",scenario:"A fictional case",status:"READY",solution:{culpritSuspectId:"secret"},ownerHash:"private",prompt:"internal"});
    expect(view).not.toHaveProperty("solution");
    expect(view).not.toHaveProperty("ownerHash");
    expect(view).not.toHaveProperty("prompt");
  });
});

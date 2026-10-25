# Requirements traceability

| Requirement | Implementation | Automated verification | Status |
|---|---|---|---|
| CORE-001 Scenario submission | `apps/web/src/routes/index.tsx`, `apps/api/src/app.ts` | Shared form/API schema tests | Implemented; DB flow not E2E-tested |
| AI-001 Provider abstraction | `apps/api/src/ai.ts` | Mock and schema tests | Implemented; live providers need credentials |
| CASE-001 Canonical culprit solution | `apps/api/src/modules/mystery-engine/generator.ts`, `apps/api/src/models/index.ts` | Generator consistency tests | Implemented |
| EVID-001 Linked fictional evidence | `apps/api/src/modules/mystery-engine/generator.ts`, shared schemas | ID/reference validation tests | Implemented |
| SEC-001 Secret solution isolation | `publicCase`, protected solution collection, results route | Public DTO and guest-access tests | Implemented; full database API test pending |
| GAME-001 Accusation and deterministic score | `apps/api/src/app.ts`, `apps/web/src/routes/index.tsx` | Type and build checks | Implemented; Mongo E2E pending |
| MEDIA-001 Fictional visual fallback | `apps/api/src/modules/mystery-engine/generator.ts`, evidence viewer | Visual-setting generator test | Implemented as client reconstruction |
| MEDIA-002 Camera reconstruction | `EvidenceModal` in `apps/web/src/routes/index.tsx` | Type and build checks | Implemented; labeled frame fallback |
| PERSIST-001 Persist investigations | Mongoose models and owner-scoped APIs | Type and build checks | Implemented; live Mongo run pending |
| BOARD-001 Case-board connections | Investigation board API and UI | Type and build checks | Implemented |
| HINT-001 Bounded hints | Investigation hint route and UI | Type and build checks | Implemented |
| TEST-001 Full investigation workflow | API and web workspaces | Unit/API guard tests | Partial; no local MongoDB available for E2E |
| DEPLOY-001 Setup and production guide | `README.md`, `docs/deployment.md` | Manual document review | Implemented |

“Implemented” indicates code and local unit checks are present. Database-backed end-to-end verification remains explicitly pending because MongoDB/Docker is unavailable in this workspace.


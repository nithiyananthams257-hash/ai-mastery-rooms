# API contracts

All endpoints are rooted at `/api/v1`. JSON success responses are `{ "success": true, "data": ..., "meta": {} }`. Errors are `{ "success": false, "error": { "code", "message", "requestId" } }`.

Protected guest routes require `X-Guest-Token`, a browser-generated 256-bit hex token. The server stores only a SHA-256 hash and never trusts case IDs alone as credentials.

| Method and route | Purpose |
|---|---|
| `GET /health`, `GET /health/ready` | Liveness and database readiness |
| `POST /cases` | Validate scenario and enqueue a job; requires a UUID `Idempotency-Key` |
| `GET /cases`, `GET /cases/:caseId` | List or read owner cases (public DTO only) |
| `DELETE /cases/:caseId` | Archive case |
| `GET /generation-jobs/:jobId` | Read safe progress status |
| `POST /generation-jobs/:jobId/retry`, `/cancel` | Retry failed or cancel queued work |
| `GET /cases/:caseId/suspects` | Public suspect profiles |
| `GET /cases/:caseId/evidence` | Public evidence with type, suspect, and search filters |
| `GET /cases/:caseId/timeline` | Public timeline |
| `POST /cases/:caseId/investigations` | Create or resume an active attempt |
| `GET/PATCH /investigations/:id` | Read progress or persist evidence review/bookmarks |
| `POST /investigations/:id/notes` | Add or update a note |
| `GET/PUT /investigations/:id/board` | Load and persist validated board state |
| `POST /investigations/:id/hints` | Request a bounded hint |
| `POST /investigations/:id/accusations` | Deterministic final evaluation and solution reveal |
| `GET /investigations/:id/results` | Read completed result only |

Input DTOs use the shared Zod schemas. Collection endpoints currently return the complete small V1 case collection; pagination should be added before broad public galleries are enabled.

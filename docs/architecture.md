# Architecture

The product is a TypeScript monorepo containing `apps/web` (React/Vite), `apps/api` (Express), and `packages/shared` (Zod schemas and DTO contracts). The API is a modular monolith. The browser calls only versioned JSON routes under `/api/v1`.

## Request and generation flow

1. The browser sends a validated scenario with its random guest token.
2. The API hashes the token, stores a private case draft and persistent generation job, then returns promptly.
3. The Mongo-backed worker claims queued jobs, builds/validates the mystery through a provider adapter, stores public case material separately from the private solution, then marks the case playable.
4. The browser polls the job resource and opens the case briefing once it is ready.
5. Case evidence and investigation state are persisted through owner-checked API routes.
6. The server compares the accusation with the stored canonical culprit, scores the evidence, records the result, and reveals the solution only after completion.

## Boundaries

- Shared schemas define request validation and public DTO shape.
- API routes perform validation and authorization; Mongoose models persist records.
- AI provider adapters return validated drafts; deterministic code verifies IDs and relationships before publication.
- `CaseSolution` is a separate collection. Public case, suspect, evidence, timeline, and job responses use explicit projections.
- The investigation board is player-authored data and is never inferred from the hidden solution.
- Media is served as fictional case metadata and frame reconstructions; no generated binary is required for v1 playback.

The initial queue is persisted in MongoDB and claimed atomically. For higher throughput, deploy a dedicated worker and replace the queue transport with BullMQ/Redis while preserving the job contract.

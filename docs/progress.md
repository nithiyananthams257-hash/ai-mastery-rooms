# Implementation progress

## Current phase

Phase 10 — core application implementation and local verification.

## Implemented

- [x] TypeScript npm-workspaces monorepo, shared Zod contracts, setup and deployment documentation.
- [x] Responsive landing, creation, generation progress, briefing, archive, settings, and investigation pages.
- [x] MongoDB/Mongoose models for cases, private solutions, suspects, evidence, timeline, jobs, investigations, and accusations.
- [x] Hashed random guest ownership tokens and owner checks on protected routes.
- [x] Persistent queued generation worker with progress, retry, safe failure, and restart recovery.
- [x] Idempotency key enforcement for case creation and stable repeat handling for hint/final-submission retries.
- [x] Deterministic mock case generator with schema/reference validation, locked solution, selectable suspect count, evidence size, and visual fallback.
- [x] Server-only Gemini (`@google/genai`) and Anthropic provider adapters, with model IDs configured through the environment.
- [x] Evidence search, type/suspect/review/bookmark filters, chat viewer, fictional camera reconstruction, clue comparison, suspect profiles, and timeline.
- [x] Persisted notes and case board with suspect/evidence/note cards, card ordering, selectable connection types, reference validation, and save/restore.
- [x] Bounded sequential hints; final accusation validation, deterministic scoring, persisted results, and authorized solution reveal.
- [x] Explicit fictional evidence labels and non-graphic media fallback presentation.
- [x] API ownership/public DTO tests, generation validator tests, and web form contract tests.

## Verification completed

- `npm run typecheck` — passed for shared, API, and web workspaces.
- `npm run build` — passed for all workspaces.
- `npm test` — passed: 10 tests (8 API, 2 web).
- `npm audit --json` — 0 reported vulnerabilities across 384 dependency nodes.
- Production bundle generated at `apps/web/dist`.

## Environment constraints and remaining work

- This workspace has no Docker command or local `mongod`; the MongoDB-backed full create-to-result workflow could not be run end to end. Start MongoDB with `docker compose up -d mongodb` on a machine with Docker, then use `npm run dev`.
- The Vite config uses the runner loader and disables automatic dependency discovery so it works within the restricted workspace. Production build and web tests pass; full browser interaction was not run here.
- Real Gemini and Claude calls require server credentials and supported model IDs; those providers were not exercised here. Mock mode has no paid-service requirement.
- The initial release still needs a live database integration/E2E run and accessibility review before deployment.
- Independent second-provider validation/repair, actual image/video-provider uploads and object storage, accounts, and multiplayer remain future or externally configured work. The current camera viewer is a fictional frame reconstruction.
- The seed command inserts a development fixture with a fixture-only owner; use the website to create a browser-owned case.


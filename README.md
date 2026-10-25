# AI Mystery Room

A fictional, AI-assisted detective investigation game. Create a case from a scenario, examine suspects and evidence, connect clues, then submit an accusation to reveal the server-held canonical solution.

## Requirements

- Node.js 22.6 or newer (developed with Node 24)
- npm
- Docker Desktop (recommended for local MongoDB) or a MongoDB connection string
- Optional Gemini or Claude credentials for real provider generation. Mock mode works without credentials.

## Local development

1. Copy `.env.example` to `.env` and adjust values if needed. Keep credentials out of source control.
2. Start MongoDB: `docker compose up -d mongodb`.
3. Install dependencies: `npm.cmd install` in PowerShell, or `npm install` in other shells.
4. Start the API and web app: `npm.cmd run dev` in PowerShell, or `npm run dev` in other shells.
5. Open <http://localhost:5173>. The API listens on <http://localhost:4000>.

The API uses a MongoDB-backed generation worker. Generation is queued and progress is polled from the API. In `AI_MODE=mock` and with the Mock provider selected, cases are generated locally without external calls. To use Gemini or Claude, configure the corresponding server-only API key and model in `.env`, then select the provider in the case form. A missing provider configuration is reported as an error; it is not presented as a successful AI generation.

Guest ownership uses a high-entropy browser token. The server stores only its SHA-256 digest. Cases are private to the browser profile that created them; clearing its local storage removes access. No user account is required in this release.

## Commands

- `npm run dev` — run both applications.
- `npm run build` — build shared contracts, API, and web app.
- `npm run typecheck` — type-check all workspaces.
- `npm test` — run the workspace test suites.
- `npm run seed` — insert a fixture case into MongoDB (see note in the API log; fixture owner records are not guest-accessible).
- `docker compose up -d mongodb` — start local persistence.

## Configuration

See `.env.example` and [deployment guide](docs/deployment.md). Frontend configuration may contain only public values such as `VITE_API_URL`; AI credentials must remain in the API environment.

## Product and architecture

- [Architecture](docs/architecture.md)
- [Architecture decisions](docs/architecture-decisions.md)
- [API contracts](docs/api-contracts.md)
- [Database schema](docs/database-schema.md)
- [AI pipeline](docs/ai-pipeline.md)
- [Security](docs/security.md)
- [Testing](docs/testing.md)
- [Deployment](docs/deployment.md)
- [Progress](docs/progress.md)
- [Requirements traceability](docs/requirements-traceability.md)

All messages, reports, and scene reconstructions are fictional entertainment content. Do not submit real private conversations, actual surveillance footage, or sensitive personal information.

Additional setup checks: `npm run check:env` validates credentials for the selected provider mode, and `npm run verify:build` runs the type checks and production builds. The web client is organized under `apps/web/src/routes`, `layouts`, `features`, `services`, and `styles`; API generation, AI providers, and persistence models live under their corresponding `apps/api/src` modules.

The root utility scripts use Node.js type stripping and require Node.js 22.6 or newer.

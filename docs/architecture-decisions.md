# Architecture decisions

## 2026-10-25 — Initial implementation

- Use a TypeScript npm-workspaces monorepo with React/Vite and an Express API, following the specified modular-monolith boundary.
- Use MongoDB/Mongoose as the source of persistence. The generation queue is a MongoDB-backed worker for the initial release, so jobs survive process restarts without requiring an extra paid service. Redis/BullMQ can be adopted if deployment throughput requires it.
- Guest ownership is established using a random browser token sent in a header and stored server-side only as a SHA-256 digest; a case ID alone never grants access.
- AI is mock-first by default. Gemini and Claude adapters are server-only and configured by environment variables. The canonical answer is locked by deterministic backend logic and never delegated to a model evaluator.
- Media uses original UI diagrams and frame-based reconstructions until an image provider is configured; all generated content is explicitly labeled fictional.
- V1 uses a single final accusation per investigation. A replay creates a new investigation while retaining the completed result.

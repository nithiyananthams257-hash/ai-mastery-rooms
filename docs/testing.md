# Testing and verification

Automated checks are run from the repository root after dependencies are installed:

- `npm run typecheck` — shared contracts, API, and browser app.
- `npm run build` — production build for every workspace.
- `npm test` — API logic and frontend component tests.

The critical end-to-end scenario is: create a case in mock mode; poll its persistent job; open briefing; review and bookmark evidence; save a note and board; request a hint; submit both a correct and incorrect accusation in separate attempts; verify deterministic scoring, persisted results, and no solution fields in pre-completion DTOs.

Provider tests must use mock adapters and never contact paid AI services. Mongo integration tests require a local test database and must clean up owner-scoped fixtures. Browser tests should verify mobile navigation, keyboard interaction, polling failure/retry, and secret isolation.

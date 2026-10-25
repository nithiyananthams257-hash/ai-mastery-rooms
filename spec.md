# AI MYSTERY ROOM
## MASTER SPECIFICATION — SPEC-DRIVEN DEVELOPMENT (SDD)

**Document:** `spec.md`  
**Project:** AI Mystery Room  
**Specification Version:** 1.0.0  
**Status:** Master Development Specification  
**Implementation Agent:** OpenAI Codex  
**Architecture:** MERN Stack + AI Provider Abstraction  
**Primary AI Providers:** Google Gemini and Anthropic Claude  
**Application Type:** Full-stack, AI-powered, interactive mystery investigation website  
**Primary Language:** English, with architecture prepared for Tamil support  
**Development Principle:** Specification-first, test-driven, modular, secure, and production-oriented

---

# 0. SINGLE SOURCE OF TRUTH

## 0.1 Purpose of This Document

This document is the authoritative specification for the complete AI Mystery Room application.

Codex must use this file as the single source of truth for:

- Product requirements.
- Functional requirements.
- User interface and user experience.
- System architecture.
- Frontend and backend implementation.
- AI model orchestration.
- Mystery generation and validation.
- Evidence generation.
- Database design.
- API contracts.
- Security and privacy.
- Testing.
- Deployment.
- Acceptance criteria.
- Implementation order.

If an implementation decision is not explicitly defined, Codex must choose the simplest secure, maintainable solution that satisfies the project's goals and record the decision in `docs/architecture-decisions.md`.

When implementation details conflict with this specification, this specification takes precedence unless a deliberate, documented specification change is approved.

## 0.2 Non-Negotiable Rules

1. Build a complete, functional website, not a static mockup.
2. Do not stop after building the landing page or dashboard.
3. Every visible interactive control must have a real, meaningful behavior.
4. Every mystery must have a predetermined, internally consistent solution.
5. The correct culprit must remain hidden until the player submits an accusation or explicitly requests the solution through an allowed reveal action.
6. AI-generated evidence must be connected to the underlying case facts.
7. The frontend must never receive the secret solution before the game is completed.
8. Gemini and Claude must be accessed through secure backend adapters.
9. AI API keys must never be exposed in frontend code, browser storage, public API responses, or client-side bundles.
10. The website must work in development without paid AI services by using a clearly identified mock provider.
11. AI-generated images, reconstructed scenes, and simulated communications must be clearly identified as fictional.
12. AI responses must be validated before being stored or shown to users.
13. Long-running AI generation must not block an HTTP request indefinitely.
14. All critical workflows must have automated tests.
15. Never replace working functionality with placeholder buttons, fake loading screens, or hardcoded success messages.
16. Do not fabricate real CCTV footage, real private conversations, or actual evidence. The platform creates fictional entertainment content.
17. Do not mark a task complete until its implementation and relevant tests have been verified.
18. Keep the project runnable throughout development.
19. Do not silently omit requirements because implementation is difficult.
20. Update the specification when an approved requirement changes.

---

# 1. PRODUCT DEFINITION

## 1.1 Project Overview

AI Mystery Room is an AI-powered detective investigation platform that transforms a user's short scenario, story idea, or fictional situation into a complete interactive mystery.

The player becomes the lead investigator.

Instead of reading a mystery passively, the player explores a virtual investigation room, examines digital evidence, studies suspect statements, compares timelines, discovers contradictions, requests interviews, and eventually accuses a suspect.

The backend uses Google Gemini and Anthropic Claude to generate and validate fictional mystery content. Image and video generation are handled by provider adapters when supported services are configured. The application must also support generated visual alternatives when a dedicated media-generation provider is unavailable.

### Example user input

"At 9 PM, a valuable prototype disappeared from a university innovation laboratory. Four students had access to the room. Each student gives a different explanation about when they left."

### Expected generated case

The application creates:

- A case title and case briefing.
- An incident description.
- A location and fictional incident timeline.
- Four distinct suspects.
- Suspect profiles, motives, statements, and alibis.
- A secret culprit and explanation.
- A set of interconnected clues.
- Fictional chat conversations.
- Scene photographs and relevant images.
- Simulated camera footage or reconstructed visual sequences.
- Witness interviews.
- Forensic-style fictional reports.
- Contradictions and misleading clues.
- An investigation timeline.
- A case board for connecting clues.
- A final accusation screen.
- A detailed explanation of the correct solution.

The player must determine which suspect is responsible using the evidence available in the case.

## 1.2 Product Vision

Create a replayable digital detective experience in which every mystery feels like a carefully designed investigation rather than a randomly generated story.

The product must combine:

- Generative AI.
- Logical reasoning.
- Interactive storytelling.
- Evidence exploration.
- Visual investigation.
- Decision-making.
- Game progression.
- Case history and replayability.

## 1.3 Target Audience

- Mystery and detective-fiction enthusiasts.
- Puzzle and logic-game players.
- Casual gamers.
- Creative writers.
- Users who enjoy interactive narratives.
- Friends and groups who want to solve fictional cases together.

## 1.4 Primary User Journey

1. Open the website.
2. Select **Create Mystery**.
3. Enter a scenario or story.
4. Choose a genre, difficulty, and case length.
5. Configure AI generation options.
6. Generate the mystery.
7. Review the case briefing.
8. Enter the investigation room.
9. Examine suspects and evidence.
10. Read fictional messages and witness statements.
11. View generated scene images and reconstructed footage.
12. Compare evidence against the suspect timeline.
13. Save important clues and build a theory.
14. Request optional hints.
15. Select a culprit.
16. Submit the accusation.
17. View the verdict and solution explanation.
18. Review the score and investigation performance.
19. Replay the case or generate a new mystery.

---

# 2. PRODUCT SCOPE

## 2.1 Required for the Initial Release

The following are mandatory for the first complete release.

- Responsive public landing page.
- Scenario-based mystery creation.
- Genre and difficulty selection.
- Gemini and Claude provider integration.
- AI mystery generation pipeline.
- Secret solution storage.
- Deterministic culprit selection.
- Suspect profiles.
- Evidence generation.
- Fictional chat transcript viewer.
- Evidence image viewer.
- Simulated CCTV-style scene viewer.
- Witness statement viewer.
- Investigation timeline.
- Search, filtering, and evidence bookmarking.
- Case board for linking clues.
- Accusation system.
- Verdict and solution reveal.
- Scoring and investigation summary.
- Case persistence in MongoDB.
- Loading, error, retry, and generation-status states.
- Secure backend configuration.
- Mock AI mode for local development.
- Automated tests.
- Setup instructions and deployment documentation.

## 2.2 Later Enhancements

The architecture must allow future implementation of:

- User registration and login.
- Public case gallery.
- Private and shareable cases.
- Daily mystery challenges.
- Achievements and badges.
- User-created case templates.
- Multiplayer investigation rooms.
- Real-time collaboration.
- Leaderboards.
- Tamil language support.
- Additional AI providers.
- Additional image and video providers.
- Community-created mysteries.
- Case ratings and feedback.
- Premium usage limits and subscriptions.
- AI-generated narration and sound effects.

These features must not prevent completion of the initial release.

## 2.3 Out of Scope for Version 1

Unless explicitly approved later, do not implement:

- Real-world criminal investigations.
- Connections to actual WhatsApp accounts.
- Real surveillance camera access.
- Real private-message scraping.
- Real police or government database access.
- Facial recognition for identifying real people.
- Uploading fabricated evidence into real investigations.
- A real-time multiplayer system before the single-player workflow is stable.

---

# 3. TECHNOLOGY STACK

## 3.1 Frontend

| Technology | Responsibility |
|---|---|
| React | Component-based UI |
| Vite | Frontend development and production build |
| TypeScript | Type safety |
| React Router | Page navigation |
| Tailwind CSS | Styling and responsive design |
| Zustand | Investigation and UI state |
| TanStack Query | API requests, caching, and server state |
| Axios or typed fetch wrapper | HTTP communication |
| React Hook Form | Forms and validation |
| Zod | Client-side schema validation |
| Lucide React | Interface icons |
| Framer Motion | Interface animations |
| Vitest | Frontend unit tests |
| React Testing Library | Component tests |
| Playwright | End-to-end browser tests |

Use maintained, compatible package versions and commit the package lockfile.

## 3.2 Backend

| Technology | Responsibility |
|---|---|
| Node.js | JavaScript runtime |
| Express | REST API |
| TypeScript | Type safety |
| MongoDB | Persistent database |
| Mongoose | Database models and queries |
| Zod | API and AI-output validation |
| Official Gemini SDK | Gemini integration |
| Official Anthropic SDK | Claude integration |
| Pino | Structured application logging |
| Helmet | Security-related HTTP headers |
| CORS configuration | Controlled cross-origin access |
| Rate-limiting middleware | Request abuse prevention |
| Vitest | Backend unit tests |
| Supertest | HTTP API tests |

Use a modular monolith for Version 1. Do not introduce microservices unless an actual scaling requirement justifies them.

## 3.3 AI Providers

### Google Gemini

Use Gemini for configurable tasks such as:

- Scenario understanding.
- Mystery generation.
- Suspect profile creation.
- Evidence drafting.
- Timeline reasoning.
- Evidence consistency checks.
- Image understanding when an appropriate vision-capable model is configured.
- Hint generation.
- Solution explanation.

### Anthropic Claude

Use Claude for configurable tasks such as:

- Independent mystery generation.
- Narrative refinement.
- Logical contradiction detection.
- Suspect statement analysis.
- Evidence quality evaluation.
- Alternative explanation analysis.
- Final case validation.

The provider responsible for a task must be configurable. Do not hardcode the application to one provider.

### Image and video generation

Do not assume that a text-generation API automatically generates image files or complete videos.

Use separate media-generation adapters for providers that actually support the required output.

The application must support:

- Generated scene images.
- Generated suspect illustrations.
- Evidence document images.
- Fictional interface screenshots.
- CCTV-style scene reconstructions.
- Optional short video clips where supported.

If media generation is unavailable, provide a functional fallback, such as an original SVG illustration, generated scene diagram, or animated reconstruction built from case data.

Label all such alternatives clearly.

---

# 4. ARCHITECTURE OVERVIEW

## 4.1 High-Level Architecture

```text
React Frontend
      |
      | HTTPS / JSON
      v
Express REST API
      |
      +--------------------------+
      |                          |
      v                          v
Authentication /            Case Service
Authorization                    |
      |                          v
      |                    Mystery Orchestrator
      |                          |
      |                +---------+---------+
      |                |                   |
      |                v                   v
      |          Gemini Adapter      Claude Adapter
      |                |                   |
      |                +---------+---------+
      |                          |
      |                    Case Validator
      |                          |
      |                  Secret Solution
      |                          |
      |                  Evidence Generator
      |                          |
      |                  Media Adapters
      |                          |
      +--------------------------+
                 |
                 v
             MongoDB
                 |
                 v
        Object Storage Adapter
        for generated media
```

## 4.2 Architectural Rules

1. The frontend communicates only with the backend API.
2. The frontend must not call Gemini or Claude directly.
3. The backend must own mystery generation, validation, scoring, and solution reveal.
4. AI provider implementations must be isolated behind common interfaces.
5. Case generation must be a multi-step pipeline.
6. A generated mystery must pass validation before it becomes playable.
7. Private solution data must be stored separately from public case data.
8. Evidence files must use storage references rather than embedding large binary files in MongoDB.
9. Every generation operation must have a unique job ID.
10. Failed jobs must be recoverable without corrupting the case.
11. All external providers must support timeouts and controlled retries.
12. The system must support mock providers for testing.
13. Business logic must remain independent of React components.
14. Database operations must be isolated from route handlers.
15. All public API responses must use explicit response DTOs.

## 4.3 Core Domain Modules

Implement these backend modules:

- `auth`
- `users`
- `cases`
- `generation`
- `mystery-engine`
- `suspects`
- `evidence`
- `media`
- `investigation`
- `case-board`
- `accusations`
- `scoring`
- `hints`
- `history`
- `ai-providers`
- `jobs`
- `moderation`
- `admin`
- `health`

Each module must have clear responsibilities and testable boundaries.

---

# 5. REPOSITORY STRUCTURE

Use a monorepo structure with a frontend application, backend application, and shared types.

```text
ai-mystery-room/
|
|-- spec.md
|-- README.md
|-- package.json
|-- package-lock.json
|-- .gitignore
|-- .env.example
|-- docker-compose.yml
|
|-- docs/
|   |-- architecture.md
|   |-- architecture-decisions.md
|   |-- api-contracts.md
|   |-- database-schema.md
|   |-- ai-pipeline.md
|   |-- security.md
|   |-- testing.md
|   |-- deployment.md
|   |-- progress.md
|   |-- requirements-traceability.md
|
|-- apps/
|   |
|   |-- web/
|   |   |-- package.json
|   |   |-- vite.config.ts
|   |   |-- tsconfig.json
|   |   |-- index.html
|   |   |
|   |   |-- src/
|   |       |-- app/
|   |       |-- routes/
|   |       |-- components/
|   |       |-- layouts/
|   |       |-- features/
|   |       |   |-- landing/
|   |       |   |-- create-case/
|   |       |   |-- investigation/
|   |       |   |-- evidence/
|   |       |   |-- suspects/
|   |       |   |-- timeline/
|   |       |   |-- case-board/
|   |       |   |-- accusation/
|   |       |   |-- results/
|   |       |   |-- history/
|   |       |   |-- settings/
|   |       |
|   |       |-- services/
|   |       |-- stores/
|   |       |-- hooks/
|   |       |-- schemas/
|   |       |-- types/
|   |       |-- utils/
|   |       |-- styles/
|   |       |-- test/
|   |
|   |-- api/
|       |-- package.json
|       |-- tsconfig.json
|       |-- src/
|           |-- server.ts
|           |-- app.ts
|           |
|           |-- config/
|           |-- routes/
|           |-- controllers/
|           |-- services/
|           |-- repositories/
|           |-- models/
|           |-- schemas/
|           |-- middleware/
|           |-- errors/
|           |-- utils/
|           |
|           |-- modules/
|           |   |-- auth/
|           |   |-- cases/
|           |   |-- generation/
|           |   |-- mystery-engine/
|           |   |-- evidence/
|           |   |-- investigation/
|           |   |-- case-board/
|           |   |-- accusations/
|           |   |-- scoring/
|           |   |-- hints/
|           |   |-- history/
|           |   |-- media/
|           |   |-- moderation/
|           |   |-- admin/
|           |
|           |-- ai/
|           |   |-- interfaces/
|           |   |-- orchestrator/
|           |   |-- prompts/
|           |   |-- validators/
|           |   |-- providers/
|           |   |   |-- gemini/
|           |   |   |-- claude/
|           |   |   |-- mock/
|           |   |-- media-providers/
|           |   |-- schemas/
|           |
|           |-- jobs/
|           |-- storage/
|           |-- tests/
|
|-- packages/
|   |-- shared/
|   |   |-- package.json
|   |   |-- src/
|   |       |-- types/
|   |       |-- schemas/
|   |       |-- constants/
|   |       |-- contracts/
|
|-- scripts/
|   |-- seed.ts
|   |-- check-env.ts
|   |-- verify-build.ts
|
|-- tests/
    |-- integration/
    |-- e2e/
    |-- fixtures/
```

This is the intended logical structure. Codex may adjust file boundaries when necessary, but must preserve the architecture and responsibilities.

Do not create empty modules merely to imitate the tree. Implement the required modules with functional code.

---

# 6. USER EXPERIENCE AND VISUAL DESIGN

## 6.1 Overall Design Direction

Create a polished detective investigation environment inspired by private investigation rooms, evidence archives, case files, forensic analysis dashboards, and cinematic mystery games.

The website should feel immersive without sacrificing usability.

### Design characteristics

- Dark investigation-room theme.
- Charcoal and deep navy backgrounds.
- Muted off-white text.
- Restrained amber accents for active clues.
- Red reserved for warnings and critical case statuses.
- Green used for confirmed findings where appropriate.
- Subtle paper textures and evidence-card surfaces.
- Clear typographic hierarchy.
- Carefully controlled transitions.
- Readable timelines and diagrams.
- Large, inspectable evidence previews.
- Responsive desktop, tablet, and mobile layouts.

Do not use excessive neon effects, random glowing borders, constant animations, or decorative elements that make evidence difficult to read.

### Visual assets

Create original branding and interface assets. Do not use copyrighted detective-game logos or recognizable characters from existing franchises.

## 6.2 Global Navigation

The primary navigation must include:

- Home.
- Create Mystery.
- My Cases.
- How to Play.
- Settings.

Include a clear primary call to action.

When the user has an active investigation, provide an easy route back to it.

## 6.3 Required Pages

### Page 1: Landing Page

Display:

- Product logo and name.
- A short description.
- Hero headline.
- A scenario input preview.
- Create Mystery button.
- Sample case cards.
- Feature explanations.
- How-it-works section.
- Privacy and fictional-evidence notice.
- Footer with help and legal links.

The main call to action must open the actual case-creation flow.

### Page 2: Mystery Creation

Provide a form with:

- Scenario or story text.
- Case title override, optional.
- Mystery genre.
- Difficulty.
- Case length.
- Number of suspects.
- Evidence intensity.
- Visual generation setting.
- AI provider preference.
- Language.
- Generate Mystery button.

Suggested genres:

- Theft.
- Missing object.
- Locked-room mystery.
- Corporate espionage.
- Historical mystery.
- School or college mystery.
- Museum mystery.
- Fictional murder mystery.
- Cyber mystery.
- Disappearance.
- Secret identity.
- Custom.

Use non-graphic presentation for serious crimes.

Suggested difficulty levels:

- Easy.
- Medium.
- Hard.
- Expert.

Suggested case lengths:

- Short: approximately 3–5 suspects and 8–12 evidence items.
- Standard: approximately 4–6 suspects and 12–20 evidence items.
- Extended: approximately 5–8 suspects and 20–30 evidence items.

These values are generation targets, not guarantees. Validate limits and keep the experience playable.

### Page 3: Generation Progress

Display:

- Case title or temporary generation title.
- Current generation stage.
- Progress indicator.
- Completed stages.
- Error or retry information.
- Cancel generation action where safe.
- Return-to-dashboard action.

Possible stages:

1. Understanding the scenario.
2. Designing the mystery.
3. Creating suspects.
4. Establishing the hidden solution.
5. Generating evidence.
6. Checking consistency.
7. Preparing visual assets.
8. Finalizing the case.

Progress must be derived from actual backend job state. Never invent a percentage that suggests work is complete when it is not.

### Page 4: Case Briefing

Display:

- Case title.
- Case ID.
- Incident summary.
- Incident location.
- Incident date or fictional time period.
- Investigation objective.
- Initial facts.
- Suspect count.
- Evidence count.
- Difficulty.
- Investigation rules.
- Start Investigation button.

Do not reveal the culprit or secret solution in the briefing.

### Page 5: Investigation Room

This is the main game interface.

Desktop layout:

- Left panel: case navigation and suspect list.
- Center panel: active evidence or investigation workspace.
- Right panel: selected clues, notes, and investigation insights.

Include collapsible panels to maintain sufficient working space.

Mobile layout:

- Dedicated case navigation.
- Single primary content panel.
- Bottom navigation or compact tab bar.
- Full-screen evidence viewer.
- Accessible clue and suspect selection.
- No requirement to use hover interactions.

### Page 6: Suspect Profiles

Each suspect page must include:

- Portrait or illustrative avatar.
- Full fictional name.
- Role in the case.
- Relationship to the incident.
- Known motive.
- Claimed alibi.
- Relevant timeline.
- Interview transcript.
- Evidence connected to the suspect.
- Unresolved questions.
- Add to case board action.

A suspect's motive is not proof of guilt. The interface must encourage players to evaluate evidence rather than guess based on personality or appearance.

### Page 7: Evidence Viewer

Provide specialized viewers for:

- Chat transcripts.
- Images.
- Documents.
- Camera reconstructions.
- Witness statements.
- Interview transcripts.
- Timeline records.
- Forensic-style reports.
- Physical clue descriptions.

Every evidence item must include a unique evidence ID, source context, fictional timestamp where relevant, reliability indicator, and relationship to the case.

### Page 8: Case Board

Allow players to:

- Pin evidence.
- Add suspects.
- Add personal notes.
- Connect evidence items.
- Record a theory.
- Identify contradictions.
- Remove connections.
- Rearrange cards.
- Save the board.
- Review all connected clues.

Use SVG, CSS positioning, or an appropriate React graph library.

The case board is a player reasoning tool. It must not silently disclose the solution.

### Page 9: Accusation

Display:

- Suspect selection.
- Primary evidence selection.
- Explanation text.
- Optional confidence selection.
- Confirmation step.
- Submit Accusation button.

Require a suspect selection. The player may optionally provide a written explanation.

The server must evaluate the accusation using the stored secret solution, not a new AI judgment.

### Page 10: Results

Display:

- Correct or incorrect accusation.
- Culprit identity.
- Complete solution narrative.
- Motive and opportunity.
- Timeline reconstruction.
- Key evidence.
- Explanation of misleading clues.
- Unresolved or ambiguous clues, if any.
- Investigation score.
- Hint usage.
- New Mystery button.
- Replay Case button.

The result page must be derived from the canonical case solution and completed game state.

### Page 11: My Cases

Display:

- Case title.
- Creation date.
- Genre.
- Difficulty.
- Investigation status.
- Completion status.
- Latest progress.
- Resume button.
- View Results button for completed cases.
- Delete action with confirmation.

### Page 12: Settings

Include:

- Theme preference.
- Reduced-motion preference.
- Sound preference, if sound is implemented.
- Language selection.
- AI generation preferences where appropriate.
- Privacy controls.
- Account management when authentication is implemented.

Never expose secret API keys or internal provider credentials in user-facing settings.

---

# 7. MYSTERY GENERATION ENGINE

## 7.1 Core Requirement

The mystery engine is the most important backend component.

It must produce a structured, logically solvable investigation, not just a narrative.

The generated mystery must have:

- A defined incident.
- A known timeline.
- A finite suspect list.
- A predetermined culprit.
- A coherent motive.
- A plausible opportunity.
- Evidence supporting the solution.
- Evidence that challenges alternative suspects.
- At least one meaningful contradiction or deduction.
- A final explanation that matches the evidence.
- No unresolved contradiction that makes the intended solution impossible to determine.

## 7.2 Generation Pipeline

Implement the following pipeline.

### Stage A: Scenario Normalization

Convert user input into a normalized scenario object.

Extract:

- Core premise.
- Setting.
- Incident.
- Relevant characters.
- Known facts.
- User-specified restrictions.
- Preferred genre.
- Tone.
- Difficulty.
- Language.
- Content limitations.

Do not assume facts that contradict the user's scenario.

If the scenario is too vague, expand it conservatively while preserving the premise.

### Stage B: Case Blueprint

Create an internal case blueprint before generating detailed evidence.

The blueprint must include:

- Case ID.
- Incident type.
- Incident time.
- Discovery time.
- Location.
- Suspects.
- Culprit.
- Motive.
- Opportunity.
- Timeline.
- Critical facts.
- Required deductions.
- Red herrings.
- Expected solution.
- Evidence requirements.
- Evidence dependency graph.

The blueprint must be stored as private backend data.

### Stage C: Culprit and Solution Locking

Select the culprit and establish the explanation before generating the evidence.

Store an immutable solution version for the playable case.

All subsequent generation stages must reference the same blueprint version.

If the case needs to be regenerated, generate a new draft version and validate it before replacing the playable version.

Never change the culprit silently after evidence generation.

### Stage D: Suspect Generation

Generate each suspect from the blueprint.

For every suspect, define:

- Identity.
- Background.
- Role.
- Relationship to the incident.
- Possible motive.
- Opportunity.
- Public statement.
- Private knowledge.
- Timeline.
- Alibi.
- Relevant evidence.
- Contradictions.
- Whether the suspect is guilty or innocent.
- Explanation for suspicious behavior.

Do not make all innocent suspects perfectly honest. They may have unrelated secrets, embarrassment, misunderstandings, or independent reasons to lie, provided the story remains coherent.

### Stage E: Timeline Construction

Construct a chronological sequence of relevant events.

Every timeline entry must contain:

- Event ID.
- Timestamp.
- Event description.
- Location.
- Characters involved.
- Source of information.
- Confidence or reliability.
- Whether the event is directly observed, reported, inferred, or uncertain.

The same event must not have incompatible timestamps across evidence sources unless the discrepancy is deliberate and explained.

### Stage F: Evidence Planning

Before writing evidence, construct a list of facts that must be demonstrated.

Each critical deduction must have supporting evidence.

For example:

- A suspect claims to have left at 8:30 PM.
- A fictional message shows that suspect coordinating an activity at 8:42 PM.
- A scene record places the suspect near the restricted area at 8:45 PM.
- Another clue disproves the suspect's alternative explanation.
- A separate piece of evidence rules out an innocent explanation.

This is a planning example, not a required plot.

### Stage G: Evidence Generation

Generate each evidence item from the locked blueprint and timeline.

Each item must have:

- Unique ID.
- Type.
- Title.
- Description.
- Content.
- Fictional source.
- Timestamp when relevant.
- Related suspects.
- Related timeline events.
- Facts supported.
- Facts contradicted.
- Reliability.
- Reveal conditions.
- Optional media asset.
- Player-visible summary.

### Stage H: Independent Validation

Validate the case using a separate reasoning pass.

Prefer a different AI provider from the primary generator when both providers are configured.

The validator must check:

- Timeline consistency.
- Suspect consistency.
- Motive and opportunity.
- Evidence-to-fact alignment.
- Whether the culprit is identifiable.
- Whether innocent suspects can be ruled out.
- Whether the explanation matches all critical evidence.
- Whether any evidence accidentally reveals the answer.
- Whether red herrings have plausible explanations.
- Whether generated media is consistent with the textual evidence.

A second model is a reviewer, not the final authority. Deterministic application rules and schema validation remain mandatory.

### Stage I: Repair and Retry

If validation fails:

1. Record structured validation errors.
2. Identify the affected case elements.
3. Regenerate only the necessary elements where safe.
4. Revalidate the entire dependent evidence set.
5. Retry a bounded number of times.
6. If the case still fails, discard the invalid draft.
7. Return a useful error or generate a known-valid fallback case.

Never expose an invalid draft as a playable mystery.

### Stage J: Publish the Case

Only publish a case when:

- The blueprint is valid.
- The secret solution exists.
- All required suspects exist.
- All required evidence exists.
- Evidence references are valid.
- The timeline passes consistency checks.
- The intended solution is supported.
- The case passes ambiguity validation.
- Public and private data are separated.
- Required media tasks are either completed or have valid fallbacks.

---

# 8. SOLVABILITY AND DEDUCTION REQUIREMENTS

## 8.1 Unique Intended Solution

Every case must have one intended culprit.

The engine must attempt to establish that the intended culprit is the only suspect consistent with all critical facts.

This does not mean every clue must be conclusive individually. The complete evidence set must support a defensible conclusion.

## 8.2 Evidence Dependency Graph

Represent important facts and evidence relationships as a graph.

Example:

```text
Evidence A: suspect's claimed departure
             |
             v
Evidence B: later communication
             |
             v
Fact C: suspect's timeline is inconsistent
             |
             v
Evidence D: independent location record
             |
             v
Deduction E: suspect had an opportunity
             |
             v
Evidence F: motive and action connection
             |
             v
Intended solution becomes supportable
```

The graph must be stored as structured data.

Support graph relationships such as:

- `supports`
- `contradicts`
- `depends_on`
- `corroborates`
- `rules_out`
- `contextualizes`

## 8.3 Solvability Validation

Implement deterministic validation wherever possible.

Examples:

- Every referenced suspect ID exists.
- Every referenced event ID exists.
- Every evidence ID is unique.
- Every required deduction has evidence.
- Every culprit reference resolves to one suspect.
- Every timeline event has a valid timestamp.
- No event occurs before the case's allowed time period unless explicitly relevant.
- Every generated image or video has a valid evidence association.
- Every contradiction is classified as intentional or erroneous.
- Every red herring has a plausible explanation.

AI-assisted validation should additionally evaluate whether the case can be solved through reasonable inference.

If a unique solution cannot be established confidently, regenerate or simplify the case.

## 8.4 Avoid Unfair Mysteries

Do not rely on:

- Information that is never revealed to the player.
- Random culprit changes.
- Arbitrary final revelations.
- Contradictions introduced only in the solution.
- Unsupported forensic claims.
- Clues that are impossible to interpret.
- A culprit's confession as the only evidence.
- Stereotypes about appearance, gender, nationality, religion, or social background.
- Hidden information that has no logical connection to the incident.

---

# 9. AI PROVIDER ORCHESTRATION

## 9.1 Provider Abstraction

Create common interfaces for text generation, structured output, image generation, and video generation.

Suggested interface:

```ts
interface TextGenerationProvider {
  readonly name: string;

  generateStructured<T>(
    request: StructuredGenerationRequest<T>
  ): Promise<StructuredGenerationResult<T>>;

  generateText(
    request: TextGenerationRequest
  ): Promise<TextGenerationResult>;
}
```

Define additional interfaces for media generation and optional vision analysis.

Provider adapters must normalize provider-specific responses into application-level result types.

Do not allow Gemini-specific or Claude-specific response objects to leak throughout the business logic.

## 9.2 Provider Configuration

Use environment variables such as:

```dotenv
AI_MODE=mock
DEFAULT_TEXT_PROVIDER=gemini
GEMINI_API_KEY=
GEMINI_MODEL=
ANTHROPIC_API_KEY=
CLAUDE_MODEL=
IMAGE_PROVIDER=mock
IMAGE_PROVIDER_API_KEY=
VIDEO_PROVIDER=mock
VIDEO_PROVIDER_API_KEY=
```

These names are examples of the required configuration contract. The exact provider model identifiers must be configured from currently supported models and must not be invented or hardcoded as permanently available.

Provide `.env.example` with empty secrets and explanatory comments.

## 9.3 Model Selection Strategy

Support three modes.

**Mode 1: Gemini primary**

Gemini creates the mystery and evidence. Claude optionally reviews the case.

**Mode 2: Claude primary**

Claude creates the mystery and evidence. Gemini optionally reviews the case.

**Mode 3: Hybrid**

Gemini creates the case blueprint. Claude reviews the logic. The configured primary provider generates or refines the evidence. A final validator checks the case.

The backend must allow per-task configuration.

## 9.4 Cost and Reliability Controls

- Set maximum output token budgets.
- Limit input length.
- Limit concurrent generation jobs.
- Track provider usage when usage data is available.
- Avoid redundant AI calls.
- Cache reusable, non-sensitive generation results where appropriate.
- Retry transient failures with exponential backoff and jitter.
- Respect provider rate limits.
- Apply request timeouts.
- Do not retry invalid requests indefinitely.
- Use mock mode in automated tests.
- Do not automatically call both paid providers for every request unless configured.
- Expose user-friendly errors without exposing provider internals.

## 9.5 Structured AI Output

Prefer structured JSON outputs that conform to application schemas.

Validate every output using Zod or an equivalent runtime validator.

When parsing fails:

1. Record a safe diagnostic.
2. Attempt a bounded repair.
3. Revalidate the repaired output.
4. Reject the output if it still fails.

Never blindly trust valid-looking JSON to be logically correct.

## 9.6 Prompt Organization

Store versioned prompts in dedicated files.

Suggested structure:

```text
ai/prompts/
  scenario-normalization.ts
  case-blueprint.ts
  culprit-and-solution.ts
  suspect-generation.ts
  timeline-generation.ts
  evidence-planning.ts
  chat-evidence.ts
  scene-image-prompts.ts
  camera-reconstruction.ts
  case-validation.ts
  case-repair.ts
  hint-generation.ts
  solution-explanation.ts
```

Every prompt must have:

- A version identifier.
- A clear task.
- Expected schema.
- Content boundaries.
- Required invariants.
- Output constraints.
- A validation strategy.

Do not place all application prompts inside one enormous string.

---

# 10. SECRET SOLUTION AND DATA LEAK PREVENTION

This is a critical security and gameplay requirement.

## 10.1 Private Solution Record

Store the intended solution in a private database record or a clearly separated private subdocument that is never serialized into ordinary case responses.

Suggested fields:

```ts
interface CaseSolution {
  caseId: string;
  version: number;
  culpritSuspectId: string;
  motive: string;
  opportunityExplanation: string;
  actionSequence: string[];
  criticalEvidenceIds: string[];
  deductionSteps: string[];
  alternativeSuspectExplanations: Array<{
    suspectId: string;
    explanation: string;
  }>;
  finalExplanation: string;
}
```

This type is backend-only.

## 10.2 Public and Private Case DTOs

Create separate types:

- `PublicCaseDTO`
- `PrivateCaseSolution`
- `CaseResultDTO`

The frontend must never receive `PrivateCaseSolution` before the case has legitimately ended.

## 10.3 Serialization Rules

- Never serialize complete database documents directly to the frontend.
- Never send the secret solution inside an HTML page.
- Never put the culprit ID in hidden DOM elements.
- Never include the solution in public logs.
- Never include the solution in client-side state.
- Never include the solution in ordinary API errors.
- Never include the solution in generation progress responses.
- Never expose private generation prompts through public APIs.
- Never include secret case data in analytics events.

## 10.4 Solution Access

The solution may be returned only after:

- A valid final accusation is submitted; or
- An explicitly supported reveal action is requested and authorized.

The backend must verify the case state and user permissions before revealing it.

A request parameter such as `?reveal=true` must never bypass server-side game-state checks.

---

# 11. EVIDENCE GENERATION SYSTEM

## 11.1 Evidence Categories

Implement the following evidence types.

1. `CHAT_TRANSCRIPT`
2. `IMAGE`
3. `CAMERA_RECONSTRUCTION`
4. `WITNESS_STATEMENT`
5. `INTERVIEW_TRANSCRIPT`
6. `DOCUMENT`
7. `TIMELINE_RECORD`
8. `FORENSIC_REPORT`
9. `PHYSICAL_CLUE`
10. `AUDIO_TRANSCRIPT`
11. `LOCATION_RECORD`
12. `SYSTEM_LOG`
13. `OTHER`

Each type must have a dedicated rendering strategy.

## 11.2 Shared Evidence Schema

```ts
interface EvidenceItem {
  id: string;
  caseId: string;
  type: EvidenceType;
  title: string;
  summary: string;
  description: string;
  fictionalSource: string;
  createdAt: string;
  fictionalTimestamp?: string;
  relatedSuspectIds: string[];
  relatedEventIds: string[];
  supportsFactIds: string[];
  contradictsFactIds: string[];
  reliability: "LOW" | "MEDIUM" | "HIGH";
  authenticityLabel: "AI_GENERATED_FICTION";
  mediaAssetIds: string[];
  playerVisible: boolean;
  revealCondition?: string;
}
```

The schema may be extended with type-specific fields.

Never allow an AI model to choose arbitrary database ownership, permissions, or secret visibility flags without backend validation.

## 11.3 Evidence Quality

Every evidence item must contribute at least one of the following:

- Establish a fact.
- Challenge a statement.
- Establish a timeline.
- Reveal a relationship.
- Rule out an alternative explanation.
- Establish a plausible red herring.
- Provide contextual information.
- Connect two previously separate clues.

Avoid generating large amounts of meaningless evidence solely to increase item count.

## 11.4 Evidence Reliability

Reliability describes how dependable a source is within the fictional case.

Examples:

- A direct record with a verified timestamp may be highly reliable for a narrow fact.
- A witness statement may be medium reliability.
- An unverified rumor may be low reliability.

Reliability must not automatically determine whether an item supports guilt.

A reliable record can be misinterpreted. An unreliable statement may still contain a true detail.

## 11.5 Reveal Conditions

The engine may define evidence that becomes available after a specific investigation action.

Examples:

- Reading an initial statement reveals a follow-up question.
- Comparing two timelines unlocks an additional record.
- Inspecting a scene image reveals a detail.
- Interviewing a suspect unlocks a new transcript.

Reveal conditions must be explicit, testable, and stored in structured form.

Do not require a paid media provider to unlock core evidence.

---

# 12. WHATSAPP-STYLE FICTIONAL CHAT EVIDENCE

## 12.1 Purpose

Generate fictional messaging conversations that help players investigate relationships, alibis, plans, and contradictions.

The interface may resemble a familiar messaging layout, but it must use original UI styling and avoid falsely presenting the content as an authentic WhatsApp export.

## 12.2 Chat Data Model

```ts
interface ChatEvidence {
  evidenceId: string;
  conversationTitle: string;
  participants: Array<{
    suspectId?: string;
    displayName: string;
    fictionalAvatarAssetId?: string;
  }>;
  messages: Array<{
    id: string;
    senderId: string;
    fictionalTimestamp: string;
    text: string;
    status?: "SENT" | "DELIVERED" | "READ";
    attachmentAssetIds: string[];
    relatedFactIds: string[];
  }>;
}
```

Message delivery states are fictional interface details, not proof that an actual message was sent or read.

## 12.3 Requirements

- Render messages in chronological order.
- Display fictional timestamps.
- Support text and attachment previews.
- Display participants consistently.
- Support long conversations with scrolling.
- Allow searching within a conversation.
- Allow bookmarking a message.
- Allow opening the related evidence item.
- Allow viewing relevant suspect profiles.
- Preserve exact generated text after a case becomes playable.
- Prevent AI-generated messages from changing after the case is locked.

## 12.4 Narrative Rules

Conversations must have a reason to exist.

They should establish relationships, reveal plans, contain inconsistencies, or provide context.

Do not generate random messages that merely look realistic.

Avoid using real phone numbers, actual private information, real account identifiers, or actual private chat data.

Display a clear notice:

**FICTIONAL AI-GENERATED CHAT — NOT AN AUTHENTIC MESSAGE EXPORT**

---

# 13. AI-GENERATED IMAGES

## 13.1 Image Types

Support:

- Suspect portraits.
- Fictional locations.
- Incident scene images.
- Object photographs.
- Evidence close-ups.
- Fictional documents.
- Reconstructed event frames.
- Location overview images.

## 13.2 Image Generation Workflow

1. Read the locked case blueprint.
2. Create a structured image brief.
3. Verify the image brief against the case facts.
4. Send the request to the configured image provider.
5. Receive the image.
6. Validate the returned file.
7. Store the file in object storage.
8. Store its metadata in MongoDB.
9. Associate the asset with the correct evidence item.
10. Make the image available through an authorized asset endpoint.

## 13.3 Image Metadata

Store:

- Asset ID.
- Case ID.
- Evidence ID.
- Asset type.
- Storage key.
- MIME type.
- File size.
- Width and height.
- Provider.
- Model identifier, where available.
- Generation status.
- Creation timestamp.
- Fictional-content label.
- Content validation status.

## 13.4 Visual Consistency

Maintain a case-level style guide containing:

- Character appearance descriptions.
- Clothing.
- Relevant objects.
- Scene locations.
- Time-of-day conditions.
- Lighting.
- Image style.
- Visual continuity rules.

Use stable character descriptions across images.

Where the provider supports reference images or character consistency, use them when appropriate.

Do not claim perfect visual consistency if the configured model cannot guarantee it.

## 13.5 Fallbacks

If image generation fails:

- Display an original placeholder illustration or scene diagram.
- Mark the asset as unavailable or represented by a fallback.
- Preserve the evidence text.
- Allow the case to remain playable.
- Offer retry where safe.

Never display a broken image icon as the only representation of critical evidence.

---

# 14. CAMERA FOOTAGE AND RECONSTRUCTED SCENES

## 14.1 Product Definition

The application creates fictional camera evidence, not actual surveillance recordings.

The player should be able to inspect a camera-style evidence item with a scene, timestamp, camera label, and relevant visual details.

## 14.2 Supported Implementation Levels

**Level 1 — Required fallback**

Build a camera reconstruction viewer using:

- Generated scene images.
- Multiple reconstructed frames.
- A timeline scrubber.
- Play and pause controls.
- Fictional camera metadata.
- On-screen timestamps.
- Evidence annotations.

The viewer may animate between available frames or use a simple pan-and-zoom effect.

It must not pretend that a still image is a genuine video.

**Level 2 — Optional video generation**

When a configured provider supports video generation, create short clips from the locked case blueprint.

Use generated footage only if its visual details are consistent with the written evidence.

## 14.3 Camera Evidence Data Model

```ts
interface CameraReconstruction {
  evidenceId: string;
  cameraLabel: string;
  locationDescription: string;
  fictionalCaptureStart: string;
  fictionalCaptureEnd: string;
  durationSeconds: number;
  frames: Array<{
    assetId: string;
    offsetSeconds: number;
    caption: string;
    relatedEventIds: string[];
  }>;
  videoAssetId?: string;
  playbackMode: "FRAMES" | "VIDEO";
  reconstructionNotice: string;
}
```

## 14.4 Viewer Features

- Play and pause.
- Scrub through the available timeline.
- Step between frames.
- Show fictional timestamps.
- Display captions.
- Bookmark a frame.
- Link frames to evidence.
- Show reconstruction limitations.

If a video clip is used, validate its duration, file type, and association with the case.

## 14.5 Fictional Authenticity Notice

Always display:

**AI-GENERATED SCENE RECONSTRUCTION — FICTIONAL INVESTIGATION**

Never present synthetic imagery as real CCTV footage.

---

# 15. INTERACTIVE INVESTIGATION SYSTEM

## 15.1 Investigation State

Each case has an investigation state.

Possible states:

- `NOT_STARTED`
- `IN_PROGRESS`
- `READY_TO_ACCUSE`
- `COMPLETED`
- `ABANDONED`

Use the ASCII-safe identifier `READY_TO_ACCUSE` in actual code.

Transitions must be controlled by the backend.

## 15.2 Investigation Actions

Players may:

- Open evidence.
- Mark evidence as reviewed.
- Bookmark evidence.
- Add notes.
- Compare evidence.
- Pin evidence to the case board.
- Connect clues.
- View suspect profiles.
- Record a theory.
- Request hints.
- Submit an accusation.
- Resume an investigation.

## 15.3 Investigation Persistence

Save:

- Current investigation status.
- Reviewed evidence IDs.
- Bookmarked evidence IDs.
- Notes.
- Case-board nodes.
- Case-board connections.
- Hint usage.
- Time spent, if tracked.
- Accusation attempts.
- Completion result.

Persist important actions through backend APIs.

Client-side state alone is insufficient for durable progress.

## 15.4 Evidence Comparison

Implement a comparison feature allowing players to select two or more evidence items.

Display:

- Shared suspects.
- Shared timeline events.
- Facts supported by both items.
- Contradictions.
- Different timestamps.
- Related case-board connections.

This feature must use the evidence metadata and relationships created during generation.

It must not require a new AI call merely to compare two existing evidence records.

An optional AI explanation may be provided later, but it must not disclose the secret solution.

---

# 16. CASE BOARD

## 16.1 Purpose

The case board is a player-controlled reasoning space.

It is not an automatic answer generator.

## 16.2 Board Elements

Support:

- Suspect cards.
- Evidence cards.
- Timeline cards.
- Note cards.
- Hypothesis cards.
- Connection lines.
- Connection labels.

## 16.3 Board Operations

- Add a node.
- Remove a node.
- Move a node.
- Create a connection.
- Delete a connection.
- Edit a note.
- Zoom in and out.
- Pan across the board.
- Reset the viewport.
- Save the board.
- Restore saved layout.

## 16.4 Connection Types

- Supports.
- Contradicts.
- Corroborates.
- Depends on.
- Rules out.
- Uncertain.

The player must be free to create incorrect theories.

The system should not silently correct the player's board based on the hidden solution.

## 16.5 Board Persistence Model

```ts
interface CaseBoard {
  caseId: string;
  userId?: string;
  nodes: Array<{
    id: string;
    type: "SUSPECT" | "EVIDENCE" | "NOTE" | "HYPOTHESIS";
    referencedEntityId?: string;
    title: string;
    content?: string;
    position: { x: number; y: number };
  }>;
  connections: Array<{
    id: string;
    sourceNodeId: string;
    targetNodeId: string;
    relation: string;
    label?: string;
  }>;
  viewport: {
    x: number;
    y: number;
    zoom: number;
  };
  updatedAt: string;
}
```

Validate all references and position values on the backend.

---

# 17. HINT SYSTEM

## 17.1 Purpose

Hints help players who become stuck without immediately revealing the culprit.

## 17.2 Hint Levels

**Hint 1 — Direction**

Points toward a relevant evidence category or timeline area.

**Hint 2 — Connection**

Suggests which pieces of evidence are worth comparing.

**Hint 3 — Deduction**

Explains a meaningful inference without directly naming the culprit.

A final solution reveal is a separate action.

## 17.3 Hint Generation

Generate hints from the case blueprint, public evidence, and the intended deduction path.

Never let a new AI response alter the intended solution.

Each hint must be checked for accidental disclosure.

## 17.4 Hint Persistence

Store:

- Hint level.
- Hint text.
- Request timestamp.
- Associated deduction.
- Usage count.

Do not charge an additional hint cost merely because the client retries an identical request after a network interruption. Use idempotency where appropriate.

---

# 18. ACCUSATION AND SCORING

## 18.1 Accusation Workflow

1. Player opens the accusation screen.
2. Player selects a suspect.
3. Player optionally selects supporting evidence.
4. Player enters an explanation, if desired.
5. Player reviews the accusation.
6. Player confirms submission.
7. Backend verifies case ownership or access.
8. Backend verifies case status.
9. Backend compares the selected suspect ID with the canonical culprit ID.
10. Backend records the result.
11. Backend marks the investigation completed.
12. Backend returns the authorized result DTO.

## 18.2 Deterministic Evaluation

The primary correctness decision must be deterministic.

Do not ask Gemini or Claude to decide whether the selected suspect is the culprit when the stored solution already determines the answer.

AI may help produce the explanation, but the final result must derive from the canonical solution.

## 18.3 Scoring Model

Use a transparent scoring system.

Default score:

- Correct culprit: 60 points.
- Relevant supporting evidence: up to 25 points.
- Explanation quality: up to 15 points.

Total: 100 points.

For the first release, the backend must calculate the culprit and evidence portions deterministically.

Explanation quality may initially use a deterministic rubric or remain unscored until a reliable evaluator is implemented.

If AI evaluates explanations, keep the evaluator separate from the correctness decision, apply a fixed rubric, and disclose that the score is AI-assisted.

## 18.4 Evidence Selection Scoring

Each case defines the critical evidence items that support the solution.

Award points based on the proportion of relevant evidence selected.

Do not require every critical evidence item to be selected if the case is solvable with a sufficient subset.

Penalize irrelevant selections only if the scoring rules are explicit and consistent.

## 18.5 Incorrect Accusations

For Version 1:

- Allow one final accusation per completed attempt.
- Do not reveal the culprit before the final submission.
- Record incorrect accusations in the result history.
- Allow the player to start a new attempt if replay is supported.
- Preserve the original result record.

Do not silently change the culprit to make an incorrect accusation appear correct.

## 18.6 Result Integrity

The frontend must never determine the final score by itself.

The backend must validate evidence selections and calculate the final score.

---

# 19. DATABASE DESIGN

Use MongoDB with Mongoose.

Define schemas, validation, indexes, and ownership rules for all persistent entities.

## 19.1 User

Fields:

- `_id`
- `displayName`
- `email`, when authentication is enabled
- `avatarUrl`, optional
- `preferences`
- `createdAt`
- `updatedAt`

Use a guest identity or anonymous case ownership mechanism if accounts are not implemented in the initial release.

Guest access must use secure, unguessable credentials or session tokens where required. Do not rely on a public case ID as proof of ownership.

## 19.2 Case

Fields:

- `_id`
- `ownerId`, optional for supported public cases
- `title`
- `scenario`
- `genre`
- `difficulty`
- `caseLength`
- `language`
- `status`
- `generationJobId`
- `blueprintVersion`
- `promptVersion`
- `publicBriefing`
- `suspectIds`
- `evidenceIds`
- `timelineEventIds`
- `createdAt`
- `updatedAt`
- `completedAt`

Possible case statuses:

- `DRAFT`
- `GENERATING`
- `VALIDATING`
- `READY`
- `FAILED`
- `ARCHIVED`

Keep the secret solution out of the public case response.

## 19.3 CaseSolution

Fields:

- `_id`
- `caseId`
- `version`
- `culpritSuspectId`
- `motive`
- `opportunityExplanation`
- `actionSequence`
- `criticalEvidenceIds`
- `deductionSteps`
- `alternativeSuspectExplanations`
- `finalExplanation`
- `createdAt`

Enforce one active solution version per playable case.

## 19.4 Suspect

Fields:

- `_id`
- `caseId`
- `name`
- `role`
- `background`
- `personality`
- `motive`
- `claimedAlibi`
- `publicStatement`
- `timelineEventIds`
- `evidenceIds`
- `portraitAssetId`
- `createdAt`

Store secret guilt information only in the private solution record or another protected internal representation.

Do not expose a public `isCulprit` boolean.

## 19.5 Evidence

Fields:

- `_id`
- `caseId`
- `type`
- `title`
- `summary`
- `description`
- `fictionalSource`
- `fictionalTimestamp`
- `relatedSuspectIds`
- `relatedEventIds`
- `supportsFactIds`
- `contradictsFactIds`
- `reliability`
- `assetIds`
- `revealCondition`
- `visibility`
- `createdAt`

Use discriminated schemas or type-specific subdocuments for chat, image, document, and camera reconstruction evidence.

## 19.6 TimelineEvent

Fields:

- `_id`
- `caseId`
- `timestamp`
- `eventType`
- `description`
- `location`
- `suspectIds`
- `evidenceIds`
- `sourceType`
- `reliability`
- `createdAt`

## 19.7 MediaAsset

Fields:

- `_id`
- `caseId`
- `evidenceId`
- `assetType`
- `storageKey`
- `mimeType`
- `sizeBytes`
- `width`
- `height`
- `durationSeconds`
- `provider`
- `model`
- `status`
- `fictionalContentLabel`
- `createdAt`

Never store large binary files directly in ordinary MongoDB documents.

## 19.8 Investigation

Fields:

- `_id`
- `caseId`
- `ownerId` or supported guest-session reference
- `status`
- `reviewedEvidenceIds`
- `bookmarkedEvidenceIds`
- `notes`
- `caseBoardId`
- `hintsUsed`
- `startedAt`
- `updatedAt`
- `completedAt`

## 19.9 Accusation

Fields:

- `_id`
- `caseId`
- `investigationId`
- `selectedSuspectId`
- `selectedEvidenceIds`
- `explanation`
- `isCorrect`
- `score`
- `submittedAt`

The `isCorrect` field is server-generated and must not be client-writable.

## 19.10 GenerationJob

Fields:

- `_id`
- `caseId`
- `status`
- `currentStage`
- `progressPercent`
- `attemptCount`
- `provider`
- `errorCode`
- `safeErrorMessage`
- `startedAt`
- `updatedAt`
- `completedAt`

## 19.11 Indexes

Create appropriate indexes for:

- Case owner and creation date.
- Case status.
- Evidence by case and type.
- Suspects by case.
- Timeline events by case and timestamp.
- Investigations by owner and status.
- Accusations by investigation.
- Generation jobs by status and creation date.
- Media assets by case and evidence.
- Idempotency keys for supported operations.

Use compound indexes based on actual query patterns.

Add unique constraints where required for case-scoped IDs and version records.

---

# 20. API DESIGN

All backend routes must be versioned under:

`/api/v1`

Use consistent response envelopes.

## 20.1 Standard Success Response

```json
{
  "success": true,
  "data": {},
  "meta": {}
}
```

## 20.2 Standard Error Response

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request could not be validated.",
    "requestId": "request-id"
  }
}
```

Never expose stack traces, API keys, private prompts, database credentials, or secret solutions in production error responses.

## 20.3 Health Routes

`GET /api/v1/health`

Returns application health.

`GET /api/v1/health/ready`

Checks readiness, including required database connectivity.

Do not expose sensitive environment variables or provider credentials.

## 20.4 Case Routes

`POST /api/v1/cases`

Creates a new case-generation request.

Request fields:

- Scenario.
- Genre.
- Difficulty.
- Case length.
- Language.
- Provider preference.
- Optional title.
- Optional media-generation preferences.

Returns a case ID and generation job ID.

`GET /api/v1/cases`

Returns cases accessible to the current user or guest session.

`GET /api/v1/cases/:caseId`

Returns the public case representation.

`DELETE /api/v1/cases/:caseId`

Deletes or archives a case according to documented retention rules.

`POST /api/v1/cases/:caseId/retry-generation`

Retries a failed generation operation if allowed.

## 20.5 Generation Routes

`GET /api/v1/generation-jobs/:jobId`

Returns actual job status.

`POST /api/v1/generation-jobs/:jobId/cancel`

Requests cancellation where supported.

`POST /api/v1/generation-jobs/:jobId/retry`

Retries a recoverable failed stage.

Generation jobs must not expose internal reasoning traces or the secret solution.

## 20.6 Suspect Routes

`GET /api/v1/cases/:caseId/suspects`

Returns public suspect profiles.

`GET /api/v1/cases/:caseId/suspects/:suspectId`

Returns one public suspect profile.

## 20.7 Evidence Routes

`GET /api/v1/cases/:caseId/evidence`

Supports filters:

- Type.
- Suspect.
- Timeline.
- Search term.
- Reviewed status.
- Bookmark status.

`GET /api/v1/cases/:caseId/evidence/:evidenceId`

Returns authorized evidence.

`POST /api/v1/cases/:caseId/evidence/:evidenceId/review`

Marks evidence as reviewed.

`POST /api/v1/cases/:caseId/evidence/:evidenceId/bookmark`

Adds a bookmark.

`DELETE /api/v1/cases/:caseId/evidence/:evidenceId/bookmark`

Removes a bookmark.

## 20.8 Timeline Routes

`GET /api/v1/cases/:caseId/timeline`

Returns the public timeline.

`GET /api/v1/cases/:caseId/timeline/:eventId`

Returns an individual public event.

## 20.9 Investigation Routes

`POST /api/v1/cases/:caseId/investigations`

Creates or resumes an investigation.

`GET /api/v1/investigations/:investigationId`

Returns the player's saved investigation.

`PATCH /api/v1/investigations/:investigationId`

Updates permitted progress fields.

`POST /api/v1/investigations/:investigationId/notes`

Creates or updates a note.

## 20.10 Case Board Routes

`GET /api/v1/investigations/:investigationId/board`

Returns the saved board.

`PUT /api/v1/investigations/:investigationId/board`

Saves a validated board state.

## 20.11 Hint Routes

`POST /api/v1/investigations/:investigationId/hints`

Request body:

- Hint level.
- Optional evidence IDs relevant to the player's question.

The backend must enforce hint limits and avoid solution leakage.

## 20.12 Accusation Routes

`POST /api/v1/investigations/:investigationId/accusations`

Request body:

- `selectedSuspectId`
- `selectedEvidenceIds`
- `explanation`

The server evaluates and persists the accusation.

`GET /api/v1/investigations/:investigationId/results`

Returns results only when the investigation is completed and the caller is authorized.

## 20.13 Media Routes

`GET /api/v1/assets/:assetId`

Returns authorized asset metadata or a controlled media response.

Use signed object-storage URLs or an authorized proxy when necessary.

Do not accept arbitrary storage paths from clients.

## 20.14 API Requirements

- Validate all input.
- Enforce ownership and permissions.
- Use correct HTTP status codes.
- Apply rate limits.
- Use pagination for potentially large collections.
- Avoid returning complete database documents.
- Support request IDs.
- Apply request timeouts.
- Support idempotency for generation creation and final submission.
- Document every endpoint.
- Generate API tests for success and failure cases.

---

# 21. JOB PROCESSING AND LONG-RUNNING TASKS

## 21.1 Why Jobs Are Required

AI mystery generation, image generation, and video generation may take longer than an ordinary API request.

The backend must create a persistent job and return promptly.

## 21.2 Job States

- `QUEUED`
- `RUNNING`
- `RETRYING`
- `SUCCEEDED`
- `FAILED`
- `CANCELLED`

## 21.3 Job Workflow

1. Validate request.
2. Create case draft.
3. Create generation job.
4. Return job ID.
5. Worker picks up the job.
6. Execute the generation pipeline.
7. Save stage progress.
8. Retry transient failures within configured limits.
9. Validate generated content.
10. Publish the case if valid.
11. Mark the job successful.
12. Return a safe failure if all recovery attempts fail.

## 21.4 Queue Implementation

For the initial release, implement a persistent queue using a compatible queue library such as BullMQ and Redis if the deployment environment supports it.

If an external queue is unavailable during local development, provide a development worker implementation with documented limitations.

Do not use untracked, detached in-memory promises as the only production job-processing mechanism.

## 21.5 Progress Reporting

Use polling initially.

The frontend polls the job-status endpoint at a reasonable interval with backoff.

Server-Sent Events may be added later if useful.

Progress must represent completed pipeline stages, not pretend to measure the exact amount of AI work remaining.

---

# 22. AUTHENTICATION AND ACCESS CONTROL

## 22.1 Initial Release

The application may support guest investigations without mandatory registration.

However, guest cases must have a secure ownership mechanism.

The application must not use guessable case IDs as access credentials.

## 22.2 Future Account Support

When authentication is implemented, support:

- Registration.
- Login.
- Logout.
- Password reset, if password authentication is used.
- Email verification where appropriate.
- OAuth as an optional provider.
- Session revocation.
- Account deletion.

Use established libraries and secure session handling.

## 22.3 Authorization

Every protected operation must verify that the caller has permission to access the requested resource.

Apply authorization to:

- Cases.
- Investigations.
- Case boards.
- Evidence.
- Media.
- Accusations.
- Results.
- User settings.

Never trust a client-supplied owner ID.

---

# 23. SECURITY REQUIREMENTS

## 23.1 Secret Management

- Store API keys in environment variables or a managed secret store.
- Never commit `.env`.
- Include `.env.example` only.
- Rotate exposed keys immediately.
- Do not expose keys in logs.
- Do not embed secrets in Vite variables.
- Do not return raw provider configuration to clients.

## 23.2 Input Security

- Validate request schemas.
- Limit scenario length.
- Normalize text.
- Escape user-provided content when rendered.
- Prevent stored cross-site scripting.
- Reject unsupported file types.
- Enforce upload size limits.
- Protect against MongoDB operator injection.
- Use safe database query construction.

## 23.3 API Security

- Apply rate limits.
- Configure CORS for approved origins.
- Use Helmet.
- Enforce authentication and authorization.
- Protect cookie-based sessions against CSRF where applicable.
- Use secure cookies in production.
- Apply request size limits.
- Validate resource ownership.
- Prevent unauthorized solution access.
- Use secure random tokens for guest access where needed.

## 23.4 AI Security

Treat user scenarios and generated content as untrusted input.

- Do not allow user text to override system-level application rules.
- Do not execute generated code.
- Do not execute arbitrary commands returned by AI.
- Validate every generated identifier.
- Do not allow generated output to determine database permissions.
- Do not allow the AI to choose arbitrary storage paths.
- Sanitize HTML and rich-text output.
- Apply content moderation.
- Prevent prompt injection from changing the canonical solution or exposing secret data.
- Never expose private chain-of-thought or internal reasoning traces.

## 23.5 File Security

- Validate MIME type and actual file signatures where applicable.
- Generate storage keys on the backend.
- Keep private media private.
- Use signed URLs with short expirations when appropriate.
- Set file-size limits.
- Apply retention policies.
- Delete associated media when cases are permanently deleted.

## 23.6 Logging

Use structured logs.

Log:

- Request ID.
- Job ID.
- Case ID.
- Provider name.
- Stage name.
- Duration.
- Error category.
- Retry count.

Do not log API keys, session tokens, private user information, or the secret culprit solution in ordinary application logs.

---

# 24. CONTENT MODERATION AND FICTIONAL SAFETY

## 24.1 Scenario Moderation

Users may enter arbitrary story scenarios.

Before expensive generation, check whether the request can be safely supported.

Support fictional mysteries involving theft, deception, fictional crimes, missing objects, puzzles, and other appropriate detective themes.

For cases involving serious violence, keep the presentation non-graphic.

## 24.2 Privacy

Do not encourage users to submit real private chat logs, actual surveillance recordings, or personal information about uninvolved individuals.

Warn users not to include sensitive personal information in scenarios.

## 24.3 Fictional Labels

Apply visible fictional-content labels to:

- Chat transcripts.
- Generated photographs.
- Documents.
- Camera reconstructions.
- Audio transcripts.
- Generated reports.

The label must remain visible when evidence is opened or shared.

## 24.4 Sharing

If sharing is implemented, shared cases must not contain:

- API credentials.
- Private user notes.
- Secret solutions before authorized reveal.
- Private guest-session credentials.
- Unintended personal information.

Public sharing must be opt-in.

---

# 25. FRONTEND STATE MANAGEMENT

## 25.1 State Categories

Separate:

**Server state**

- Cases.
- Suspects.
- Evidence.
- Timeline.
- Investigation progress.
- Generation jobs.
- Results.

Use TanStack Query.

**Client state**

- Active panel.
- Open modal.
- Selected evidence.
- Case-board viewport.
- Temporary filters.
- Form state.

Use Zustand or local React state.

## 25.2 State Rules

- Do not duplicate all server data into a global store.
- Invalidate relevant queries after mutations.
- Handle stale requests.
- Prevent duplicate form submissions.
- Restore saved investigation progress after refresh.
- Use optimistic updates only where safe.
- Roll back failed optimistic updates.
- Never store secret solutions in browser state before authorized reveal.

## 25.3 Network Handling

Every API-driven screen must support:

- Loading.
- Success.
- Empty state.
- Error.
- Retry.
- Permission denied.
- Not found.
- Expired session, when applicable.

Never leave a permanent spinner after a failed request.

---

# 26. ACCESSIBILITY AND RESPONSIVENESS

## 26.1 Accessibility

Follow WCAG 2.2 AA as the target.

Implement:

- Semantic HTML.
- Keyboard navigation.
- Visible focus states.
- Accessible form labels.
- Proper dialog focus management.
- Screen-reader announcements for important status changes.
- Sufficient text contrast.
- Text alternatives for meaningful images.
- Captions or transcripts for generated video.
- Reduced-motion support.
- Accessible error messages.

Do not communicate critical game information using color alone.

## 26.2 Responsive Design

Support:

- Mobile widths starting around 320 CSS pixels.
- Common smartphone sizes.
- Tablet layouts.
- Desktop layouts.
- Large desktop screens.

Avoid horizontal page overflow.

The investigation room and case board must remain usable on touch devices.

## 26.3 Performance

Targets for a reasonably provisioned deployment:

- Fast initial rendering.
- Lazy-loaded evidence images.
- Paginated or virtualized large evidence collections where appropriate.
- Optimized image sizes.
- Code splitting for large investigation modules.
- No synchronous AI generation during initial page load.
- No unnecessary re-rendering of the full case board.

Set measurable performance targets in the test and deployment documentation.

---

# 27. ERROR HANDLING

## 27.1 Error Categories

Define stable application error codes, including:

- `VALIDATION_ERROR`
- `UNAUTHORIZED`
- `FORBIDDEN`
- `NOT_FOUND`
- `RATE_LIMITED`
- `AI_PROVIDER_UNAVAILABLE`
- `AI_OUTPUT_INVALID`
- `GENERATION_FAILED`
- `GENERATION_CANCELLED`
- `CASE_NOT_READY`
- `CASE_ALREADY_COMPLETED`
- `INVALID_ACCUSATION`
- `MEDIA_GENERATION_FAILED`
- `STORAGE_UNAVAILABLE`
- `DATABASE_UNAVAILABLE`
- `INTERNAL_ERROR`

## 27.2 Recovery Behavior

- Retry transient provider errors within configured limits.
- Never retry invalid user input automatically.
- Preserve already validated case data when safe.
- Use media fallbacks when media generation fails.
- Allow recovery of failed jobs where possible.
- Show a human-readable error message.
- Log internal diagnostic information securely.
- Do not lose saved investigation progress because an optional image failed.

## 27.3 Partial Generation

A case may be playable when optional media is unavailable, provided all mandatory narrative and evidence requirements are met.

A case must not be playable if the culprit solution is invalid, critical evidence is missing, or the case fails solvability validation.

---

# 28. TESTING STRATEGY

Testing is mandatory, not optional.

## 28.1 Unit Tests

Test:

- Scenario normalization.
- Schema validation.
- Culprit solution integrity.
- Timeline consistency.
- Evidence relationships.
- Suspect references.
- Scoring.
- Hint rules.
- Case-state transitions.
- Authorization helpers.
- Serialization filtering.
- Provider response normalization.

## 28.2 Integration Tests

Test:

- MongoDB persistence.
- Case creation.
- Generation job progression.
- Evidence retrieval.
- Investigation updates.
- Case-board persistence.
- Accusation submission.
- Result reveal.
- Media metadata persistence.
- Failed-generation recovery.
- Authorization boundaries.

Use a test database or isolated test database environment.

## 28.3 Frontend Tests

Test:

- Scenario form validation.
- Generation progress display.
- Suspect navigation.
- Evidence viewer behavior.
- Chat transcript rendering.
- Camera reconstruction controls.
- Case-board operations.
- Accusation validation.
- Results display.
- Error and empty states.

## 28.4 End-to-End Tests

Use Playwright to verify the complete user journey.

### E2E Test A: Create and solve a case

1. Open the website.
2. Enter a scenario.
3. Select difficulty and genre.
4. Generate a mystery using the mock provider.
5. Wait for successful completion.
6. Open the briefing.
7. Inspect a suspect.
8. Open several evidence items.
9. Review the timeline.
10. Add evidence to the case board.
11. Submit an accusation.
12. Verify the result.
13. Verify the secret solution is revealed only after completion.

### E2E Test B: Incorrect accusation

1. Create a known test case.
2. Select an incorrect suspect.
3. Submit the accusation.
4. Verify the result is incorrect.
5. Verify the canonical culprit has not changed.
6. Verify result access follows the configured game rules.

### E2E Test C: Provider failure

1. Configure the mock provider to fail.
2. Request a mystery.
3. Verify the job enters an appropriate state.
4. Verify retry behavior.
5. Verify a useful error message.
6. Verify no invalid case becomes playable.

### E2E Test D: Secret leakage

1. Generate a test case with a known culprit.
2. Inspect all public API responses before accusation.
3. Search responses for private solution fields.
4. Verify the culprit identity is not exposed through public case DTOs.
5. Verify the secret is revealed only after authorized completion.

### E2E Test E: Persistence

1. Start a case.
2. Bookmark evidence.
3. Add notes.
4. Add case-board connections.
5. Refresh the browser.
6. Verify all persisted progress is restored.

## 28.5 AI Evaluation Tests

Use a fixed set of synthetic test scenarios.

Evaluate:

- Schema validity.
- Case coherence.
- Unique intended solution.
- Timeline consistency.
- Evidence coverage.
- Suspect consistency.
- Absence of accidental solution leakage.
- Appropriate content.
- Valid media references.

Do not rely on one model-generated score as the only test of correctness.

## 28.6 Test Coverage

Set an initial target of at least 80% statement coverage for core domain logic, with additional coverage for security-sensitive and game-state logic.

Coverage percentage alone does not establish correctness. All critical acceptance criteria must have explicit tests.

---

# 29. ENVIRONMENT CONFIGURATION

Create a comprehensive `.env.example`.

```dotenv
# Application
NODE_ENV=development
PORT=4000
WEB_ORIGIN=http://localhost:5173
API_BASE_URL=http://localhost:4000/api/v1

# Database
MONGODB_URI=mongodb://127.0.0.1:27017/ai_mystery_room

# AI providers
AI_MODE=mock
DEFAULT_TEXT_PROVIDER=gemini

GEMINI_API_KEY=
GEMINI_MODEL=

ANTHROPIC_API_KEY=
CLAUDE_MODEL=

# Media providers
IMAGE_PROVIDER=mock
IMAGE_PROVIDER_API_KEY=

VIDEO_PROVIDER=mock
VIDEO_PROVIDER_API_KEY=

# Job processing
REDIS_URL=redis://127.0.0.1:6379

# Storage
STORAGE_PROVIDER=local
STORAGE_BUCKET=
STORAGE_REGION=
STORAGE_ACCESS_KEY=
STORAGE_SECRET_KEY=

# Authentication
AUTH_MODE=guest
SESSION_SECRET=

# Limits
MAX_SCENARIO_LENGTH=5000
MAX_SUSPECTS=8
MAX_EVIDENCE_ITEMS=30
MAX_GENERATION_RETRIES=3
```

These are example development values. Validate the exact configuration against the selected deployment environment.

Rules:

- Production must reject insecure default secrets.
- `SESSION_SECRET` must be generated securely if sessions are enabled.
- Model names must be configured explicitly.
- Optional services may remain unconfigured if their fallback works.
- Local storage must not be treated as durable production storage on ephemeral hosting.
- Validate required variables during application startup.
- Report missing variables without printing their secret values.

---

# 30. LOCAL DEVELOPMENT SETUP

The README must explain how to run the application from a clean checkout.

## Required steps

1. Install a supported Node.js LTS release.
2. Install dependencies.
3. Start MongoDB.
4. Start Redis if the selected queue implementation requires it.
5. Copy `.env.example` to `.env`.
6. Set `AI_MODE=mock`.
7. Run database initialization if required.
8. Start the backend.
9. Start the frontend.
10. Open the local development URL.
11. Create a test mystery.
12. Complete an investigation.
13. Run tests.
14. Configure real AI providers when ready.

Provide root-level scripts such as:

```json
{
  "scripts": {
    "dev": "run-frontend-and-backend",
    "dev:web": "run-frontend",
    "dev:api": "run-backend",
    "build": "build-all-workspaces",
    "typecheck": "typecheck-all-workspaces",
    "lint": "lint-all-workspaces",
    "test": "run-all-tests",
    "test:e2e": "run-playwright-tests"
  }
}
```

The names above illustrate the desired script interface. Codex must implement valid scripts using the actual workspace tooling and installed packages. Do not leave placeholder commands in `package.json`.

---

# 31. DEPLOYMENT REQUIREMENTS

## 31.1 Frontend

Deploy the React production build to a supported static or frontend hosting platform.

Configure:

- Production API base URL.
- HTTPS.
- Correct route fallback behavior.
- Environment-specific settings.
- Asset caching.
- Error reporting.

## 31.2 Backend

Deploy the Express API and background worker.

Configure:

- Production environment variables.
- MongoDB connection.
- AI provider credentials.
- Queue infrastructure.
- Object storage.
- Request limits.
- CORS.
- Logging.
- Health checks.

## 31.3 Database

Use a supported MongoDB deployment.

Configure:

- Credentials.
- Network restrictions.
- Backups.
- Indexes.
- Appropriate retention.
- Access permissions.

## 31.4 Media Storage

Use durable object storage for production-generated assets.

Do not depend on an ephemeral local filesystem for persistent images or videos.

## 31.5 Production Readiness

Before release, verify:

- Production build succeeds.
- Database connectivity works.
- Required AI providers work.
- Mock mode is disabled or explicitly restricted as intended.
- Secrets are configured securely.
- API limits are enforced.
- Job workers process generation tasks.
- Media URLs work.
- HTTPS is enabled.
- Logging does not expose sensitive information.
- Error pages are user-friendly.
- Backups and retention rules are documented.

---

# 32. NON-FUNCTIONAL REQUIREMENTS

## 32.1 Reliability

- Failed optional media generation must not destroy a playable case.
- Invalid case generation must fail safely.
- Persisted investigations must survive page refreshes.
- Provider timeouts must not hang requests indefinitely.
- Job failures must be visible and recoverable where possible.

## 32.2 Maintainability

- Use strict TypeScript.
- Prefer small, cohesive modules.
- Avoid monolithic route files.
- Avoid duplicated business logic.
- Keep schemas and contracts centralized.
- Document important architecture decisions.
- Use dependency injection for AI providers.
- Make critical services independently testable.

## 32.3 Extensibility

The system must support adding:

- A new text AI provider.
- A new image-generation provider.
- A new video-generation provider.
- A new evidence category.
- A new mystery genre.
- A new difficulty level.
- A new language.
- A new scoring rubric.

These changes should not require rewriting the entire application.

## 32.4 Observability

Provide:

- Structured logs.
- Request IDs.
- Generation job IDs.
- Provider error categories.
- Job duration metrics.
- Failure counts.
- Safe usage metrics.

Do not log hidden solutions or private reasoning traces.

## 32.5 Data Retention

Document how users can delete cases and associated assets.

Use deletion policies that avoid orphaned files.

Where backups retain deleted records for a defined period, disclose the applicable retention behavior.

---

# 33. IMPLEMENTATION PHASES

Codex must implement the project in controlled phases. Each phase must finish with a working, testable application state.

## Phase 0 — Specification and Planning

Deliverables:

- Read and follow `spec.md`.
- Create an implementation checklist.
- Map requirements to modules.
- Record architectural decisions.
- Define public and private DTOs.
- Define domain schemas.
- Identify external service requirements.
- Establish the test strategy.

Exit criteria:

- The core architecture is documented.
- The major risks are identified.
- The implementation plan covers all mandatory requirements.

## Phase 1 — Repository and Infrastructure

Build:

- Monorepo.
- React application.
- Express application.
- Shared TypeScript package.
- TypeScript configurations.
- Linting and formatting.
- Environment validation.
- MongoDB connection.
- Health endpoints.
- Basic automated tests.

Exit criteria:

- Frontend and backend start successfully.
- Type checking succeeds.
- Health checks work.
- Tests run from the root.

## Phase 2 — Domain and Database

Build:

- Case model.
- Private solution model.
- Suspect model.
- Evidence model.
- Timeline model.
- Investigation model.
- Media asset model.
- Generation job model.
- Repository layer.
- Public DTO serialization.

Exit criteria:

- Database records persist.
- Schema validation works.
- Secret solution fields are excluded from public responses.
- Ownership rules are testable.

## Phase 3 — Mock AI and Mystery Engine

Build:

- Provider interfaces.
- Mock text provider.
- Scenario normalization.
- Case blueprint generation.
- Culprit locking.
- Suspect generation.
- Timeline generation.
- Evidence planning.
- Evidence generation.
- Solvability validation.
- Bounded repair and retry.

Exit criteria:

- A complete mystery can be generated without paid APIs.
- The case contains a canonical solution.
- Generated content passes schema validation.
- Invalid cases cannot become playable.

## Phase 4 — Real AI Providers

Build:

- Gemini adapter.
- Claude adapter.
- Configuration-based routing.
- Structured output handling.
- Provider timeouts.
- Retry policy.
- Usage tracking.
- Error normalization.
- Optional independent validation.

Exit criteria:

- Both providers can be selected through configuration.
- Provider failures are handled safely.
- Tests do not require real API credentials.
- The mock provider remains available.

## Phase 5 — Core Frontend

Build:

- Landing page.
- Creation form.
- Generation progress page.
- Case briefing.
- Suspect list.
- Suspect profile.
- Evidence navigation.
- Timeline.
- Results layout.

Exit criteria:

- Users can create and enter a mystery.
- All pages use actual backend data.
- Loading and error states work.
- No core page relies on hardcoded sample content.

## Phase 6 — Evidence Experience

Build:

- Chat transcript viewer.
- Image viewer.
- Document viewer.
- Camera reconstruction viewer.
- Witness statements.
- Evidence search.
- Evidence filtering.
- Evidence bookmarks.
- Evidence comparison.

Exit criteria:

- Each supported evidence type renders correctly.
- Evidence relationships are navigable.
- Fictional labels remain visible.
- Media failures have functional fallbacks.

## Phase 7 — Investigation and Case Board

Build:

- Investigation creation and resumption.
- Progress persistence.
- Notes.
- Case-board nodes.
- Case-board connections.
- Board save and restore.
- Hint system.
- Investigation state transitions.

Exit criteria:

- Progress survives refreshes.
- Notes and board changes persist.
- Hints follow the configured reveal rules.
- The player can complete the investigation without the hidden solution being exposed.

## Phase 8 — Accusation and Results

Build:

- Accusation form.
- Suspect selection.
- Supporting evidence selection.
- Server-side evaluation.
- Scoring.
- Result persistence.
- Solution explanation.
- Replay flow.

Exit criteria:

- Correct and incorrect accusations are evaluated deterministically.
- The canonical culprit never changes.
- Results are returned only to authorized callers.
- The secret solution is revealed at the correct point.

## Phase 9 — Media Generation

Build:

- Image-provider adapter.
- Image brief generation.
- Asset validation.
- Object storage integration.
- Media metadata.
- Image generation jobs.
- Optional video-provider adapter.
- Scene reconstruction fallback.

Exit criteria:

- Generated images are linked to the right evidence.
- Failed media tasks do not invalidate otherwise playable cases.
- Camera reconstruction works even without a video provider.
- Generated content is correctly labeled.

## Phase 10 — Security and Testing

Build and verify:

- Authorization.
- Rate limiting.
- Input validation.
- Prompt-injection defenses.
- Secret-leak tests.
- Job retry tests.
- End-to-end workflows.
- Responsive layout checks.
- Accessibility checks.
- Error recovery.

Exit criteria:

- All critical acceptance tests pass.
- No known critical security issue remains.
- Production build and type checking succeed.

## Phase 11 — Deployment and Documentation

Deliver:

- Production configuration.
- Deployment guide.
- Environment variable documentation.
- Database setup guide.
- AI provider setup guide.
- Troubleshooting guide.
- Architecture diagrams.
- Test instructions.
- Final implementation checklist.

Exit criteria:

- The application can be deployed using documented steps.
- The production environment has no hardcoded secrets.
- The live application supports the complete core investigation workflow.

---

# 34. REQUIREMENTS TRACEABILITY

Create `docs/requirements-traceability.md`.

Map every major requirement in this document to:

- Requirement ID.
- Requirement description.
- Implementing module.
- Relevant source files.
- Automated tests.
- Status.
- Notes.

Use IDs such as:

- `CORE-001` — Scenario submission.
- `AI-001` — Provider abstraction.
- `CASE-001` — Canonical culprit solution.
- `EVID-001` — Evidence generation.
- `SEC-001` — Secret solution isolation.
- `GAME-001` — Accusation workflow.
- `MEDIA-001` — Fictional image generation.
- `MEDIA-002` — Camera reconstruction.
- `PERSIST-001` — Investigation persistence.
- `TEST-001` — End-to-end investigation.
- `DEPLOY-001` — Production deployment.

Every mandatory requirement must map to implementation and verification evidence.

Do not mark a requirement complete merely because its component or file exists.

---

# 35. ACCEPTANCE CRITERIA

The project is not complete until the following criteria pass.

## A. Case Creation

- A user can enter a custom scenario.
- Required form fields are validated.
- Invalid requests return useful errors.
- The backend creates a generation job.
- Progress reflects actual job state.
- The user can access the completed case.
- Failed generation is recoverable where possible.

## B. Mystery Logic

- Each playable case has one intended culprit.
- The culprit is selected before detailed evidence generation.
- The solution is stored securely.
- Suspect identities remain consistent.
- Timeline events remain consistent.
- Every critical deduction has supporting evidence.
- The case passes validation before publication.
- Invalid cases are not playable.

## C. Evidence

- Each evidence item has a unique identifier.
- Each evidence item belongs to the correct case.
- Evidence references valid suspects and timeline events.
- Chat transcripts display correctly.
- Images display correctly or use valid fallbacks.
- Camera reconstructions are interactive.
- Documents and witness statements are readable.
- Evidence can be searched and bookmarked.
- Evidence relationships are available to the frontend.
- Fictional-content labels are visible.

## D. Investigation

- The player can open and inspect suspects.
- The player can review evidence.
- The player can compare clues.
- The player can create notes.
- The player can build a case board.
- The player can request hints.
- Investigation progress persists after refresh.
- The player can resume an unfinished case.

## E. Accusation

- The player must select a valid suspect.
- The server validates the submission.
- The correct culprit produces a correct result.
- An incorrect suspect produces an incorrect result.
- Evidence selection contributes to scoring according to the defined rules.
- The explanation score cannot override culprit correctness.
- Duplicate submissions are handled consistently.
- The result is persisted.
- The solution is revealed only after authorized completion.

## F. Security

- API keys never appear in frontend bundles.
- Public case responses exclude the secret solution.
- Unauthorized users cannot read private cases.
- Unauthorized users cannot access private media.
- AI output is schema-validated.
- User input is validated.
- Rate limits work.
- Production errors do not reveal internal secrets.
- Deletion follows documented retention rules.

## G. Provider Integration

- Gemini can be configured.
- Claude can be configured.
- Provider selection works without frontend code changes.
- Provider errors are normalized.
- Retries are bounded.
- Mock mode works without paid API credentials.
- Tests run without contacting external AI services.

## H. Production Quality

- The frontend builds.
- The backend builds.
- Type checking succeeds.
- Linting succeeds.
- Automated tests pass.
- The core user journey passes end-to-end tests.
- Mobile layouts remain usable.
- Keyboard navigation works for core flows.
- Setup and deployment documentation is complete.

---

# 36. DEVELOPMENT RULES FOR CODEX

These rules govern how Codex must work while implementing the project.

## 36.1 Start by Inspecting the Repository

Before creating files:

1. Inspect the existing repository.
2. Identify installed dependencies.
3. Inspect existing source files.
4. Check available scripts.
5. Identify working functionality.
6. Reuse suitable existing code.
7. Avoid overwriting unrelated user work.
8. Compare the current implementation with this specification.

If the repository is empty, initialize the project according to the defined architecture.

## 36.2 Implement in Small, Verified Steps

For each implementation phase:

1. Identify the requirements.
2. Implement the smallest coherent feature set.
3. Run type checking.
4. Run linting.
5. Run relevant tests.
6. Fix failures.
7. Update the progress document.
8. Continue to the next feature.

Do not create the entire application as one unverified code-generation operation.

## 36.3 Maintain a Progress File

Create `docs/progress.md`.

Track:

- Completed phases.
- Current phase.
- Implemented features.
- Tests executed.
- Test results.
- Known defects.
- Missing environment variables.
- External provider requirements.
- Remaining work.

Distinguish between:

- Implemented.
- Tested.
- Partially implemented.
- Blocked.
- Not implemented.

## 36.4 Do Not Fake Integrations

If an API key is missing:

- Use mock mode in development.
- Display a clear configuration message.
- Keep the real provider adapter implemented.
- Document the required configuration.
- Do not claim a real AI request succeeded.

If an image or video provider is unavailable:

- Use the documented fallback.
- Preserve the evidence workflow.
- Mark the media asset appropriately.

## 36.5 No Placeholder Completion

Do not mark a feature complete if it only has:

- A static screen.
- A button with no action.
- A hardcoded response presented as real AI output.
- A fake progress indicator.
- A database model without functional endpoints.
- An API endpoint without validation.
- An untested integration.
- A result page that does not use the canonical solution.

Sample cases are allowed for development and demonstration, but they must be explicitly identified as seeded fixtures or demo content.

## 36.6 Definition of Done

A requirement is done only when:

1. Its behavior is implemented.
2. Its input is validated.
3. Its output is correct.
4. Relevant failure cases are handled.
5. Its security implications are addressed.
6. Automated tests pass.
7. Documentation is updated where necessary.
8. The requirement traceability record is updated.

---

# 37. FINAL EXECUTION INSTRUCTIONS

Codex, treat this document as the authoritative specification for AI Mystery Room.

Your objective is to build the complete application described here.

Follow these instructions in order:

1. Inspect the existing repository and understand its current state.
2. Read the entire `spec.md` before implementation.
3. Create a requirement traceability document and implementation plan.
4. Establish the MERN monorepo, shared types, and development scripts.
5. Implement the database models and public/private data boundaries.
6. Build the mystery-generation engine and a deterministic mock AI provider.
7. Implement the canonical solution and evidence consistency validator.
8. Integrate Gemini and Claude through separate provider adapters.
9. Implement generation jobs and persistence.
10. Build the React user interface and all required pages.
11. Implement the evidence viewers and camera reconstruction experience.
12. Implement investigation persistence, hints, and the case board.
13. Implement accusation, scoring, and authorized solution reveal.
14. Integrate image and optional video generation with working fallbacks.
15. Implement security controls and error recovery.
16. Add unit, integration, and end-to-end tests.
17. Run the full build, lint, type-check, and test suites.
18. Fix all critical failures before claiming completion.
19. Update documentation and requirements traceability.
20. Report what is implemented, what has been tested, and what still requires external configuration.

Do not stop after the first working page. Continue through the implementation phases until the core product is functional.

If a feature requires a third-party credential that is not available, implement its adapter and mock fallback, document the missing credential, and continue with the remaining work.

If an ambiguity exists, follow the most secure and maintainable interpretation consistent with this specification. Record significant decisions instead of silently changing product behavior.

**Final delivery goal:** A working AI Mystery Room website where a user can submit a scenario, generate a logically consistent fictional investigation using Gemini or Claude, explore suspects and AI-generated evidence, build a theory, accuse a culprit, and receive a verified solution with a detailed explanation.

The final result must be an operational application with tested behavior, not just generated source files or a visual prototype.

---

# END OF MASTER SPECIFICATION

**Document owner:** AI Mystery Room project  
**Specification authority:** `spec.md`  
**Implementation target:** Codex  
**Primary acceptance test:** Complete a full mystery investigation from scenario submission to final solution reveal.

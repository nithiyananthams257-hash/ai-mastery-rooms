# AI pipeline

## Current stages

1. Validate and normalize scenario options.
2. Lock the case draft and solution in the generation result before publication.
3. Create suspect identities, timeline, and evidence relationships.
4. Validate schema, unique IDs, culprit reference, evidence references, and suspect references.
5. Persist content and private solution separately.
6. Publish the case only after all writes and validation succeed.

Mock mode generates a deterministic, internally linked case without external credentials. Gemini and Claude adapters are server-only. Gemini uses Google's current `@google/genai` SDK; Claude uses Anthropic's official SDK. Configure exact model identifiers through `GEMINI_MODEL` and `CLAUDE_MODEL`; provider output is treated as untrusted JSON and parsed against a strict schema before persistence. Provider failure fails the job safely and is never presented as a successful generation.

The application chooses the canonical culprit before the case is playable. Scoring compares the submitted suspect ID to that stored solution in deterministic server code. Models do not decide correctness. The currently configured provider adapter can generate the playable structured draft; independent cross-provider validation and bounded repair remain future hardening work.

Scene evidence uses original frame-based UI reconstruction. The visible notice identifies it as fictional and makes no claim that still imagery is real CCTV. A dedicated image/video provider is optional and not configured by default.

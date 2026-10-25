# Database schema

MongoDB/Mongoose stores the following case-scoped records:

- **Case:** owner hash, scenario and settings, status/job reference, public briefing, and IDs for suspects, evidence, and timeline events.
- **CaseSolution:** unique case ID, canonical suspect ID, motive, opportunity, action sequence, critical evidence IDs, deduction steps, alternatives, and final explanation. This collection is never returned before completion.
- **Suspect:** stable suspect ID, public identity/background, alibi, statement, and evidence/timeline references. No public guilt flag exists.
- **Evidence:** stable ID, evidence type/content, fictional source/time, suspect/event/fact relationships, reliability, fictional authenticity label, and optional chat/frame reconstruction data.
- **TimelineEvent:** timestamp, description, location, involved suspect and evidence IDs, source type, and reliability.
- **Investigation:** owner hash, state, reviewed/bookmarked evidence, notes, hints, player board, and completed result.
- **Accusation:** one unique final submission per investigation, selected suspect/evidence, score, and timestamp.
- **GenerationJob:** owner hash, status, current stage, progress, attempts, safe error, provider, and timestamps.

The API queries by both resource ID and owner hash for protected operations. Case archive is a soft delete. Mongoose timestamps are enabled. Query indexes cover owner+creation date and case/status lookups; a deployment migration should add compound indexes as data volume grows.

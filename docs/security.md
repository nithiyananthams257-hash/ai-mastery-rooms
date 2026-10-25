# Security and privacy

- AI keys and model names are read only by the API process and must not use `VITE_` prefixes.
- Guest tokens are 256-bit random values generated in the browser; only their SHA-256 digest is stored. The token is sent in a header and redacted from HTTP logs.
- Protected case and investigation queries include owner hash checks. Case IDs are not access credentials.
- The secret solution is stored in its own collection and excluded from all ordinary case, job, suspect, evidence, and timeline DTOs.
- Final scoring is server-side. Results are queryable only after the investigation is complete.
- API inputs use Zod validation; request bodies are limited, Helmet headers are enabled, CORS is restricted to `WEB_ORIGIN`, and a rate limit is applied.
- Production API errors return safe messages without stack traces. Provider errors are bounded before persistence.
- All generated chats, reports, images, and camera-style reconstructions are fictional. Users are told not to submit real personal information.

Before public production deployment, add account/session recovery or a guest-token recovery mechanism, CSRF protections if cookie auth is introduced, a moderation provider/policy, object-storage authorization, independent AI review, audit logging, retention jobs, and security review of all package upgrades.

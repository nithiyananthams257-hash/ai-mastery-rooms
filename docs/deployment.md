# Local setup and deployment

## Local

Use Node.js 22.6 or newer, npm, and MongoDB. For local MongoDB, run `docker compose up -d mongodb`, copy `.env.example` to `.env`, run `npm install`, then `npm run dev`. In PowerShell, use `npm.cmd` instead of `npm` if the execution policy blocks `npm.ps1`. The web app runs on port 5173 and the API on 4000.

`AI_MODE=mock` and provider `mock` require no external service. For real providers, configure the API environment with an API key and current supported model ID. Never put these credentials in a `VITE_*` variable. MongoDB must be reachable at `MONGODB_URI`.

## Production outline

1. Build with `npm ci` and `npm run build`.
2. Serve `apps/web/dist` from a static host and set the public `VITE_API_URL` at build time.
3. Run `apps/api/dist/server.js` behind HTTPS with a managed MongoDB deployment.
4. Set `NODE_ENV=production`, the exact frontend origin, secrets, and provider model identifiers in the platform secret manager.
5. Ensure the API process or a dedicated worker can claim MongoDB-backed generation jobs. Configure health checks against `/api/v1/health/ready`.
6. Configure backups, monitoring, data retention, origin allowlists, request limits, and alerting before public release.

The initial Mongo-backed worker is suitable for a single modest API deployment. For high throughput, move job processing to a dedicated persistent queue worker (for example BullMQ with Redis) and add controlled concurrency, idempotency keys, and dead-letter handling. Media files are not currently uploaded; the app renders original fictional frame reconstructions in the client.

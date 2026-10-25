import "dotenv/config";
import { z } from "zod";

const ConfigSchema = z.object({ NODE_ENV: z.enum(["development", "test", "production"]).default("development"), PORT: z.coerce.number().int().positive().default(4000), WEB_ORIGIN: z.string().default("http://localhost:5173"), MONGODB_URI: z.string().default("mongodb://127.0.0.1:27017/ai_mystery_room"), AI_MODE: z.enum(["mock", "provider"]).default("mock"), DEFAULT_TEXT_PROVIDER: z.enum(["gemini", "claude"]).default("gemini"), GEMINI_API_KEY: z.string().optional(), GEMINI_MODEL: z.string().optional(), ANTHROPIC_API_KEY: z.string().optional(), CLAUDE_MODEL: z.string().optional(), JOB_POLL_INTERVAL_MS: z.coerce.number().int().positive().default(1000), JOB_MAX_ATTEMPTS: z.coerce.number().int().min(1).max(5).default(2) });
export const config = ConfigSchema.parse(process.env);

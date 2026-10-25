import { config } from "../apps/api/src/config/index.ts";

const requiredForSelectedProvider = config.AI_MODE === "provider"
  ? config.DEFAULT_TEXT_PROVIDER === "gemini"
    ? ["GEMINI_API_KEY", "GEMINI_MODEL"]
    : ["ANTHROPIC_API_KEY", "CLAUDE_MODEL"]
  : [];
const missing = requiredForSelectedProvider.filter((name) => !process.env[name]);
if (missing.length) {
  console.error(`Missing configuration for provider mode: ${missing.join(", ")}`);
  process.exitCode = 1;
} else {
  console.log("Environment configuration is valid for the selected AI mode.");
}


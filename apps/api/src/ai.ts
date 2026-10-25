import { config } from "./config/index.js";
import type { CreateCaseInput } from "@mystery/shared";
import type { MysteryDraft } from "./ai/interfaces/index.js";
import { generateClaudeText } from "./ai/providers/claude/index.js";
import { generateGeminiText } from "./ai/providers/gemini/index.js";
import { usesDeterministicMockProvider } from "./ai/providers/mock/index.js";
import { createMysteryPrompt } from "./ai/prompts.js";
import { validateDraft } from "./ai/validators/draft.js";
export { validateDraft } from "./ai/validators/draft.js";
export type { MysteryDraft } from "./ai/interfaces/index.js";
export async function generateWithProvider(input: CreateCaseInput): Promise<MysteryDraft> {
  const provider = usesDeterministicMockProvider(input.provider) ? config.DEFAULT_TEXT_PROVIDER : input.provider;
  const prompt = createMysteryPrompt(input);
  const raw = provider === "gemini" ? await generateGeminiText(prompt) : await generateClaudeText(prompt);
  const cleaned = raw.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  return validateDraft(JSON.parse(cleaned));
}



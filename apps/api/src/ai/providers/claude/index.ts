import { config } from "../../../config/index.js";
export async function generateClaudeText(prompt: string): Promise<string> {
  if (!config.ANTHROPIC_API_KEY || !config.CLAUDE_MODEL) throw new Error("Claude is selected but ANTHROPIC_API_KEY or CLAUDE_MODEL is not configured.");
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  const client = new Anthropic({ apiKey: config.ANTHROPIC_API_KEY });
  const response = await client.messages.create({ model: config.CLAUDE_MODEL, max_tokens: 8000, messages: [{ role: "user", content: prompt }] });
  return response.content.map(c => c.type === "text" ? c.text : "").join("\n");
}

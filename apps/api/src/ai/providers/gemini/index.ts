import { config } from "../../../config/index.js";
export async function generateGeminiText(prompt: string): Promise<string> {
  if (!config.GEMINI_API_KEY || !config.GEMINI_MODEL) throw new Error("Gemini is selected but GEMINI_API_KEY or GEMINI_MODEL is not configured.");
  const { GoogleGenAI } = await import("@google/genai");
  const client = new GoogleGenAI({ apiKey: config.GEMINI_API_KEY });
  const result = await client.interactions.create({ model: config.GEMINI_MODEL, input: prompt });
  return result.output_text ?? "";
}

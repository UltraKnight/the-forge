export interface ModelConfig {
  provider: "google" | "openai";
  model: string;
  label: string;
}

/**
 * Temperature
 * Controls randomness. Lower values produce more deterministic responses. Higher values increase creativity.
 * 
 * Top P
 * Limits the model to the most probable tokens before sampling. Usually left at the default unless fine-tuning generation.

 * Max Output Tokens
 * Maximum number of tokens the model can generate. Larger values allow longer responses but increase cost and latency.
 * 
 * Model
 * Selects which language model will generate the response.
 */
export interface GenerationConfig {
  model: ModelConfig;
  temperature: number;
  topP: number;
  maxOutputTokens: number;
}

export const MODELS = {
  flash: {
    provider: "google",
    model: "gemini-2.5-flash",
    label: "Gemini 2.5 Flash",
  },
  pro: {
    provider: "google",
    model: "gemini-2.5-pro",
    label: "Gemini 2.5 Pro",
  },
} as const;

export const defaultGenerationConfig: GenerationConfig = {
  model: MODELS.flash,
  temperature: 0.7,
  topP: 1,
  maxOutputTokens: 2048,
};

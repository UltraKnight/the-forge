export interface ModelConfig {
  provider: "google" | "openai";
  model: string;
}

export interface GenerationConfig {
  model: ModelConfig;
  temperature: number;
  topP: number;
  maxOutputTokens: number;
}

export const defaultGenerationConfig: GenerationConfig = {
  model: {
    provider: "google",
    model: "gemini-2.5-flash",
  },
  temperature: 0.7,
  topP: 1,
  maxOutputTokens: 2048,
};

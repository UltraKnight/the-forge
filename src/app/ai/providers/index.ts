import type { ModelConfig } from "../config/generation";
import { getGoogleModel } from "./google";

export function getLanguageModel(config: ModelConfig) {
  switch (config.provider) {
    case "google":
      return getGoogleModel(config.model);

    default:
      throw new Error(`Unsupported provider: ${config.provider}`);
  }
}

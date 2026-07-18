import { convertToModelMessages, streamText, UIMessage } from "ai";

import { GenerationConfig } from "@/ai/config/generation";
import { resolveGenerationConfig } from "@/ai/config/resolve-generation-config";
import { getLanguageModel } from "@/ai/providers";

export interface GenerateOptions {
  messages: UIMessage[];
  system?: string;
  generationConfig?: Partial<GenerationConfig>;
}

export async function generate({
  messages,
  system,
  generationConfig,
}: GenerateOptions) {
  const config = resolveGenerationConfig(generationConfig);

  const model = getLanguageModel(config.model);

  const modelMessages = await convertToModelMessages(messages);

  return streamText({
    ...config,
    model,
    system,
    messages: modelMessages,
  });
}

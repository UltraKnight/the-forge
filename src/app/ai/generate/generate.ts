import {
  convertToModelMessages,
  generateText,
  Output,
  streamText,
  type FlexibleSchema,
  type InferSchema,
  type UIMessage,
} from "ai";

import { GenerationConfig } from "@/ai/config/generation";
import { resolveGenerationConfig } from "@/ai/config/resolve-generation-config";
import { getLanguageModel } from "@/ai/providers";

export interface GenerateOptions {
  messages: UIMessage[];
  system?: string;
  generationConfig?: Partial<GenerationConfig>;
}

export interface GenerateObjectOptions<SCHEMA extends FlexibleSchema> {
  schema: SCHEMA;
  schemaName: string;
  schemaDescription: string;
  prompt: string;
  system?: string;
  generationConfig?: Partial<GenerationConfig>;
}

export async function generate({ messages, system, generationConfig }: GenerateOptions) {
  const config = resolveGenerationConfig(generationConfig);
  const model = getLanguageModel(config.model);
  const modelMessages = await convertToModelMessages(messages);

  return streamText({ ...config, model, system, messages: modelMessages });
}

export async function generateObject<SCHEMA extends FlexibleSchema>({
  schema, schemaName, schemaDescription, prompt, system, generationConfig,
}: GenerateObjectOptions<SCHEMA>): Promise<InferSchema<SCHEMA>> {
  const config = resolveGenerationConfig(generationConfig);
  const { output } = await generateText({
    ...config,
    model: getLanguageModel(config.model),
    system,
    prompt,
    output: Output.object({ schema, name: schemaName, description: schemaDescription }),
  });

  return output;
}
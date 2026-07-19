import { generate } from "@/ai/generate";
import { GenerationConfig } from "@/ai/config/generation";
import { composePrompt } from "@/ai/prompts";
import {
  createUIMessageStreamResponse,
  toUIMessageStream,
  UIMessage,
} from "ai";
import { normalizeAIError, serializeAIError } from "@/ai/errors";
import { tools } from "@/ai/tools";

interface ChatRequest {
  messages: UIMessage[];
  generationConfig?: Partial<GenerationConfig>;
}

export async function POST(req: Request) {
  const { messages, generationConfig }: ChatRequest = await req.json();

  const result = await generate({
    messages,
    generationConfig,
    system: composePrompt(),
    tools,
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({
      stream: result.stream,
      onError: (error) => serializeAIError(normalizeAIError(error)),
    }),
  });
}

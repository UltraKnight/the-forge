import { defaultGenerationConfig } from "@/ai/config/generation";
import { composePrompt } from "@/ai/prompts";
import { getLanguageModel } from "@/ai/providers";
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  UIMessage,
} from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const { model, ...config } = defaultGenerationConfig;

  const result = streamText({
    ...config,
    model: getLanguageModel(model),
    system: composePrompt(),
    messages: await convertToModelMessages(messages),
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}

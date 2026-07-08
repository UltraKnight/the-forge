import { FORGE_IDENTITY } from "./identity";
import type { ComposePromptOptions } from "./types";

export function composePrompt(_: ComposePromptOptions = {}) {
  console.info("AI::ComposePrompt -> composePromptOptions:", _);

  return FORGE_IDENTITY;
}

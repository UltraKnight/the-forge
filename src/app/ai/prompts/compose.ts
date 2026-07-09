import { FORGE_IDENTITY } from "./identity";
import { promptPresets } from "./presets";
import type { ComposePromptOptions } from "./types";

export function composePrompt({
  preset = "default",
}: ComposePromptOptions = {}) {
  console.info("AI::ComposePrompt -> composePromptOptions:", preset);

  return [FORGE_IDENTITY, promptPresets[preset]].filter(Boolean).join("\n\n");
}

import { FORGE_IDENTITY } from "./identity";
import { promptPresets } from "./presets";
import type { ComposePromptOptions } from "./types";

export function composePrompt({
  preset = "default",
  context = [],
}: ComposePromptOptions = {}) {
  // TODO: Add a prompt inspector for dev mode
  
  return [FORGE_IDENTITY, promptPresets[preset], ...context]
    .filter(Boolean)
    .join("\n\n");
}

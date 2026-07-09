import type { PromptPreset } from "./presets";

export interface ComposePromptOptions {
  preset?: PromptPreset;
  context?: string[];
}

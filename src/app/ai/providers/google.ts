import { google } from "@ai-sdk/google";

export function getGoogleModel(model: string) {
  return google(model);
}

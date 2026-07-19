import type { ToolSet } from "ai";
import { fetchUrl } from "./fetch-url";

export const tools = { fetchUrl } satisfies ToolSet;

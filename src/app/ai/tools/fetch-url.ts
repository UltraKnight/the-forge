import { tool } from "ai";
import { z } from "zod";

export const fetchUrl = tool({
  description: "Fetches the HTML of a public website.",

  inputSchema: z.object({
    url: z.url(),
  }),

  async execute({ url }) {
    console.log("[tool:fetchUrl] called", { url });

    const controller = new AbortController();

    const timeout = setTimeout(() => controller.abort(), 10_000);

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        redirect: "follow",
      });

      if (!response.ok) {
        throw new Error(`Unable to fetch ${url}`);
      }

      const html = await response.text();

      console.log("[tool:fetchUrl] success", {
        status: response.status,
        bytes: html.length,
      });

      return {
        url: response.url,
        status: response.status,
        contentType: response.headers.get("content-type"),
        html,
      };
    } finally {
      clearTimeout(timeout);
    }
  },
});

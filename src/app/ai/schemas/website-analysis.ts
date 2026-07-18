import { z } from "zod";

export const websiteAnalysisInputSchema = z.object({
  content: z.string().trim().min(1).max(50_000),
});

export const websiteAnalysisSchema = z.object({
  summary: z.string().describe("A concise description of the website's purpose and primary user value."),
  technologies: z.array(z.object({
    name: z.string().describe("The detected technology or library."),
    evidence: z.string().describe("The observable evidence supporting the detection."),
  })),
  architecture: z.array(z.string()),
  recommendations: z.array(z.object({
    priority: z.enum(["high", "medium", "low"]),
    recommendation: z.string(),
    rationale: z.string(),
  })),
  limitations: z.array(z.string()),
});

export type WebsiteAnalysis = z.infer<typeof websiteAnalysisSchema>;
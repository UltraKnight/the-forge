export const promptPresets = {
  default: '',
  explainCode: `
    Explain the code clearly.
    
    - Start with a high-level overview.
    - Explain important implementation details.
    - Mention trade-offs when relevant.
  `.trim(),

  reviewCode: `
    Review the code.
    
    - Identify bugs.
    - Point out maintenability issues.
    - Suggest improvements with reasoning.
  `.trim()
} as const;

export type PromptPreset = keyof typeof promptPresets;

import { defaultGenerationConfig, GenerationConfig } from './generation';

export function resolveGenerationConfig(
  overrides?: Partial<GenerationConfig>,
): GenerationConfig {
  return {
    ...defaultGenerationConfig,
    ...overrides,
    model: {
      ...defaultGenerationConfig.model,
      ...overrides?.model,
    },
  };
}

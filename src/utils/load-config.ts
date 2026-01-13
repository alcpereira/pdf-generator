import type { CVConfig } from "~/types/cv.types";
import { validateCVConfig } from "./validate";

/**
 * Default config name used when no config is specified
 */
export const DEFAULT_CONFIG = "base";

/**
 * Loads a CV config from the configs directory
 *
 * @param configName - Name of the config file (without .config.ts extension)
 * @returns The loaded and validated CV config
 * @throws Error if config file doesn't exist or is invalid
 */
export async function loadConfig(
  configName: string = DEFAULT_CONFIG,
): Promise<CVConfig> {
  try {
    // Import the config file dynamically
    const configModule = await import(`../../configs/${configName}.config.ts`);
    const config = configModule.config || configModule.default;

    if (!config) {
      throw new Error(
        `Config file "configs/${configName}.config.ts" does not export a config object.\n` +
          `Make sure to export: export const config: CVConfig = { ... };`,
      );
    }

    // Validate the config
    const validation = validateCVConfig(config);

    if (!validation.success) {
      const errors = validation.error.issues
        .map((err) => `  - ${err.path.join(".")}: ${err.message}`)
        .join("\n");

      throw new Error(
        `Invalid CV config in "configs/${configName}.config.ts":\n${errors}\n\n` +
          `See src/types/cv.types.ts for valid structure.`,
      );
    }

    return validation.data;
  } catch (error) {
    if (error instanceof Error) {
      // Re-throw validation errors as-is
      if (error.message.includes("Invalid CV config")) {
        throw error;
      }

      // Handle module not found
      if (error.message.includes("Cannot find module")) {
        throw new Error(
          `Config file "configs/${configName}.config.ts" not found.\n\n` +
            `To create it:\n` +
            `  cp configs/base.config.ts configs/${configName}.config.ts\n\n` +
            `Available configs:\n` +
            `  - base.config.ts (template)\n`,
        );
      }
    }

    throw new Error(`Failed to load config "${configName}": ${error}`);
  }
}

/**
 * Loads a config synchronously (for browser use)
 *
 * @param config - The config object or module
 * @returns The validated CV config
 */
export function loadConfigSync(
  config: CVConfig | { config: CVConfig; default?: CVConfig },
): CVConfig {
  // Handle both direct config and module exports
  const configData = "config" in config ? config.config : config;

  const validation = validateCVConfig(configData);

  if (!validation.success) {
    const errors = validation.error.issues
      .map((err) => `  - ${err.path.join(".")}: ${err.message}`)
      .join("\n");

    throw new Error(`Invalid CV config:\n${errors}`);
  }

  return validation.data;
}

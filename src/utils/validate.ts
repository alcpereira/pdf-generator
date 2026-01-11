import { z } from "zod";

/**
 * Zod schemas for CV validation
 *
 * These schemas provide runtime validation for CV configs.
 */

const TextLineSchema = z.object({
  text: z.string(),
  bulletPoint: z.boolean(),
});

const HeaderSchema = z.object({
  name: z.string().min(1, "Name is required"),
  resume: z.array(z.string()).min(1, "At least one resume line is required"),
});

const ProfileLinkSchema = z.object({
  type: z.string().min(1, "Link type is required"),
  link: z.string().min(1, "Link URL is required"),
});

const ProfileSchema = z.object({
  shouldDisplayProfileImage: z.boolean(),
  lines: z.array(z.string()),
  links: z.array(ProfileLinkSchema),
});

const WorkExperienceSchema = z.object({
  position: z.string(),
  company: z.string(),
  location: z.string(),
  type: z.string(),
  years: z.string(),
  bubbles: z.array(z.string()),
  lines: z.array(TextLineSchema),
});

const ProjectSchema = z.object({
  name: z.string(),
  duration: z.string(),
  bubbles: z.array(z.string()),
  lines: z.array(TextLineSchema),
});

const TechnicalCategorySchema = z.object({
  category: z.string(),
  bubbles: z.array(z.string()),
});

const LanguageSchema = z.object({
  language: z.string(),
  abbreviation: z.string(),
  level: z.string(),
});

const EducationSchema = z.object({
  degree: z.string(),
  school: z.string(),
  location: z.string(),
  years: z.string(),
});

export const CVConfigSchema = z.object({
  header: HeaderSchema,
  profile: ProfileSchema,
  workExperience: z.array(WorkExperienceSchema).optional(),
  projects: z.array(ProjectSchema).optional(),
  technical: z.array(TechnicalCategorySchema).optional(),
  languages: z.array(LanguageSchema).optional(),
  education: z.array(EducationSchema).optional(),
});

/**
 * Validates a CV config object
 *
 * @param config - The config object to validate
 * @returns Validation result with parsed data or error details
 */
export function validateCVConfig(config: unknown) {
  return CVConfigSchema.safeParse(config);
}

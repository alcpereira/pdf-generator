/**
 * CV Generator Type Definitions
 *
 * This file contains all TypeScript types for CV configurations.
 * Each type includes JSDoc documentation to help AI assistants and developers
 * understand the structure and purpose of each field.
 */

/**
 * A single line of text with optional bullet point
 *
 * @example
 * { text: "Led team of 5 engineers", bulletPoint: true }
 */
export interface TextLine {
  /** The text content to display */
  text: string;
  /** Whether to display a bullet point before the text */
  bulletPoint: boolean;
}

/**
 * CV Header section - displays at the top of the CV
 *
 * This is a required section that shows the candidate's name and professional summary.
 */
export interface Header {
  /** Full name of the candidate */
  name: string;
  /**
   * Professional summary or headline (multiple lines supported)
   *
   * @example
   * ["Senior Software Engineer with 10 years experience",
   *  "Specialized in React and Node.js"]
   */
  resume: string[];
}

/**
 * Work experience entry
 *
 * Represents a single job or role in the work history section.
 */
export interface WorkExperience {
  /** Job title or position held */
  position: string;
  /** Company or organization name */
  company: string;
  /** Physical location (city, state/country) */
  location: string;
  /** Employment type (e.g., "Remote", "Hybrid", "On-site") */
  type: string;
  /** Time period of employment (e.g., "2020 - Present", "Jan 2019 - Dec 2021") */
  years: string;
  /**
   * Technology tags/skills used in this role
   * These will be displayed as colored bubbles/pills
   */
  bubbles: string[];
  /**
   * Detailed description of responsibilities and achievements
   * Each line can have an optional bullet point
   */
  lines: TextLine[];
}

/**
 * Project entry
 *
 * Represents a side project, portfolio piece, or significant project work.
 */
export interface Project {
  /**
   * Project name or title
   * Can be empty string if you want to show duration as the header
   */
  name: string;
  /**
   * Project duration or timeframe
   *
   * @example
   * "3 months project"
   * "Summer 2023"
   */
  duration: string;
  /**
   * Technologies and tools used in the project
   * These will be displayed as colored bubbles/pills
   */
  bubbles: string[];
  /**
   * Project description and key accomplishments
   * Each line can have an optional bullet point
   */
  lines: TextLine[];
}

/**
 * Profile link type
 *
 * Supported social/professional profile types for the sidebar.
 */
export type ProfileLinkType =
  | "LinkedIn"
  | "GitHub"
  | "Twitter"
  | "Website"
  | string;

/**
 * Profile link entry
 *
 * A clickable link displayed in the profile sidebar.
 */
export interface ProfileLink {
  /**
   * Type of profile link
   * Common types: "LinkedIn", "GitHub", "Twitter", "Website"
   * Icons will be shown automatically for recognized types
   */
  type: ProfileLinkType;
  /**
   * URL or username/handle
   * Can be full URL or just the username part
   *
   * @example
   * "linkedin.com/in/johndoe"
   * "github.com/johndoe"
   * "x.com/johndoe"
   */
  link: string;
  /**
   * Custom display name for the link
   * If not provided, the link type will be displayed
   *
   * @example
   * name: "My Portfolio" // Instead of "Website"
   */
  name?: string;
}

/**
 * Profile section configuration
 *
 * This section appears in the right sidebar and contains contact info and links.
 * This is a required section.
 */
export interface Profile {
  /** Whether to display a profile image (photo) */
  shouldDisplayProfileImage: boolean;
  /**
   * Contact information lines
   * Typically includes: location, nationality, phone, email
   *
   * @example
   * ["San Francisco, CA",
   *  "American",
   *  "+1 234 567 8900",
   *  "john.doe@email.com"]
   */
  lines: string[];
  /** Social media and professional profile links */
  links: ProfileLink[];
}

/**
 * Technical skills category
 *
 * Groups related technical skills together under a category name.
 */
export interface TechnicalCategory {
  /**
   * Category name
   *
   * @example
   * "Languages"
   * "Frameworks"
   * "Tools & Platforms"
   * "Databases"
   */
  category: string;
  /**
   * List of skills in this category
   * These will be displayed as colored bubbles/pills
   */
  bubbles: string[];
}

/**
 * Language proficiency level
 *
 * Standard language proficiency descriptors.
 */
export type LanguageLevel =
  | "Native"
  | "Fluent"
  | "Professional"
  | "Intermediate"
  | "Basic"
  | string;

/**
 * Language entry
 *
 * Represents a spoken/written language and proficiency level.
 */
export interface Language {
  /**
   * Full language name
   *
   * @example
   * "English"
   * "Spanish"
   */
  language: string;
  /**
   * Two-letter language code (ISO 639-1)
   *
   * @example
   * "EN" for English
   * "ES" for Spanish
   */
  abbreviation: string;
  /**
   * Proficiency level
   * Common levels: "Native", "Fluent", "Professional", "Intermediate", "Basic"
   */
  level: LanguageLevel;
}

/**
 * Education entry
 *
 * Represents a degree, certification, or educational program.
 */
export interface Education {
  /**
   * Degree or certification name
   *
   * @example
   * "Bachelor of Science in Computer Science"
   * "MBA"
   * "AWS Certified Solutions Architect"
   */
  degree: string;
  /**
   * Educational institution name
   *
   * @example
   * "Stanford University"
   * "MIT"
   */
  school: string;
  /** School location (city, state/country) */
  location: string;
  /**
   * Time period or graduation year
   *
   * @example
   * "2015-2019"
   * "2020"
   */
  years: string;
}

/**
 * Complete CV Configuration
 *
 * This is the root configuration object that contains all CV data.
 *
 * Required sections:
 * - header: Your name and professional summary
 * - profile: Contact information and links
 *
 * Optional sections (can be omitted or empty arrays):
 * - workExperience: Employment history
 * - projects: Side projects and portfolio
 * - technical: Technical skills grouped by category
 * - languages: Language proficiencies
 * - education: Academic background and certifications
 *
 * @example
 * ```typescript
 * const config: CVConfig = {
 *   header: {
 *     name: "John Doe",
 *     resume: ["Senior Software Engineer", "Full-stack developer with 8 years experience"]
 *   },
 *   profile: {
 *     shouldDisplayProfileImage: true,
 *     lines: ["San Francisco, CA", "+1 234 567 8900", "john@example.com"],
 *     links: [
 *       { type: "LinkedIn", link: "linkedin.com/in/johndoe" },
 *       { type: "GitHub", link: "github.com/johndoe" }
 *     ]
 *   },
 *   workExperience: [...],
 *   // other optional sections
 * };
 * ```
 */
export interface CVConfig {
  /** CV header with name and professional summary (required) */
  header: Header;

  /** Profile sidebar with contact info and links (required) */
  profile: Profile;

  /** Work experience history (optional) */
  workExperience?: WorkExperience[];

  /** Side projects and portfolio items (optional) */
  projects?: Project[];

  /** Technical skills grouped by category (optional) */
  technical?: TechnicalCategory[];

  /** Language proficiencies (optional) */
  languages?: Language[];

  /** Education and certifications (optional) */
  education?: Education[];
}

/**
 * Type guard to check if a value is a valid CVConfig
 */
export function isCVConfig(value: unknown): value is CVConfig {
  if (!value || typeof value !== "object") return false;

  const config = value as Partial<CVConfig>;

  // Check required fields
  if (!config.header || !config.profile) return false;
  if (typeof config.header.name !== "string") return false;
  if (!Array.isArray(config.header.resume)) return false;

  return true;
}

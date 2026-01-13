/**
 * Theme System Type Definitions
 *
 * Types for the CV theme system, allowing customizable visual styles.
 */

/**
 * Color palette for a theme
 */
export interface ThemeColors {
  /** Primary accent color (used for headers, highlights) */
  primary: string;
  /** Secondary accent color */
  secondary?: string;
  /** Background color */
  background: string;
  /** Main text color */
  text: string;
  /** Muted/secondary text color */
  textMuted: string;
  /** Border color */
  border: string;
}

/**
 * Spacing scale for consistent layout
 */
export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

/**
 * Typography settings
 */
export interface ThemeTypography {
  /** Font family for body text */
  fontFamily: string;
  /** Font family for headings */
  headingFontFamily: string;
  /** Base font size */
  baseFontSize: string;
}

/**
 * Complete theme configuration
 */
export interface Theme {
  /** Unique theme identifier */
  id: string;
  /** Display name for the theme */
  name: string;
  /** Theme description */
  description: string;
  /** Color palette */
  colors: ThemeColors;
  /** Spacing scale */
  spacing: ThemeSpacing;
  /** Typography settings */
  typography: ThemeTypography;
}

/**
 * Predefined theme names
 */
export type ThemeName = "classic" | "modern" | "minimal";

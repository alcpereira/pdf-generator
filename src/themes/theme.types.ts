import type { CSSProperties } from "react";

/**
 * Base design tokens for colors, spacing, typography, and borders
 */
export interface DesignTokens {
  // Color tokens
  ColorPrimary: string;
  ColorSecondary: string;
  ColorNeutralLight: string;
  ColorNeutralMedium: string;
  ColorNeutralDark: string;
  ColorBackground: string;
  ColorText: string;

  // Spacing tokens
  SpaceXs: string;
  SpaceSm: string;
  SpaceMd: string;
  SpaceLg: string;
  SpaceXl: string;

  // Typography tokens
  FontFamilyBase: string;
  FontFamilyHeading: string;
  FontSizeXs: string;
  FontSizeSm: string;
  FontSizeMd: string;
  FontSizeLg: string;
  FontSizeXl: string;
  FontSizeXxl: string;
  FontWeightRegular: number;
  FontWeightMedium: number;
  FontWeightBold: number;
  LineHeightNormal: number;
  LineHeightRelaxed: number;

  // Border tokens
  BorderRadiusSm: string;
  BorderRadiusMd: string;
  BorderRadiusLg: string;
  BorderRadiusFull: string;
  BorderWidthThin: string;
  BorderWidthMedium: string;
}

/**
 * Composite text styles that combine multiple design tokens
 */
export interface TextStyles {
  TextHeadingStrong: CSSProperties;
  TextHeadingMedium: CSSProperties;
  TextBodyRegular: CSSProperties;
  TextBodySmall: CSSProperties;
  TextMuted: CSSProperties;
}

/**
 * Component-specific style definitions
 */
export interface ComponentStyles {
  // Section component (compound)
  section?: CSSProperties;
  sectionTitle: CSSProperties;
  sectionContent?: CSSProperties;
  sectionItem: CSSProperties;
  sectionItemTitle: CSSProperties;
  sectionItemSubtitle: CSSProperties;
  sectionTags: CSSProperties;
  sectionLines: CSSProperties;
  sectionLine: CSSProperties;

  // Tag component (renamed from Bubble)
  tag: CSSProperties;

  // Header component
  headerContainer: CSSProperties;
  headerName: CSSProperties;
  headerLine: CSSProperties;

  // Profile component (compound)
  profileContainer: CSSProperties;
  profileImage: CSSProperties;
  profileImageCircular: CSSProperties;
  profileImageBorder: CSSProperties;
  profileContact: CSSProperties;
  profileContactInfo: CSSProperties;
  profileContactIcon: CSSProperties;
  profileContactInfoLink: CSSProperties;
  profileLinks?: CSSProperties;
  profileLink: CSSProperties;
  profileLinkIcon: CSSProperties;
  profileLinkText: CSSProperties;
  profileSection?: CSSProperties;
  profileSectionTitle: CSSProperties;
  profileCategory?: CSSProperties;
  profileCategoryTitle: CSSProperties;
  profileTags: CSSProperties;

  // Profile - Language specific styles
  profileLanguageItem: CSSProperties;
  profileLanguageAbbr: CSSProperties;
  profileLanguageName: CSSProperties;
  profileLanguageLevel: CSSProperties;

  // Profile - Education specific styles
  profileEducationDegree: CSSProperties;
  profileEducationSchool: CSSProperties;
  profileEducationLocation: CSSProperties;

  // Layout
  layoutContainer: CSSProperties;
  layoutTwoColumnContainer: CSSProperties;
  layoutTwoColumnLeft: CSSProperties;
  layoutTwoColumnRight: CSSProperties;

  // Separator
  separator: CSSProperties;

  // Page container
  pageContainer: CSSProperties;
}

/**
 * Complete theme styles interface that combines all style definitions
 */
export interface ThemeStyles
  extends DesignTokens,
    TextStyles,
    ComponentStyles {}

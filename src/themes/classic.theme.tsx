import type { CVConfig } from "../types/cv.types";
import type { ThemeStyles } from "./theme.types";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Profile from "../components/Profile/Profile";
import Tag from "../components/Tag/Tag";
import Separator from "../components/Separator/Separator";

/**
 * Classic theme styles - maps all CSS from the original design to inline styles
 */
const classicStyles: ThemeStyles = {
  // Base color tokens
  ColorPrimary: "rgb(167, 67, 67)",
  ColorSecondary: "rgb(94, 90, 94)",
  ColorNeutralLight: "rgb(255, 255, 255)",
  ColorNeutralMedium: "rgb(94, 90, 94, 0.3)",
  ColorNeutralDark: "rgb(20, 20, 20)",
  ColorBackground: "rgb(255, 255, 255)",
  ColorText: "rgb(20, 20, 20)",

  // Spacing tokens
  SpaceXs: "0.25em",
  SpaceSm: "0.5em",
  SpaceMd: "1em",
  SpaceLg: "1.5em",
  SpaceXl: "2em",

  // Typography tokens
  FontFamilyBase: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  FontFamilyHeading: "Sacramento, cursive",
  FontSizeXs: "12px",
  FontSizeSm: "14px",
  FontSizeMd: "16px",
  FontSizeLg: "18px",
  FontSizeXl: "20px",
  FontSizeXxl: "80px",
  FontWeightRegular: 400,
  FontWeightMedium: 500,
  FontWeightBold: 700,
  LineHeightNormal: 1.3,
  LineHeightRelaxed: 1.5,

  // Border tokens
  BorderRadiusSm: "0.5em",
  BorderRadiusMd: "1em",
  BorderRadiusLg: "1.5em",
  BorderRadiusFull: "9999px",
  BorderWidthThin: "1px",
  BorderWidthMedium: "3px",

  // Composite text styles
  TextHeadingStrong: {
    fontSize: "18px",
    fontWeight: 700,
    color: "rgb(20, 20, 20)",
  },
  TextHeadingMedium: {
    fontSize: "16px",
    fontWeight: 600,
    color: "rgb(20, 20, 20)",
  },
  TextBodyRegular: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "rgb(20, 20, 20)",
  },
  TextBodySmall: {
    fontSize: "12px",
    fontWeight: 400,
    color: "rgb(20, 20, 20)",
  },
  TextMuted: {
    fontSize: "14px",
    fontWeight: 400,
    color: "rgb(94, 90, 94)",
  },

  // Section component styles
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "20px", // Add spacing between sections
  },
  sectionTitle: {
    backgroundColor: "rgb(167, 67, 67)",
    color: "rgb(255, 255, 255)",
    padding: "0.25em 0.5em",
    borderRadius: "0.5em",
    textTransform: "uppercase",
    fontWeight: 700,
    width: "fit-content", // Prevent growing
  },
  sectionContent: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "100%",
  },
  sectionItem: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  sectionItemTitle: {
    fontWeight: 700,
    fontSize: "18px",
  },
  sectionItemSubtitle: {
    fontSize: "14px",
    fontWeight: 500,
  },
  sectionTags: {
    display: "flex",
    gap: "0.5em",
    fontSize: "12px",
  },
  sectionLines: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  sectionLine: {
    fontSize: "14px",
  },

  // Tag component (renamed from Bubble)
  tag: {
    border: "1px solid rgb(94, 90, 94)",
    color: "rgb(94, 90, 94)",
    padding: "0.125em 0.75em",
    borderRadius: "1.5em",
    flexShrink: 0,
  },

  // Header component
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  headerName: {
    fontFamily: "Sacramento, cursive",
    lineHeight: 1.1,
    margin: 0,
    fontSize: "80px",
  },
  headerLine: {
    margin: 0,
    color: "rgb(94, 90, 94)",
    fontSize: "20px",
    lineHeight: 1.3,
  },

  // Profile component styles
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  },
  profileImage: {
    height: "150px",
    overflow: "hidden",
  },
  profileImageCircular: {
    borderRadius: "9999px",
  },
  profileImageBorder: {
    border: "3px solid rgb(167, 67, 67)",
  },
  profileContact: {
    display: "flex",
    flexDirection: "column",
    gap: "0.125em",
  },
  profileContactInfo: {
    margin: 0,
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
  },
  profileContactIcon: {
    marginRight: "0.5em",
    display: "inline-flex",
    alignItems: "center",
    flexShrink: 0,
  },
  profileContactInfoLink: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    margin: 0,
    fontSize: "14px",
    cursor: "default",
  },
  profileLink: {
    padding: "0.125em",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    gap: "0.5em",
  },
  profileLinkIcon: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
  },
  profileLinkText: {
    fontSize: "14px",
  },
  profileSectionTitle: {
    backgroundColor: "rgb(167, 67, 67)",
    color: "rgb(255, 255, 255)",
    padding: "0.25em 0.5em",
    borderRadius: "0.5em",
    textTransform: "uppercase",
    fontWeight: 700,
    width: "fit-content", // Prevent growing
    marginBottom: "0.5em", // Add spacing between title and content
  },
  profileCategory: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25em",
    marginBottom: "0.5em", // Add spacing between categories
  },
  profileCategoryTitle: {
    fontWeight: 500,
    fontSize: "14px",
  },
  profileTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.25em",
    fontSize: "12px",
  },

  // Profile - Language specific styles
  profileLanguageItem: {
    display: "flex",
    gap: "0.75em",
    fontSize: "14px",
  },
  profileLanguageAbbr: {
    fontWeight: 600,
    fontFamily: "monospace",
  },
  profileLanguageName: {
    flex: 1,
  },
  profileLanguageLevel: {
    color: "rgb(94, 90, 94)",
  },

  // Profile - Education specific styles
  profileEducationDegree: {
    fontSize: "16px",
    fontWeight: 600,
  },
  profileEducationSchool: {
    fontWeight: 600,
    fontSize: "14px",
    color: "rgb(94, 90, 94)",
  },
  profileEducationLocation: {
    color: "rgb(94, 90, 94)",
    fontSize: "14px",
  },

  // Layout
  layoutContainer: {
    padding: "2em",
    display: "flex",
    flexDirection: "column",
    gap: "1.1em",
  },
  layoutTwoColumnContainer: {
    display: "flex",
    gap: "2em",
  },
  layoutTwoColumnLeft: {
    flex: 0.7,
  },
  layoutTwoColumnRight: {
    flex: 0.3,
  },

  // Separator
  separator: {
    height: "1px",
    width: "100%",
    backgroundColor: "rgb(94, 90, 94, 0.3)",
  },

  // Page container
  pageContainer: {
    padding: "2em",
    display: "flex",
    flexDirection: "column",
    gap: "1.1em",
  },
};

/**
 * Classic theme component - composes the entire CV layout
 */
export function ClassicTheme({ config }: { config: CVConfig }) {
  return (
    <div style={classicStyles.pageContainer}>
      {/* Header */}
      <Header
        name={config.header.name}
        resume={config.header.resume}
        styles={classicStyles}
      />

      <Separator styles={classicStyles} />

      {/* Two column layout */}
      <div style={classicStyles.layoutTwoColumnContainer}>
        {/* Left column - 70% - Main content */}
        <div style={classicStyles.layoutTwoColumnLeft}>
          {/* Work Experience Section */}
          {config.workExperience && config.workExperience.length > 0 && (
            <Section styles={classicStyles}>
              <Section.Title styles={classicStyles}>
                Work Experience
              </Section.Title>
              <Section.Content styles={classicStyles}>
                {config.workExperience.map((exp, i) => (
                  <Section.Item key={i} styles={classicStyles}>
                    <Section.ItemTitle styles={classicStyles}>
                      {exp.position}
                    </Section.ItemTitle>
                    <Section.ItemSubtitle styles={classicStyles}>
                      {exp.location} • {exp.company} • {exp.type} • {exp.years}
                    </Section.ItemSubtitle>
                    {exp.bubbles && exp.bubbles.length > 0 && (
                      <Section.Tags styles={classicStyles}>
                        {exp.bubbles.map((tech, j) => (
                          <Tag key={j} styles={classicStyles}>
                            {tech}
                          </Tag>
                        ))}
                      </Section.Tags>
                    )}
                    {exp.lines && exp.lines.length > 0 && (
                      <Section.Lines styles={classicStyles}>
                        {exp.lines.map((line, k) => (
                          <Section.Line
                            key={k}
                            bullet={line.bulletPoint}
                            styles={classicStyles}
                          >
                            {line.text}
                          </Section.Line>
                        ))}
                      </Section.Lines>
                    )}
                  </Section.Item>
                ))}
              </Section.Content>
            </Section>
          )}

          {/* Projects Section */}
          {config.projects && config.projects.length > 0 && (
            <Section styles={classicStyles}>
              <Section.Title styles={classicStyles}>Projects</Section.Title>
              <Section.Content styles={classicStyles}>
                {config.projects.map((proj, i) => (
                  <Section.Item key={i} styles={classicStyles}>
                    <Section.ItemTitle styles={classicStyles}>
                      {proj.name}
                    </Section.ItemTitle>
                    <Section.ItemSubtitle styles={classicStyles}>
                      {proj.duration}
                    </Section.ItemSubtitle>
                    {proj.bubbles && proj.bubbles.length > 0 && (
                      <Section.Tags styles={classicStyles}>
                        {proj.bubbles.map((tech, j) => (
                          <Tag key={j} styles={classicStyles}>
                            {tech}
                          </Tag>
                        ))}
                      </Section.Tags>
                    )}
                    {proj.lines && proj.lines.length > 0 && (
                      <Section.Lines styles={classicStyles}>
                        {proj.lines.map((line, k) => (
                          <Section.Line
                            key={k}
                            bullet={line.bulletPoint}
                            styles={classicStyles}
                          >
                            {line.text}
                          </Section.Line>
                        ))}
                      </Section.Lines>
                    )}
                  </Section.Item>
                ))}
              </Section.Content>
            </Section>
          )}
        </div>

        {/* Right column - 30% - Profile Sidebar */}
        <div style={classicStyles.layoutTwoColumnRight}>
          <Profile styles={classicStyles}>
            {/* Profile Image */}
            {config.profile.image.display && (
              <Profile.Image
                circular={config.profile.image.circular}
                border={config.profile.image.border}
                styles={classicStyles}
              />
            )}

            {/* Contact Information */}
            <Profile.Contact styles={classicStyles}>
              <Profile.ContactInfo
                field={config.profile.contact.location}
                type="location"
                defaultShowIcon={true}
                styles={classicStyles}
              />
              <Profile.ContactInfo
                field={config.profile.contact.nationality}
                type="nationality"
                defaultShowIcon={true}
                styles={classicStyles}
              />
              <Profile.ContactInfo
                field={config.profile.contact.phone}
                type="phone"
                defaultShowIcon={true}
                styles={classicStyles}
              />
              <Profile.ContactInfo
                field={config.profile.contact.email}
                type="email"
                defaultShowIcon={true}
                styles={classicStyles}
              />
            </Profile.Contact>

            {/* Links */}
            {config.profile.links && config.profile.links.length > 0 && (
              <Profile.Links>
                {config.profile.links.map((link, i) => (
                  <Profile.Link
                    key={i}
                    type={link.type}
                    url={link.url}
                    label={link.label}
                    showIcon={link.showIcon}
                    defaultShowIcon={true}
                    styles={classicStyles}
                  />
                ))}
              </Profile.Links>
            )}

            <Separator
              styles={classicStyles}
              marginTop="0.5em"
              marginBottom="0.5em"
            />

            {/* Technical Skills Section */}
            {config.technical && config.technical.length > 0 && (
              <>
                <Profile.Section>
                  <Profile.SectionTitle styles={classicStyles}>
                    Technical Skills
                  </Profile.SectionTitle>
                  {config.technical.map((cat, i) => (
                    <Profile.Category key={i} styles={classicStyles}>
                      <Profile.CategoryTitle styles={classicStyles}>
                        {cat.category}
                      </Profile.CategoryTitle>
                      <Profile.Tags styles={classicStyles}>
                        {cat.bubbles.map((tech, j) => (
                          <Tag key={j} styles={classicStyles}>
                            {tech}
                          </Tag>
                        ))}
                      </Profile.Tags>
                    </Profile.Category>
                  ))}
                </Profile.Section>
                <Separator
                  styles={classicStyles}
                  marginTop="0.5em"
                  marginBottom="0.5em"
                />
              </>
            )}

            {/* Languages Section */}
            {config.languages && config.languages.length > 0 && (
              <>
                <Profile.Section>
                  <Profile.SectionTitle styles={classicStyles}>
                    Languages
                  </Profile.SectionTitle>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      columnGap: "1.5em",
                    }}
                  >
                    {config.languages.map((lang, i) => (
                      <div key={i} style={classicStyles.profileLanguageItem}>
                        <span style={classicStyles.profileLanguageAbbr}>
                          {lang.abbreviation}
                        </span>
                        <span style={classicStyles.profileLanguageName}>
                          {lang.language}
                        </span>
                        <span style={classicStyles.profileLanguageLevel}>
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </Profile.Section>
                <Separator
                  styles={classicStyles}
                  marginTop="0.5em"
                  marginBottom="0.5em"
                />
              </>
            )}

            {/* Education Section */}
            {config.education && config.education.length > 0 && (
              <Profile.Section>
                <Profile.SectionTitle styles={classicStyles}>
                  Education
                </Profile.SectionTitle>
                {config.education.map((edu, i) => (
                  <Profile.Category key={i} styles={classicStyles}>
                    <div style={classicStyles.profileEducationDegree}>
                      {edu.degree}
                    </div>
                    <div style={classicStyles.profileEducationSchool}>
                      {edu.school}
                    </div>
                    <div style={classicStyles.profileEducationLocation}>
                      {edu.location} • {edu.years}
                    </div>
                  </Profile.Category>
                ))}
              </Profile.Section>
            )}
          </Profile>
        </div>
      </div>
    </div>
  );
}

import type { CSSProperties, ReactNode } from "react";
import type { ThemeStyles } from "~/themes/theme.types";

// Root Section component
interface SectionProps {
  children: ReactNode;
  styles?: ThemeStyles;
}

const Section = ({ children, styles }: SectionProps) => {
  return <div style={styles?.section}>{children}</div>;
};

// Section.Title sub-component
interface SectionTitleProps {
  children: ReactNode;
  styles: ThemeStyles;
}

const SectionTitle = ({ children, styles }: SectionTitleProps) => {
  return <div style={styles.sectionTitle}>{children}</div>;
};

// Section.Content sub-component
interface SectionContentProps {
  children: ReactNode;
  styles?: ThemeStyles;
}

const SectionContent = ({ children, styles }: SectionContentProps) => {
  return <div style={styles?.sectionContent}>{children}</div>;
};

// Section.Item sub-component
interface SectionItemProps {
  children: ReactNode;
  styles: ThemeStyles;
}

const SectionItem = ({ children, styles }: SectionItemProps) => {
  return <div style={styles.sectionItem}>{children}</div>;
};

// Section.ItemTitle sub-component
interface SectionItemTitleProps {
  children: ReactNode;
  styles: ThemeStyles;
}

const SectionItemTitle = ({ children, styles }: SectionItemTitleProps) => {
  return <span style={styles.sectionItemTitle}>{children}</span>;
};

// Section.ItemSubtitle sub-component
interface SectionItemSubtitleProps {
  children: ReactNode;
  styles: ThemeStyles;
}

const SectionItemSubtitle = ({
  children,
  styles,
}: SectionItemSubtitleProps) => {
  return <span style={styles.sectionItemSubtitle}>{children}</span>;
};

// Section.Tags sub-component
interface SectionTagsProps {
  children: ReactNode;
  styles: ThemeStyles;
}

const SectionTags = ({ children, styles }: SectionTagsProps) => {
  return <div style={styles.sectionTags}>{children}</div>;
};

// Section.Lines sub-component
interface SectionLinesProps {
  children: ReactNode;
  styles: ThemeStyles;
}

const SectionLines = ({ children, styles }: SectionLinesProps) => {
  return <ul style={styles.sectionLines}>{children}</ul>;
};

// Section.Line sub-component
interface SectionLineProps {
  children: ReactNode;
  bullet?: boolean;
  styles: ThemeStyles;
}

const SectionLine = ({
  children,
  bullet = false,
  styles,
}: SectionLineProps) => {
  const lineStyle: CSSProperties = {
    ...styles.sectionLine,
    listStyleType: bullet ? "disc" : "none",
    listStylePosition: bullet ? "outside" : "inside",
    marginLeft: bullet ? "1em" : "0",
  };

  return <li style={lineStyle}>{children}</li>;
};

// Attach sub-components to Section
Section.Title = SectionTitle;
Section.Content = SectionContent;
Section.Item = SectionItem;
Section.ItemTitle = SectionItemTitle;
Section.ItemSubtitle = SectionItemSubtitle;
Section.Tags = SectionTags;
Section.Lines = SectionLines;
Section.Line = SectionLine;

export default Section;

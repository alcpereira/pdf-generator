import type { ReactNode } from "react";
import type { ThemeStyles } from "~/themes/theme.types";

interface TagProps {
  children: ReactNode;
  styles: ThemeStyles;
}

const Tag = ({ children, styles }: TagProps) => {
  return <span style={styles.tag}>{children}</span>;
};

export default Tag;

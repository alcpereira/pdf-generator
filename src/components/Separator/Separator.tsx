import type { ThemeStyles } from "../../themes/theme.types";

interface SeparatorProps {
  styles: ThemeStyles;
  marginTop?: string;
  marginBottom?: string;
}

const Separator = ({
  styles,
  marginTop = "0",
  marginBottom = "0",
}: SeparatorProps) => {
  return (
    <div
      style={{
        ...styles.separator,
        marginTop,
        marginBottom,
      }}
    />
  );
};

export default Separator;

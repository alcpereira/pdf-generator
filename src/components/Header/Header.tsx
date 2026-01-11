import type { ThemeStyles } from "../../themes/theme.types";

interface HeaderProps {
  name: string;
  resume: string[];
  styles: ThemeStyles;
}

const Header = ({ name, resume, styles }: HeaderProps) => {
  return (
    <div style={styles.headerContainer}>
      <h1 style={styles.headerName}>{name}</h1>
      <div>
        {resume.map((line, index) => (
          <p key={index} style={styles.headerLine}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Header;

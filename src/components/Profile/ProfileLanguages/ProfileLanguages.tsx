import Title from "../../Title/Title";
import { useState } from "react";

export type Language = {
  language: string;
  abbreviation: string;
  level: string;
};

const ProfileLanguages = ({
  languages,
}: {
  languages: Language[];
  showAbbreviation?: boolean | undefined;
}) => {
  const [showAbbreviation, setShowAbbreviation] = useState(false);

  const handleAbbreviation = () => {
    setShowAbbreviation((prevState) => !prevState);
  };
  return (
    <div className="profile__block-container">
      <Title onClick={handleAbbreviation} text="Languages" />
      <div className="profile__languages-container">
        {languages.map((language, index) => {
          return (
            <div className="profile__languages-language" key={index}>
              <span className="profile__languages-abb">
                {showAbbreviation && language.abbreviation
                  ? language.abbreviation
                  : language.language}
              </span>
              <span className="profile__languages-level">{language.level}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileLanguages;

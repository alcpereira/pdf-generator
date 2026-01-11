import "./Profile.css";
import Title from "~/components/Title/Title";
import Bubble from "~/components/Bubble/Bubble";
import ProfileImage from "./ProfileImage/ProfileImage";
import ProfileLanguages from "./ProfileLanguages/ProfileLanguages";
import ProfileLink from "./ProfileLink/ProfileLink";
import {
  Language,
  TechnicalCategory,
  Education,
  Profile as ProfileType,
} from "~/types/cv.types";

type ProfileData = {
  profile: ProfileType;
  technical?: TechnicalCategory[];
  languages?: Language[];
  education?: Education[];
};

const ProfileHeader = ({
  lines,
  links,
  shouldDisplayProfileImage,
}: ProfileType) => {
  return (
    <div className="profile__header">
      {shouldDisplayProfileImage && (
        <ProfileImage circular={true} border={true} />
      )}
      <div className="profile__header__lines">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="profile__header__links">
        {links.map((link, index) => {
          return <ProfileLink key={index} {...link} />;
        })}
      </div>
    </div>
  );
};

const ProfileSkills = ({ technical }: { technical: TechnicalCategory[] }) => {
  return (
    <div className="profile__block-container">
      <Title text="Technical Skills" />
      {technical.map((tech, index) => {
        return (
          <div className="profile__skills-category" key={index}>
            <span className="profile__skills-span">{tech.category}</span>
            <div className="profile__skills-bubbles">
              {tech.bubbles.map((bubble, b_index) => (
                <Bubble key={b_index} text={bubble} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ProfileEducation = ({ education }: { education: Education[] }) => {
  return (
    <div className="profile__block-container">
      <Title text="Education" />
      <div className="profile__education-container">
        {education.map((edu, index) => {
          return (
            <div className="profile__education-element" key={index}>
              <span className="profile__education-degree">{edu.degree}</span>
              <span className="profile__education-school">{edu.school}</span>
              <span className="profile__education-location">
                {edu.location}
              </span>
              <span className="profile__education-years">{edu.years}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Profile = ({ data }: { data: ProfileData }) => {
  return (
    <div className="profile__container">
      <ProfileHeader {...data.profile} />
      {data.technical && data.technical.length > 0 && (
        <ProfileSkills technical={data.technical} />
      )}
      {data.languages && data.languages.length > 0 && (
        <ProfileLanguages languages={data.languages} showAbbreviation={false} />
      )}
      {data.education && data.education.length > 0 && (
        <ProfileEducation education={data.education} />
      )}
    </div>
  );
};

export default Profile;

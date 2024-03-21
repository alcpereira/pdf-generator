import "./Profile.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Title from "../Title/Title";
import Bubble from "../Bubble/Bubble";
import ProfileImage from "./ProfileImage/ProfileImage";

type TechnicalCategory = {
  category: string;
  bubbles: string[];
};

type Languages = {
  language: string;
  abbreviation: string;
  level: string;
};

type Education = {
  degree: string;
  school: string;
  location: string;
  years: string;
};

type Data = {
  profile: {
    lines: string[];
    linkedin: string;
    github: string;
    twitter: string;
  };
  technical: TechnicalCategory[];
  languages: Languages[];
  education: Education[];
};

const ProfileHeader = ({
  lines,
  linkedin,
  github,
  twitter,
}: Data["profile"]) => {
  return (
    <div className="profile__header">
      <ProfileImage circular={true} border={true}/>
      <div className="profile__header__lines">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="profile__header__links">
        <div className="profile__header__link">
          <FaGithub />
          <a href={`https://${github}`}>{github}</a>
        </div>
        <div className="profile__header__link">
          <FaLinkedin />
          <a href={`https://${linkedin}`}>{linkedin}</a>
        </div>
        <div className="profile__header__link">
          <FaSquareXTwitter />
          <a href={`https://${twitter}`}>{twitter}</a>
        </div>
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

const ProfileLanguages = ({ languages }: { languages: Languages[] }) => {
  return (
    <div className="profile__block-container">
      <Title text="Languages" />
      <div className="profile__languages-container">
        {languages.map((language, index) => {
          return (
            <div className="profile__languages-language" key={index}>
              <span className="profile__languages-abb">
                {language.abbreviation}
              </span>
              <span className="profile__languages-level">{language.level}</span>
            </div>
          );
        })}
      </div>
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

const Profile = ({ data }: { data: Data }) => {
  return (
    <div className="profile__container">
      <ProfileHeader {...data.profile} />
      <ProfileSkills technical={data.technical} />
      <ProfileLanguages languages={data.languages} />
      <ProfileEducation education={data.education} />
    </div>
  );
};

export default Profile;

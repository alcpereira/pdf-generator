import type { ReactNode } from "react";
import type { ThemeStyles } from "~/themes/theme.types";
import type { ProfileLinkType } from "~/types/cv.types";
import profileImage from "~/assets/profile.png";
import { FaGithub, FaHouseUser, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaBluesky } from "react-icons/fa6";

// Root Profile component
interface ProfileProps {
  children: ReactNode;
  styles: ThemeStyles;
}

const Profile = ({ children, styles }: ProfileProps) => {
  return <div style={styles.profileContainer}>{children}</div>;
};

// Profile.Image sub-component
interface ProfileImageProps {
  circular?: boolean;
  border?: boolean;
  styles: ThemeStyles;
}

const ProfileImage = ({ circular, border, styles }: ProfileImageProps) => {
  let imageStyle = { ...styles.profileImage };

  if (circular) {
    imageStyle = { ...imageStyle, ...styles.profileImageCircular };
  }

  if (border) {
    imageStyle = { ...imageStyle, ...styles.profileImageBorder };
  }

  return <img src={profileImage} alt="Profile" style={imageStyle} />;
};

// Profile.Contact sub-component
interface ProfileContactProps {
  children: ReactNode;
  styles: ThemeStyles;
}

const ProfileContact = ({ children, styles }: ProfileContactProps) => {
  return <div style={styles.profileContact}>{children}</div>;
};

// Profile.ContactLine sub-component
interface ProfileContactLineProps {
  children: ReactNode;
  styles: ThemeStyles;
}

const ProfileContactLine = ({ children, styles }: ProfileContactLineProps) => {
  return <p style={styles.profileContactLine}>{children}</p>;
};

// Profile.Links sub-component
interface ProfileLinksProps {
  children: ReactNode;
  styles?: ThemeStyles;
}

const ProfileLinks = ({ children, styles }: ProfileLinksProps) => {
  return <div style={styles?.profileLinks}>{children}</div>;
};

// Profile.Link sub-component
interface ProfileLinkProps {
  type: ProfileLinkType;
  href: string;
  children: ReactNode;
  styles: ThemeStyles;
}

const ProfileLink = ({ type, href, children, styles }: ProfileLinkProps) => {
  const getLinkIcon = (type: ProfileLinkType): ReactNode => {
    switch (type) {
      case "GitHub":
        return <FaGithub />;
      case "Twitter":
        return <FaSquareXTwitter />;
      case "LinkedIn":
        return <FaLinkedin />;
      case "Website":
        return <FaHouseUser />;
      case "Bluesky":
        return <FaBluesky />;
      default:
        return <FaHouseUser />;
    }
  };

  return (
    <a
      href={href.startsWith("http") ? href : `https://${href}`}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.profileLink}
    >
      <span style={styles.profileLinkIcon}>{getLinkIcon(type)}</span>
      <span style={styles.profileLinkText}>{children}</span>
    </a>
  );
};

// Profile.Section sub-component
interface ProfileSectionProps {
  children: ReactNode;
  styles?: ThemeStyles;
}

const ProfileSection = ({ children, styles }: ProfileSectionProps) => {
  return <div style={styles?.profileSection}>{children}</div>;
};

// Profile.SectionTitle sub-component
interface ProfileSectionTitleProps {
  children: ReactNode;
  styles: ThemeStyles;
}

const ProfileSectionTitle = ({
  children,
  styles,
}: ProfileSectionTitleProps) => {
  return <div style={styles.profileSectionTitle}>{children}</div>;
};

// Profile.Category sub-component
interface ProfileCategoryProps {
  children: ReactNode;
  styles?: ThemeStyles;
}

const ProfileCategory = ({ children, styles }: ProfileCategoryProps) => {
  return <div style={styles?.profileCategory}>{children}</div>;
};

// Profile.CategoryTitle sub-component
interface ProfileCategoryTitleProps {
  children: ReactNode;
  styles: ThemeStyles;
}

const ProfileCategoryTitle = ({
  children,
  styles,
}: ProfileCategoryTitleProps) => {
  return <span style={styles.profileCategoryTitle}>{children}</span>;
};

// Profile.Tags sub-component
interface ProfileTagsProps {
  children: ReactNode;
  styles: ThemeStyles;
}

const ProfileTags = ({ children, styles }: ProfileTagsProps) => {
  return <div style={styles.profileTags}>{children}</div>;
};

// Attach sub-components to Profile
Profile.Image = ProfileImage;
Profile.Contact = ProfileContact;
Profile.ContactLine = ProfileContactLine;
Profile.Links = ProfileLinks;
Profile.Link = ProfileLink;
Profile.Section = ProfileSection;
Profile.SectionTitle = ProfileSectionTitle;
Profile.Category = ProfileCategory;
Profile.CategoryTitle = ProfileCategoryTitle;
Profile.Tags = ProfileTags;

export default Profile;

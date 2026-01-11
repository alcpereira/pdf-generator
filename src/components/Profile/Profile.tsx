import type { ReactNode } from "react";
import type { ThemeStyles } from "~/themes/theme.types";
import type { ProfileLinkType, HttpsUrl } from "~/types/cv.types";
import profileImage from "~/assets/profile.png";
import {
  FaGithub,
  FaHouseUser,
  FaLinkedin,
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
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

/**
 * Returns the appropriate icon component for each contact type
 */
const getContactIcon = (type: string): ReactNode => {
  switch (type) {
    case "location":
      return <FaMapMarkerAlt />;
    case "nationality":
      return <FaGlobeAmericas />;
    case "phone":
      return <FaPhone />;
    case "email":
      return <FaEnvelope />;
    default:
      return null;
  }
};

/**
 * Contact field structure matching the new Profile.contact interface
 */
interface ContactField {
  value: string;
  display: boolean;
  showIcon?: boolean;
}

/**
 * Individual contact information field
 * Can be rendered as plain text or clickable link
 * Theme controls layout (vertical lines, horizontal inline, grid, etc.)
 */
interface ProfileContactInfoProps {
  /** The contact field with value and display settings */
  field: ContactField;
  /** Type of contact information */
  type: "location" | "nationality" | "phone" | "email";
  /** Default value for showIcon if not specified in field */
  defaultShowIcon?: boolean;
  /** Theme styles */
  styles: ThemeStyles;
}

const ProfileContactInfo = ({
  field,
  type,
  defaultShowIcon = false,
  styles,
}: ProfileContactInfoProps) => {
  // Early return if field is set to not display
  if (!field.display) {
    return null;
  }

  // Use field's showIcon if specified, otherwise use default from theme
  const shouldShowIcon = field.showIcon ?? defaultShowIcon;
  const icon = shouldShowIcon ? getContactIcon(type) : null;

  // Build href for interactive fields
  let href: string | undefined;
  if (type === "phone") {
    // Sanitize phone for tel: link (remove spaces, dashes, parentheses)
    // Display: "+1 234 567 8900" → Href: "tel:+12345678900"
    // eslint-disable-next-line no-useless-escape
    const sanitized = field.value.replace(/[\s\-\(\)]/g, "");
    href = `tel:${sanitized}`;
  } else if (type === "email") {
    href = `mailto:${field.value}`;
  }

  const content = (
    <>
      {icon && <span style={styles.profileContactIcon}>{icon}</span>}
      <span>{field.value}</span>
    </>
  );

  // Render as link if href exists (email/phone)
  if (href) {
    return (
      <a href={href} style={styles.profileContactInfoLink}>
        {content}
      </a>
    );
  }

  // Otherwise render as plain text (location/nationality)
  return <p style={styles.profileContactInfo}>{content}</p>;
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
  url: HttpsUrl;
  label?: string;
  showIcon?: boolean;
  /** Default value for showIcon if not specified */
  defaultShowIcon?: boolean;
  styles: ThemeStyles;
}

const ProfileLink = ({
  type,
  url,
  label,
  showIcon,
  defaultShowIcon = false,
  styles,
}: ProfileLinkProps) => {
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

  // Use showIcon if specified, otherwise use default from theme
  const shouldShowIcon = showIcon ?? defaultShowIcon;

  // Use label if provided, otherwise use type
  const displayText = label || type;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.profileLink}
    >
      {shouldShowIcon && (
        <span style={styles.profileLinkIcon}>{getLinkIcon(type)}</span>
      )}
      <span style={styles.profileLinkText}>{displayText}</span>
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
Profile.ContactInfo = ProfileContactInfo;
Profile.Links = ProfileLinks;
Profile.Link = ProfileLink;
Profile.Section = ProfileSection;
Profile.SectionTitle = ProfileSectionTitle;
Profile.Category = ProfileCategory;
Profile.CategoryTitle = ProfileCategoryTitle;
Profile.Tags = ProfileTags;

export default Profile;

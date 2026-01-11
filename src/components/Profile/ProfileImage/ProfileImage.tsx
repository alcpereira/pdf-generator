import useProfilePicture from "~/hooks/useProfilePicture";
import clsx from "clsx";
import "./ProfileImage.css";

type ImageOptions = {
  circular?: boolean;
  border?: boolean;
};

const ProfileImage = (options: ImageOptions = {}) => {
  const profilePicture = useProfilePicture();

  const profilePictureClasses = clsx(
    "profile__header__image",
    { profile__header__image__circular: options.circular },
    { profile__header__image__border: options.border },
  );

  return (
    <>
      {profilePicture && (
        <div className={profilePictureClasses}>
          <img src={profilePicture} alt="Profile" />
        </div>
      )}
    </>
  );
};

export default ProfileImage;

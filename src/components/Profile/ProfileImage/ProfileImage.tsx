import useProfilePicture from "../../../hooks/useProfilePicture";
import clsx from "clsx";
import './ProfileImage.css';

type ImageOptions = {
  circular?: boolean;
  border?: boolean;
};

const ProfileImage = (options: ImageOptions = {}) => {
  const profilePicture = useProfilePicture(); // Use the hook to get the profile picture
  const classes = clsx(
    "profile__header__image",
    { profile__header__image__circular: options.circular },
    { profile__header__image__border: options.border }
  );

  return (
    <>
      {profilePicture ? (
        <div className={classes}>
          <img src={profilePicture} alt="Profile" />
        </div>
      ) : <></>}
    </>
  );
};

export default ProfileImage;

import { useState, useEffect } from 'react';

const useProfilePicture = (): string | null => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  useEffect(() => {
    const loadProfilePicture = async () => {
      const extensions = ['png', 'jpeg', 'jpg', 'gif', 'webp', 'svg'];
      for (const extension of extensions) {
        try {
          const module = await import(`../assets/profile.${extension}`);
          setProfilePicture(module.default);
          break;
        } catch (error) {
          // Ignore error and try next extension
        }
      }
    };

    loadProfilePicture();
  }, []);

  return profilePicture;
};

export default useProfilePicture;

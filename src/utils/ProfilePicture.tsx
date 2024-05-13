import * as React from 'react';

interface ProfilePictureProps {
    className?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ className }: ProfilePictureProps) => {
  return (
    <div className={className} style={{
      width: '250px', 
      height: '250px',
      borderRadius: '50%',
      overflow: 'hidden',
      margin: '0 auto',
      marginTop: '5px'
    }}>
      <img src="/img/profilepfp.jpg" alt="Profile Picture" style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }} />
    </div>
  );
};

export default ProfilePicture;

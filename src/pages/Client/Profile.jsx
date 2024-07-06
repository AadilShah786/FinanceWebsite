// Profile.js
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';

const Profile = () => {
  const { isLoggedIn, userProfileImage, userData, handleLogout } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <div>Please log in.</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      {userProfileImage && <img src={userProfileImage} alt="Profile" />}
      {userData && (
        <div>
          <p>Name: {userData.displayName}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Profile;

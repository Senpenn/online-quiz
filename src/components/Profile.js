import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: localStorage.getItem('username') || 'User123',
    email: localStorage.getItem('email') || 'user@example.com',
    quizzesCompleted: 5,
    totalScore: 350,
    profilePicture: localStorage.getItem('profilePicture') || 'https://via.placeholder.com/150',
  });

  const [newData, setNewData] = useState(userData);

  // Handle toggling edit mode and saving data
  const handleEditToggle = () => {
    if (isEditing) {
      setUserData(newData);
      localStorage.setItem('username', newData.username);
      localStorage.setItem('email', newData.email);
      localStorage.setItem('profilePicture', newData.profilePicture);
    }
    setIsEditing(!isEditing);
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewData({ ...newData, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-picture">
        <img
          src={userData.profilePicture}
          alt="Profile"
          className="profile-image"
        />
        {isEditing && (
          <label htmlFor="file-upload" className="edit-btn">
            Change Picture
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-upload-input"
            />
          </label>
        )}
      </div>
      <p className="profile-greeting">Welcome, {userData.username}!</p>
      <div className="profile-details">
        <div className="profile-field">
          <label>Username:</label>
          {isEditing ? (
            <input
              type="text"
              value={newData.username}
              onChange={(e) =>
                setNewData({ ...newData, username: e.target.value })
              }
            />
          ) : (
            <p>{userData.username}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              value={newData.email}
              onChange={(e) =>
                setNewData({ ...newData, email: e.target.value })
              }
            />
          ) : (
            <p>{userData.email}</p>
          )}
        </div>
        <div className="profile-stats">
          <p>Quizzes Completed: {userData.quizzesCompleted}</p>
          <p>Total Score: {userData.totalScore}</p>
        </div>
      </div>
      <button onClick={handleEditToggle} className="save-btn">
        {isEditing ? 'Save Changes' : 'Edit Profile'}
      </button>
    </div>
  );
};

export default Profile;

import React from 'react';
import './styles.css'; // Import your CSS file

const Logout = () => {
  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?'); // Show confirmation dialog

    if (confirmLogout) {
      localStorage.clear(); // Clear local storage on logout
      window.location.href = '/'; // Redirect to homepage
    }
  };

  return (
    <div className="logout-container">
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Logout;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Registration = ({ setIsRegistered }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate hook

  const handleRegister = () => {
    // Here, you would normally send the data to a backend
    // But for now, we're just simulating it by setting the registration status
    if (username && password) {
      // Store registration status in local storage (optional)
      localStorage.setItem('isRegistered', 'true');
      setIsRegistered(true);

      // Redirect to the home page after registration
      navigate('/'); // Redirect to home
    }
  };

  return (
    <div className="registration-container">
      <h2 className="registration-title">Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="registration-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="registration-input"
      />
      <button onClick={handleRegister} className="registration-btn">
        Register
      </button>
    </div>
  );
};

export default Registration;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './components/Home';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';
import Registration from './components/Registration';
import Leaderboard from './components/Leaderboard';
import Results from './components/Results';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Help from './components/Help';
import Logout from './components/Logout';
import './style.css'; // Importing the styles.css file

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  // Check registration status in localStorage
  useEffect(() => {
    const registered = localStorage.getItem('isRegistered');
    if (registered) {
      setIsRegistered(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isRegistered');
    setIsRegistered(false);
    window.location.href = '/'; // Redirect to homepage after logout
  };

  return (
    <Router>
      <div className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/quizzes" className="nav-link">Quizzes</Link>
        {isRegistered ? (
          <>
            <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
            <Link to="/results" className="nav-link">Results</Link>
            <Link to="/settings" className="nav-link">Settings</Link>
            <Link to="/help" className="nav-link">Help</Link>
            <button onClick={handleLogout} className="nav-link">Logout</button>
          </>
        ) : (
          <Link to="/register" className="nav-link">Register</Link>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={isRegistered ? <QuizList /> : <Navigate to="/register" />} />
        <Route path="/quiz/:id" element={isRegistered ? <Quiz /> : <Navigate to="/register" />} />
        <Route path="/register" element={<Registration setIsRegistered={setIsRegistered} />} />
        <Route path="/leaderboard" element={isRegistered ? <Leaderboard /> : <Navigate to="/register" />} />
        <Route path="/results" element={isRegistered ? <Results /> : <Navigate to="/register" />} />
        <Route path="/profile" element={isRegistered ? <Profile /> : <Navigate to="/register" />} />
        <Route path="/settings" element={isRegistered ? <Settings /> : <Navigate to="/register" />} />
        <Route path="/help" element={<Help />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all route to redirect to Home */}
      </Routes>
    </Router>
  );
}

export default App;

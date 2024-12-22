import React from 'react';
import { useNavigate } from 'react-router-dom';  // Correct import
import './styles.css';  // Importing styles.css

function Home() {
  const navigate = useNavigate();  // Using useNavigate hook

  const handleStartQuiz = () => {
    const isRegistered = localStorage.getItem('isRegistered');
    if (isRegistered) {
      navigate('/quizzes');  // Redirect to Quiz List
    } else {
      navigate('/register');  // Redirect to Registration
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Quiz App</h1>
      <p className="home-description">Test your knowledge on various topics!</p>
      <button onClick={handleStartQuiz} className="start-quiz-button">
        Start Quiz
      </button>
    </div>
  );
}

export default Home;

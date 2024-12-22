import React from 'react';

const Leaderboard = () => {
  const topScores = JSON.parse(localStorage.getItem('topScores')) || []; // Retrieve scores from localStorage

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {topScores.map((score, index) => (
          <li key={index}>{score.username} - {score.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;

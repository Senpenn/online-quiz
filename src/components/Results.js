import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.heading}>Quiz Results</h1>
                <p style={styles.scoreText}>
                    Your Score: <span style={styles.scoreHighlight}>{score}/{totalQuestions}</span>
                </p>
                <p style={styles.message}>
                    {score / totalQuestions >= 0.7
                        ? "Great job! Keep it up! 🎉"
                        : "Don't worry, you can do better next time! 🌟"}
                </p>
                <button style={styles.button} onClick={() => navigate('/quizzes')}>
                    Try Again
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFC1E3, #FF8EC7)', // Pink gradient
        padding: '20px',
        boxSizing: 'border-box', // Ensure padding is included in dimensions
        margin: 0, // Remove any default margin from the body
    },
    card: {
        background: '#fff',
        borderRadius: '15px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        padding: '30px',
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%',
    },
    heading: {
        color: '#FF4081',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: '700',
        fontSize: '28px',
        marginBottom: '20px',
    },
    scoreText: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: '18px',
        marginBottom: '10px',
    },
    scoreHighlight: {
        color: '#FF4081',
        fontWeight: 'bold',
    },
    message: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: '16px',
        color: '#757575',
        marginBottom: '20px',
    },
    button: {
        background: '#FF4081',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default Result;

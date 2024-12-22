import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import quizData from "../data/quizzes.json";
import "./styles.css";

const Quiz = () => {
  const { id } = useParams();
  const quiz = quizData.find((q) => q.id === parseInt(id));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = useCallback(
    (answer) => {
      setAnswers((prevAnswers) => [...prevAnswers, answer]);
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    },
    [currentQuestion, quiz.questions.length]
  );

  useEffect(() => {
    console.log("Quiz component loaded");
  }, []);

  if (!quiz) {
    return <p>Loading quiz...</p>;
  }

  if (showResults) {
    const correctAnswers = quiz.questions.filter(
      (q, i) => q.answer === answers[i]
    ).length;
    return (
      <div className="results">
        <h1>Results</h1>
        <p>
          You got {correctAnswers} out of {quiz.questions.length} correct!
        </p>
      </div>
    );
  }

  return (
    <div className="quiz">
      <h1>{quiz.title}</h1>
      <h2>{quiz.questions[currentQuestion].question}</h2>
      <ul className="options">
        {quiz.questions[currentQuestion].options.map((option, index) => (
          <li key={index} onClick={() => handleAnswer(option)} className="option">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;

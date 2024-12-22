import React, { useState } from 'react'; 
import { categories } from './categories'; 
import { Link } from 'react-router-dom'; // Import Link for navigation 
import './styles.css'; 

const quizzes = [
  { id: 1, name: 'Physics Basics', category: 'Science' },
  { id: 2, name: 'World Wars', category: 'History' },
  { id: 3, name: 'JavaScript Essentials', category: 'Technology' },
  // Add more quizzes as needed
];

function QuizList() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter quizzes by selected category
  const filteredQuizzes = selectedCategory
    ? quizzes.filter((quiz) => quiz.category === selectedCategory)
    : quizzes;

  return (
    <div className="quiz-list-container">
      <h2>Select a Category</h2>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-button ${selectedCategory === category.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <h2>{selectedCategory ? `${selectedCategory} Quizzes` : 'All Quizzes'}</h2>
      <div className="quizzes">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz) => (
            <div key={quiz.id} className="quiz-item">
              <h3>{quiz.name}</h3>
              <Link to={`/quiz/${quiz.id}`} className="btn">
                Take Quiz
              </Link>
            </div>
          ))
        ) : (
          <p>No quizzes available for this category.</p>
        )}
      </div>
    </div>
  );
}

export default QuizList;

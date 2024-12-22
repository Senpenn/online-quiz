import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './styles.css'; // Import CSS file for styling

// Exporting categories array
export const categories = [
  { id: 1, name: 'Science', path: '/quizzes/science' },
  { id: 2, name: 'History', path: '/quizzes/history' },
  { id: 3, name: 'Math', path: '/quizzes/math' },
  { id: 4, name: 'Technology', path: '/quizzes/technology' },
];

// Categories component
const Categories = () => {
  return (
    <div className="categories-section">
      <h2 className="categories-title">Explore Quiz Categories</h2>
      <p className="categories-description">
        Choose a category to start exploring quizzes tailored to your interests!
      </p>
      <ul className="categories-list">
        {categories.map((category) => (
          <li key={category.id} className="category-item">
            <Link to={category.path} className="category-link">
              <div className="category-card">
                <span className="category-name">{category.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

import React from 'react';
import './styles.css'; // Add custom styling for better layout and visuals

const Help = () => {
  return (
    <div className="help-container">
      <h2>Help & FAQs</h2>
      <div className="faq-section">
        <h3>General</h3>
        <ul>
          <li>
            <strong>How do I start the quiz?</strong>
            <p>Navigate to the "Quizzes" section from the main menu and select a quiz to get started.</p>
          </li>
          <li>
            <strong>How do I view my scores?</strong>
            <p>You can view your scores in the "Results" section from the main menu.</p>
          </li>
        </ul>
      </div>

      <div className="faq-section">
        <h3>Settings</h3>
        <ul>
          <li>
            <strong>How do I change the quiz difficulty?</strong>
            <p>Go to the "Settings" page and select your preferred difficulty level.</p>
          </li>
          <li>
            <strong>How do I reset the settings?</strong>
            <p>Click the "Reset to Default" button in the "Settings" page.</p>
          </li>
        </ul>
      </div>

      <div className="faq-section">
        <h3>Account</h3>
        <ul>
          <li>
            <strong>How do I register?</strong>
            <p>Click the "Register" option from the main menu and fill out the registration form.</p>
          </li>
          <li>
            <strong>How do I log out?</strong>
            <p>Click the "Logout" button from the main menu to sign out of your account.</p>
          </li>
        </ul>
      </div>

      <div className="faq-section">
        <h3>Technical</h3>
        <ul>
          <li>
            <strong>The app is not working properly. What should I do?</strong>
            <p>Try refreshing the page or clearing your browser's cache. If the issue persists, contact support.</p>
          </li>
          <li>
            <strong>Can I use this app on my mobile device?</strong>
            <p>Yes, this app is mobile-friendly and works on most modern browsers.</p>
          </li>
        </ul>
      </div>

      <div className="contact-section">
        <h3>Contact Support</h3>
        <p>If you have further questions, please reach out to us at <a href="mailto:support@quizapp.com">support@quizapp.com</a>.</p>
      </div>
    </div>
  );
};

export default Help;

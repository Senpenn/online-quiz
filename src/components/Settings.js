import React, { useState } from 'react';
import './styles.css'; // Import the CSS file

const Settings = () => {
  const [settings, setSettings] = useState({
    difficulty: localStorage.getItem('quizDifficulty') || 'easy',
    theme: localStorage.getItem('quizTheme') || 'light',
    timer: localStorage.getItem('quizTimer') || 'off',
    soundEffects: JSON.parse(localStorage.getItem('quizSoundEffects') || 'false'),
  });

  const [showModal, setShowModal] = useState(false); // State for confirmation modal

  const handleSettingsChange = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('quizSettings', JSON.stringify(newSettings));
  };

  const resetSettings = () => {
    const defaultSettings = {
      difficulty: 'easy',
      theme: 'light',
      timer: 'off',
      soundEffects: false,
    };
    setSettings(defaultSettings);
    localStorage.setItem('quizSettings', JSON.stringify(defaultSettings));
    setShowModal(false);
  };

  const exportSettings = () => {
    const dataStr = JSON.stringify(settings);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'settings.json';
    a.click();
  };

  const importSettings = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const importedSettings = JSON.parse(e.target.result);
        setSettings(importedSettings);
        localStorage.setItem('quizSettings', JSON.stringify(importedSettings));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-card">
        <h2 className="settings-heading">Settings</h2>

        {/* Difficulty Setting */}
        <div className="settings-form-group">
          <label className="settings-label">
            Difficulty:
            <select
              value={settings.difficulty}
              onChange={(e) => handleSettingsChange('difficulty', e.target.value)}
              className="settings-select"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </div>

        {/* Theme Setting */}
        <div className="settings-form-group">
          <label className="settings-label">
            Theme:
            <select
              value={settings.theme}
              onChange={(e) => handleSettingsChange('theme', e.target.value)}
              className="settings-select"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </div>

        {/* Timer Setting */}
        <div className="settings-form-group">
          <label className="settings-label">
            Timer:
            <select
              value={settings.timer}
              onChange={(e) => handleSettingsChange('timer', e.target.value)}
              className="settings-select"
            >
              <option value="off">Off</option>
              <option value="5">5 Minutes</option>
              <option value="10">10 Minutes</option>
            </select>
          </label>
        </div>

        {/* Sound Effects Setting */}
        <div className="settings-form-group">
          <label className="settings-label">
            Sound Effects:
            <input
              type="checkbox"
              checked={settings.soundEffects}
              onChange={(e) => handleSettingsChange('soundEffects', e.target.checked)}
              className="settings-checkbox"
            />
          </label>
        </div>

        {/* Export and Import Settings */}
        <div className="settings-button-group">
          <button className="settings-export-button" onClick={exportSettings}>
            Export Settings
          </button>
          <input
            type="file"
            accept="application/json"
            onChange={importSettings}
            className="settings-import-input"
          />
        </div>

        {/* Save and Reset Buttons */}
        <div className="settings-button-group">
          <button className="settings-save-button" onClick={() => alert('Settings saved!')}>
            Save Settings
          </button>
          <button
            className="settings-reset-button"
            onClick={() => setShowModal(true)} // Show confirmation modal
          >
            Reset to Default
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="settings-modal">
          <div className="settings-modal-content">
            <p>Are you sure you want to reset all settings?</p>
            <button className="settings-confirm-button" onClick={resetSettings}>
              Yes, Reset
            </button>
            <button className="settings-cancel-button" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;

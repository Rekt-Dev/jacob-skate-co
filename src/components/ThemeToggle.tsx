import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    document.body.classList.remove('light');
  }, []);

  const toggle = () => {
    setIsLight(prev => {
      const next = !prev;
      document.body.classList.toggle('light', next);
      return next;
    });
  };

  return (
    <button className="theme-toggle-button" onClick={toggle} aria-label="Toggle theme">
      {isLight ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;

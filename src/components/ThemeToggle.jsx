import React from 'react';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? (
        <i className="fas fa-sun"></i>
      ) : (
        <i className="fas fa-moon"></i>
      )}
      <style jsx>{`
        .theme-toggle {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background-color: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 100;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        
        .theme-toggle:hover {
          transform: scale(1.1);
          background-color: var(--secondary);
        }
        
        .theme-toggle i {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default ThemeToggle;

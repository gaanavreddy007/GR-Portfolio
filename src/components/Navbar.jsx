import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark-theme' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="logo">
          <span>Gaanav</span>Reddy
        </a>
        <div className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <div className="hamburger"></div>
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#education" onClick={() => setMobileMenuOpen(false)}>Education</a></li>
          <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          padding: 20px 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        .navbar.scrolled {
          background-color: ${darkMode ? '#1a202c' : 'white'};
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          padding: 15px 0;
        }
        
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 24px;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }
        
        .logo span {
          color: var(--secondary);
        }
        
        .nav-links {
          display: flex;
          list-style: none;
        }
        
        .nav-links li {
          margin-left: 30px;
        }
        
        .nav-links a {
          color: ${darkMode ? 'white' : 'var(--dark)'};
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: var(--transition);
        }
        
        .nav-links a:hover {
          color: var(--primary);
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--primary);
          transition: var(--transition);
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .menu-toggle {
          display: none;
          cursor: pointer;
        }
        
        .hamburger {
          width: 30px;
          height: 3px;
          background-color: var(--primary);
          position: relative;
          transition: all 0.3s ease;
        }
        
        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 30px;
          height: 3px;
          background-color: var(--primary);
          transition: all 0.3s ease;
        }
        
        .hamburger::before {
          transform: translateY(-10px);
        }
        
        .hamburger::after {
          transform: translateY(10px);
        }
        
        .menu-toggle.active .hamburger {
          background-color: transparent;
        }
        
        .menu-toggle.active .hamburger::before {
          transform: rotate(45deg);
        }
        
        .menu-toggle.active .hamburger::after {
          transform: rotate(-45deg);
        }
        
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }
          
          .nav-links {
            position: fixed;
            top: 80px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 80px);
            background-color: ${darkMode ? '#1a202c' : 'white'};
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease;
          }
          
          .nav-links.active {
            left: 0;
          }
          
          .nav-links li {
            margin: 20px 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
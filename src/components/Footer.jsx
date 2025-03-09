import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">
              <span>Gaanav</span>Reddy
            </a>
          </div>
          <div className="footer-social">
            <a href="https://linkedin.com/in/gaanav-reddy-9901a824a" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gaanavaditya Reddy. All Rights Reserved.</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: 50px 0 20px;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        
        .footer-logo a {
          font-size: 24px;
          font-weight: 700;
          color: white;
          text-decoration: none;
        }
        
        .footer-logo span {
          opacity: 0.8;
        }
        
        .footer-social {
          display: flex;
          gap: 15px;
        }
        
        .footer-social a {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          transition: var(--transition);
        }
        
        .footer-social a:hover {
          background: white;
          color: var(--primary);
          transform: translateY(-5px);
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

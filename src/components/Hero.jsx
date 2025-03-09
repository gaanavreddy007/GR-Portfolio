import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    const cta = document.querySelector('.hero-cta');
    
    title.classList.add('fade-in');
    
    setTimeout(() => {
      subtitle.classList.add('fade-in');
    }, 400);
    
    setTimeout(() => {
      cta.classList.add('fade-in');
    }, 800);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Gaanavaditya Reddy</h1>
          <p className="hero-subtitle">Computer Science Student & Tech Enthusiast</p>
          <div className="hero-cta">
            <a href="#contact" className="btn">Get In Touch</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="shape"></div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          width: 50%;
          height: 100%;
          top: 0;
          right: 0;
          background: rgba(74, 108, 247, 0.06);
          clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        
        .hero-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .hero-content {
          width: 60%;
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 20px;
          opacity: 0;
          background: linear-gradient(to right, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 40px;
          opacity: 0;
        }
        
        .hero-cta {
          opacity: 0;
          display: flex;
          gap: 20px;
        }
        
        .btn-outline {
          background: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);
        }
        
        .btn-outline:hover {
          background: var(--primary);
          color: white;
        }
        
        .hero-image {
          position: relative;
          width: 40%;
          display: flex;
          justify-content: center;
        }
        
        .shape {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morphShape 10s infinite ease-in-out;
        }
        
        @keyframes morphShape {
          0% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
          }
          50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
          }
          75% {
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
          }
          100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
        }
        
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
          }
          
          .hero-content, .hero-image {
            width: 100%;
          }
          
          .hero-image {
            margin-bottom: 40px;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-cta {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
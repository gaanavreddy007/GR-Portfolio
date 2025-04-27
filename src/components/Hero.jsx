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
          <img src="/profile.jpg" alt="Gaanavaditya Reddy" className="hero-photo" />
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
          align-items: center;
          min-height: 300px;
        }
        
        .hero-photo {
          width: 260px;
          height: 260px;
          object-fit: cover;
          background-color: #fff;
          padding: 8px;
          border-radius: 50%;
          box-shadow: 0 8px 32px 0 rgba(74, 108, 247, 0.25);
          border: 6px solid var(--primary);
          background: var(--background);
          transition: box-shadow 0.3s, transform 0.3s;
          display: block;
          margin: 0 auto;
          filter: drop-shadow(0 2px 8px rgba(74, 108, 247, 0.10));
          object-position: 60% 0%;
        }
        
        .hero-photo:hover {
          box-shadow: 0 12px 40px 0 rgba(74, 108, 247, 0.35);
          transform: scale(1.04);
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
            min-height: 180px;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-cta {
            justify-content: center;
          }
          
          .hero-photo {
            width: 160px;
            height: 160px;
            margin-bottom: 0;
            padding: 4px;
            object-position: 60% 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
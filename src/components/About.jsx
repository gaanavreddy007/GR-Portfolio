import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const content = document.querySelector('.about-content');
          const image = document.querySelector('.about-image');
          
          content.classList.add('slide-in-left');
          image.classList.add('slide-in-right');
          
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-container">
          <div className="about-content">
            <h3>Who am I?</h3>
            <p>
              I'm a driven and technically adept 6th semester Computer Science student at Presidency University specialized in DevOps with proven experience in software development, IoT, and web technologies.
            </p>
            <p>
              I'm passionate about building impactful projects and contributing to innovative solutions. Currently seeking opportunities to gain professional experience and deliver value in real-world applications.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span>Name:</span>
                <p>Gaanavaditya Reddy</p>
              </div>
              <div className="info-item">
                <span>Email:</span>
                <p>gaanavreddy7@gmail.com</p>
              </div>
              <div className="info-item">
                <span>Phone:</span>
                <p>+91 9739314959</p>
              </div>
              <div className="info-item">
                <span>Location:</span>
                <p>Bangalore - 560064</p>
              </div>
            </div>
            <div className="about-cta">
              <a href="#contact" className="btn">Contact Me</a>
              <a href="https://linkedin.com/in/gaanav-reddy-9901a824a" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              {/* Replaced blob with actual photo */}
              <div className="photo-frame">
              <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Gaanavaditya Reddy" className="profile-photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-container {
          display: flex;
          align-items: center;
          gap: 60px;
        }
        
        .about-content, .about-image {
          width: 50%;
          opacity: 0;
        }
        
        .about-content h3 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: var(--primary);
        }
        
        .about-content p {
          margin-bottom: 20px;
          font-size: 1.1rem;
        }
        
        .about-info {
          margin: 30px 0;
        }
        
        .info-item {
          display: flex;
          margin-bottom: 15px;
        }
        
        .info-item span {
          min-width: 120px;
          font-weight: 600;
          color: var(--primary);
        }
        
        .about-cta {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }
        
        .about-cta i {
          margin-right: 8px;
        }
        
        .image-container {
          position: relative;
          width: 100%;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .photo-frame {
          width: 300px;
          height: 500px;
          border-radius: 20px;
          padding: 10px;
          background: linear-gradient(-45deg, var(--primary), var(--secondary));
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          transition: transform 0.3s ease;
        }
        
        .photo-frame:hover .profile-photo {
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .about-container {
            flex-direction: column-reverse;
          }
          
          .about-content, .about-image {
            width: 100%;
          }
          
          .image-container {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
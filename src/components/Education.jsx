import React, { useEffect, useRef } from 'react';

const Education = () => {
  const sectionRef = useRef(null);
  
  const education = [
    {
      institution: 'Presidency University',
      degree: 'B.Tech in Computer Science',
      period: '2022 - Present',
      score: 'CGPA - 7.87',
      location: 'Bangalore, India'
    },
    {
      institution: 'Narayana PU College',
      degree: 'XII (Intermediate)',
      period: '2020 - 2022',
      score: '84%',
      location: 'Bangalore, India'
    },
    {
      institution: 'Delhi Public School',
      degree: 'X STD',
      period: '2019 - 2020',
      score: '81.6%',
      location: 'Bangalore, India'
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const timeline = document.querySelectorAll('.timeline-item');
          
          timeline.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('fade-in');
            }, index * 300);
          });
          
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
    <section id="education" className="education" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          </div>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{edu.institution}</h3>
                <h4>{edu.degree}</h4>
                <p><i className="fas fa-calendar-alt"></i> {edu.period}</p>
                <p><i className="fas fa-graduation-cap"></i> {edu.score}</p>
                <p><i className="fas fa-map-marker-alt"></i> {edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .timeline {
          position: relative;
          max-width: 700px;
          margin: 0 auto;
          padding: 30px 0;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          height: 100%;
          width: 3px;
          background: var(--primary);
          left: 50px;
          top: 0;
        }
        
        .timeline-item {
          padding: 30px 0 30px 100px;
          position: relative;
          opacity: 0;
        }
        
        .timeline-dot {
          width: 20px;
          height: 20px;
          background: var(--primary);
          border-radius: 50%;
          position: absolute;
          left: 41px;
          top: 35px;
          box-shadow: 0 0 0 5px rgba(74, 108, 247, 0.2);
        }
        
        .timeline-content {
          background: var(--card-bg-light);
          border-radius: 15px;
          padding: 30px;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }
        
        .dark-theme .timeline-content {
          background: var(--card-bg-dark);
        }
        
        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        
        .timeline-content h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: var(--primary);
        }
        
        .timeline-content h4 {
          font-size: 1.2rem;
          margin-bottom: 15px;
        }
        
        .timeline-content p {
          margin-bottom: 10px;
        }
        
        .timeline-content i {
          color: var(--primary);
          margin-right: 10px;
        }
      `}</style>
    </section>
  );
};

export default Education;

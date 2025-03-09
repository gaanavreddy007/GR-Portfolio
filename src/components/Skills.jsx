import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef(null);
  
  const skills = [
    { name: 'React', icon: 'fab fa-react' },  // Added React
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'C++', icon: 'fas fa-code' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Arduino', icon: 'fas fa-microchip' },
    { name: 'Raspberry Pi', icon: 'fas fa-server' },
    { name: 'Pandas', icon: 'fas fa-table' },
    { name: 'NumPy', icon: 'fas fa-calculator' },
    { name: 'Seaborn', icon: 'fas fa-chart-bar' },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const skillCards = document.querySelectorAll('.skill-card');
          
          skillCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('fade-in');
            }, index * 100);
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
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <i className={`${skill.icon} skill-icon`}></i>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .skills-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        
        .skill-card {
          background: var(--card-bg-light);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: var(--shadow);
          transition: var(--transition);
          opacity: 0;
        }
        
        .dark-theme .skill-card {
          background: var(--card-bg-dark);
        }
        
        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .skill-card i {
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 15px;
        }
        
        .skill-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
        }
        
        @media (max-width: 992px) {
          .skills-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .skills-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .skills-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
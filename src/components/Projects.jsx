import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      title: 'Smart Watch for Elderly Persons',
      description: 'Designed an energy-efficient heart rate monitoring system using Arduino Nano with real-time data logging to assist caregivers.',
      tech: ['Arduino', 'IoT', 'Sensors'],
      period: '2022 - 2023',
      type: 'Group Project',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Government Asset Management App',
      description: 'Built a web app for efficient government asset tracking with user and admin roles using HTML, JavaScript, CSS (Frontend), PHP (Backend), and Raspberry Pi for deployment.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Raspberry Pi'],
      period: '2022 - 2023',
      type: 'Group Project',
      icon: 'fas fa-tasks'
    },
    {
      title: 'Smart Car using RFID Sensor',
      description: 'Engineered an RFID-based locking system for vehicle security and automation.',
      tech: ['RFID', 'Arduino', 'IoT'],
      period: '2016 - 2017',
      type: 'Individual Project',
      icon: 'fas fa-car'
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const projectCards = document.querySelectorAll('.project-card');
          
          projectCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('fade-in');
            }, index * 200);
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
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <h3>{project.title}</h3>
              <span className="project-type">{project.type}</span>
              <p className="project-period"><i className="fas fa-calendar-alt"></i> {project.period}</p>
              <div className={`project-details ${activeProject === index ? 'show' : ''}`}>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .projects-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        
        .project-card {
          background: var(--card-bg-light);
          border-radius: 15px;
          padding: 30px;
          box-shadow: var(--shadow);
          transition: var(--transition);
          position: relative;
          overflow: hidden;
          height: 300px;
          opacity: 0;
        }
        
        .dark-theme .project-card {
          background: var(--card-bg-dark);
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .project-icon {
          width: 60px;
          height: 60px;
          background: rgba(74, 108, 247, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .project-icon i {
          font-size: 24px;
          color: var(--primary);
        }
        
        .project-card h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
        }
        
        .project-type {
          display: inline-block;
          padding: 5px 10px;
          background: rgba(74, 108, 247, 0.1);
          color: var(--primary);
          border-radius: 20px;
          font-size: 0.8rem;
          margin-bottom: 15px;
        }
        
        .project-period {
          font-size: 0.9rem;
          margin-bottom: 20px;
        }
        
        .project-period i {
          margin-right: 5px;
          color: var(--primary);
        }
        
        .project-details {
          position: absolute;
          bottom: -100%;
          left: 0;
          width: 100%;
          background: linear-gradient(to top, var(--primary), transparent);
          padding: 30px;
          border-radius: 0 0 15px 15px;
          transition: bottom 0.3s ease;
        }
        
        .project-details.show {
          bottom: 0;
        }
        
        .project-details p {
          color: white;
          margin-bottom: 15px;
        }
        
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .tech-tag {
          padding: 5px 10px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 20px;
          font-size: 0.8rem;
        }
        
        @media (max-width: 992px) {
          .projects-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .projects-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

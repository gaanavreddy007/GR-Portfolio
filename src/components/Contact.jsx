import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    console.log('Form data:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const contactInfo = document.querySelector('.contact-info');
          const contactForm = document.querySelector('.contact-form');
          
          contactInfo.classList.add('slide-in-left');
          contactForm.classList.add('slide-in-right');
          
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
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any inquiries or opportunities!</p>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>gaanavreddy7@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+91 9739314959</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>Bangalore - 560064, India</p>
              </div>
            </div>
            <div className="social-links">
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
          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn">
                {formSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-container {
          display: flex;
          gap: 50px;
          align-items: stretch;
        }
        
        .contact-info, .contact-form {
          width: 50%;
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100%;
        }
        
        .contact-info {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          padding: 40px;
          border-radius: 15px;
          color: white;
          box-shadow: var(--shadow);
        }
        
        .contact-info h3 {
          font-size: 1.8rem;
          margin-bottom: 20px;
        }
        
        .contact-info > p {
          margin-bottom: 30px;
          font-size: 1.1rem;
        }
        
        .info-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 25px;
        }
        
        .info-item i {
          font-size: 1.5rem;
          margin-right: 15px;
          margin-top: 5px;
        }
        
        .info-item h4 {
          font-size: 1.1rem;
          margin-bottom: 5px;
        }
        
        .social-links {
          display: flex;
          margin-top: 30px;
          gap: 15px;
        }
        
        .social-links a {
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
        
        .social-links a:hover {
          background: white;
          color: var(--primary);
          transform: translateY(-5px);
        }
        
        .contact-form {
          background: var(--card-bg-light);
          padding: 40px;
          border-radius: 15px;
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100%;
        }
        
        .dark-theme .contact-form {
          background: var(--card-bg-dark);
        }
        
        .contact-form h3 {
          font-size: 1.8rem;
          margin-bottom: 30px;
          color: var(--primary);
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 15px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          background: transparent;
          transition: var(--transition);
          font-size: 1rem;
        }
        
        .dark-theme .form-group input,
        .dark-theme .form-group textarea {
          border-color: rgba(255, 255, 255, 0.1);
          color: white;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--primary);
          outline: none;
        }
        
        .form-group textarea {
          height: 150px;
          resize: none;
        }
        
        .contact-form .btn {
          width: 100%;
          padding: 15px;
          font-size: 1rem;
        }
        
        @media (max-width: 768px) {
          .contact-container {
            flex-direction: column;
            align-items: stretch;
          }
          
          .contact-info, .contact-form {
            width: 100%;
            min-height: unset;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
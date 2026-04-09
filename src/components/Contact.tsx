import React from 'react';
import './Section.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="content-section alt-bg">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always excited to connect with new people and explore opportunities.
            Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:njmarraccini@gmail.com" className="contact-link">
              <i className="fas fa-envelope"></i>
              <span>njmarraccini@gmail.com</span>
            </a>
            <a href="tel:434-473-0430" className="contact-link">
              <i className="fas fa-phone"></i>
              <span>434-473-0430</span>
            </a>
            <div className="contact-link">
              <i className="fas fa-map-marker-alt"></i>
              <span>New York City</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

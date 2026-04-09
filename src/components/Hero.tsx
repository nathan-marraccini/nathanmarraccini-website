import React from 'react';
import './Hero.css';
import profilePic from '../assets/profile_pic.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-image">
          <img src={profilePic} alt="Nathan Marraccini" />
        </div>
        <div className="hero-social-links">
          <a href="https://www.linkedin.com/in/nathan-marraccini/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/nathan-marraccini" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <h1 className="hero-name">Nathan Marraccini</h1>
        <p className="hero-title">Corporate Account Executive II @ Roboflow</p>
        <p className="hero-tagline">
          Combining computer vision expertise with sales to help businesses deploy Vision AI solutions at scale
        </p>
      </div>
    </section>
  );
};

export default Hero;

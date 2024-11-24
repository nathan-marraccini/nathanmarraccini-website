import React from 'react';
import './Bio.css'; // CSS file for styling
import '@fortawesome/fontawesome-free/css/all.css';
import profilePic from '../assets/profile_pic.png';

const Bio = () => {
  return (
    <div className="resume-container">
      <div className="profile-box">
        <div className="profile-picture">
          {/* Use the imported profilePic for the src */}
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="content">
          <h2>Nathan Marraccini</h2>
          <p>Product Specialist @ Roboflow</p>
        </div>
        <div className="contact-info">
          <i className="fas fa-envelope"></i> {/* Font Awesome mail icon */}
          <span className="email">njmarraccini@gmail.com</span>
          <br />
          <i className="fas fa-phone"></i> 
          <span className="email">434-473-0430</span>
          <br />
          <i className="fa-solid fa-location-dot"></i>
          <span className="location">New York City</span>
        </div>
      </div>
      <div className="main-content"></div>
      <div>
        <h1 style={{ textAlign: 'center' }}>About Me</h1>
        <p style={{ textAlign: 'center' }}>
          I have always wanted to have my own website!
        </p>
        <p style={{fontSize: '16px' }}>
          This is the second paragraph, perhaps about my hobbies or interests.
          Each paragraph should be a coherent block of text.
        </p>
      </div>
    </div>
  );
};

export default Bio;

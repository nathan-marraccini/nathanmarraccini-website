import React from "react";
import "./Bio.css"; // CSS file for styling
import "@fortawesome/fontawesome-free/css/all.css";
import profilePic from "../assets/profile_pic.png";

const Bio = () => {
  return (
    <div className="bio-outer-container">
      <div className="bio-card">
        <div className="profile-picture">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="bio-content">
          <h2 className="bio-name">Nathan Marraccini</h2>
          <p className="bio-title">Growth Account Executive @ Roboflow</p>
          <div className="contact-info">
            <a href="mailto:njmarraccini@gmail.com" className="contact-link">
              <i className="fas fa-envelope"></i>
              <span>njmarraccini@gmail.com</span>
            </a>
            <br />
            <a href="tel:4344730430" className="contact-link">
              <i className="fas fa-phone"></i>
              <span>434-473-0430</span>
            </a>
            <div className="contact-link">
              <i className="fa-solid fa-location-dot"></i>
              <span>New York City 🗽</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section">
        <br />
        <h1>About Me</h1>
        <div className="about-content">
          <p>
            I'm a Growth Account Executive at Roboflow, combining computer vision expertise
            with sales to help businesses deploy AI solutions at scale.
            My background in Industrial Engineering from Virginia Tech, with a
            passion for building tech projects like the Guinness Split the G Scorer
            (90k+ user submissions).
          </p>
          <p>
            When I'm not working, you'll find me on the basketball
            courts in Lower East Side, bird watching, hanging out with friends, or going for runs around NYC. Always excited
            to tackle new challenges and learn something new.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;

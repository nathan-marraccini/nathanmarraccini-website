import React from 'react';
import './Section.css';

const About: React.FC = () => {
  return (
    <section id="about" className="content-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="section-content">
          <p>
            I'm a Corporate Account Executive II at Roboflow, combining computer vision expertise with sales
            to help businesses deploy Vision AI solutions at scale. My background is in Industrial Engineering from
            Virginia Tech, with a passion for building tech projects like the Guinness Split the G Scorer
            (more below).
          </p>
          <p>
            When I'm not working, you'll find me on an East Village basketball court, fishing on the East River,
            hanging out with friends, or going for runs around NYC. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

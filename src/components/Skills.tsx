import React from 'react';
import './Section.css';

const Skills: React.FC = () => {
  const education = {
    school: 'Virginia Tech, Blacksburg, VA',
    degree: 'B.S. in Industrial and Systems Engineering (ISE), Minor in Business',
    graduation: 'May 2022',
    honors: 'Overall GPA: 3.81 | Summa Cum Laude | Dean\'s List (Every Semester)',
  };

  const certifications = [
    'Certified Scrum Master (CSM)',
    'AWS Certified Cloud Practitioner (CCP)',
    'Securiti.ai PrivacyOps Certification',
    'Lean Six Sigma (Green Belt)',
  ];

  const skills = [
    'Sales',
    'Computer Vision',
    'SQL',
    'Python',
    'AWS',
    'JavaScript',
    'React',
    'Docker',
    'Supabase',
    'Roboflow',
    'OpenCV',
    'Git',
  ];

  return (
    <section id="skills" className="content-section">
      <div className="section-container">
        <h2 className="section-title">Education & Skills</h2>

        <div className="skills-grid">
          <div className="skills-card">
            <h3>Education</h3>
            <h4>{education.school}</h4>
            <p><strong>{education.degree}</strong></p>
            <p className="graduation">{education.graduation}</p>
            <p className="honors"><em>{education.honors}</em></p>
          </div>

          <div className="skills-card">
            <h3>Certifications</h3>
            <ul className="cert-list">
              {certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </div>

          <div className="skills-card">
            <h3>Technical Skills</h3>
            <div className="skills-tags">
              {skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

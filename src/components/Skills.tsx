import React from 'react';

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

const Skills: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section__head reveal">
          <h2 className="section__title">Education &amp; Skills</h2>
          <span className="section__no">No. 04</span>
        </div>
        <div className="skills__grid">
          <div className="reveal">
            <div className="skills__block">
              <h3>Education</h3>
              <p className="edu__school">Virginia Tech</p>
              <p className="edu__grad">Blacksburg, VA · Graduated May 2022</p>
              <p className="edu__degree">B.S. in Industrial and Systems Engineering (ISE), Minor in Business</p>
              <p className="edu__honors">Overall GPA: 3.81 · Summa Cum Laude · Dean&rsquo;s List (Every Semester)</p>
            </div>
            <div className="skills__block skills__block--certs">
              <h3>Certifications</h3>
              <ul className="cert-list">
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="skills__block reveal">
            <h3>Technical Skills</h3>
            <ul className="tags">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

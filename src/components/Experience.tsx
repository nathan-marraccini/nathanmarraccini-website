import React from 'react';
import './Section.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Roboflow, New York City, NY',
      roles: [
        {
          title: 'Corporate Account Executive II',
          period: 'October 2025 - Present',
          achievements: [
            'Promoted to Corporate Account Executive II (inaugural member), focusing on enterprise-level Vision AI solutions.',
            'RevOps stint building out BigQuery reporting so corporate sales reps could track and drive account-level credit usage as the team grew from 4->7',
            'Q4 \'25 – 147% to quota',
          ],
        },
        {
          title: 'Corporate Account Executive',
          period: 'October 2024 - October 2025',
          achievements: [
            'Q3 \'25 – 503% to quota',
            'Q2 \'25 – 151% to quota',
            'Q1 \'25 – 132% to quota',
            'Q4 \'24 – 111% to quota',
            'Helped the Corporate Team double in headcount and double in ARR during this period.',
          ],
        },
        {
          title: 'User Success',
          period: 'September 2023 - October 2024',
          achievements: [
            'Fancy name for an SDR. I worked outbound before taking over the entire inbound segment (15k DAU).',
            '131% quota attainment over my tenure.',
          ],
        },
      ],
    },
    {
      company: 'Infinitive, Ashburn, VA',
      roles: [
        {
          title: 'Business Analytics Consultant',
          period: 'August 2022 – August 2023',
          achievements: [
            'Conducted data analysis to ensure compliance with California Consumer Privacy Act (CCPA) obligations.',
            'Built process documentation and Quicksight dashboards to keep an international bank compliant with new CPRA laws and regulations.',
            'Point of Contact for the design and execution of the client\'s CPRA Right to Correct Process.',
            'Utilized SQL to query data for compliance purposes and managed reporting metrics for the DEPO Governance team.',
          ],
        },
        {
          title: 'Business Development Representative',
          period: 'December 2022 – August 2023',
          achievements: [
            'Managed strategic outreach and advertising for a $25-million account while fulfilling billable consulting responsibilities.',
            'Executed strategic campaigns on cloud architecture, data engineering, and data pipeline management.',
            'Initiated a partnership with Securiti.ai to implement privacy and security solutions.',
          ],
        },
      ],
    },
    {
      company: 'Target Corporation, Pueblo, CO',
      roles: [
        {
          title: 'Operations Manager Intern',
          period: 'June - August 2021',
          achievements: [
            'Supervised a team of 60, managing the flow of 1,524,783 units during the internship period.',
            'Implemented workflow improvements, achieving a 23% productivity increase by the end of my internship.',
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="content-section alt-bg">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <h3 className="company-name">{exp.company}</h3>
              {exp.roles.map((role, roleIdx) => (
                <div key={roleIdx} className="role-item">
                  <div className="role-header">
                    <h4 className="role-title">{role.title}</h4>
                    <span className="role-period">{role.period}</span>
                  </div>
                  <ul className="achievements-list">
                    {role.achievements.map((achievement, achIdx) => (
                      <li key={achIdx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

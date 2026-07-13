import React from 'react';

interface Role {
  title: string;
  period: string;
  achievements: string[];
}

interface Company {
  name: string;
  location: string;
  roles: Role[];
}

const experiences: Company[] = [
  {
    name: 'Roboflow',
    location: 'New York City, NY',
    roles: [
      {
        title: 'Corporate Account Executive II',
        period: 'October 2025 — Present',
        achievements: [
          'Promoted to Corporate Account Executive II (inaugural member), focusing on enterprise-level Vision AI solutions.',
          'Q1 ’26 — 295% to goal.',
          'Q4 ’25 — 147% to quota.',
          'Attributed 43% of Roboflow’s total sales-led revenue in Q1 ’26.',
          'Shipped an update to a legacy feature (Annotation Insights) to production in the Roboflow app, helping close a $30K deal.',
          'RevOps stint building out BigQuery reporting so corporate sales reps could track and drive account-level credit usage as the team grew from 4→7.',
        ],
      },
      {
        title: 'Corporate Account Executive',
        period: 'October 2024 — October 2025',
        achievements: [
          'Q3 ’25 — 503% to quota.',
          'Q2 ’25 — 151% to quota.',
          'Q1 ’25 — 132% to quota.',
          'Q4 ’24 — 111% to quota.',
          'Helped the Corporate Team double in headcount and double in ARR during this period.',
        ],
      },
      {
        title: 'User Success',
        period: 'September 2023 — October 2024',
        achievements: [
          'Fancy name for an SDR. Ran outbound and inbound simultaneously — prospecting net-new accounts while owning the entire inbound segment (15k DAU).',
          '131% quota attainment over my tenure.',
        ],
      },
    ],
  },
  {
    name: 'Infinitive',
    location: 'Ashburn, VA',
    roles: [
      {
        title: 'Business Analytics Consultant',
        period: 'August 2022 — August 2023',
        achievements: [
          'Conducted data analysis to ensure compliance with California Consumer Privacy Act (CCPA) obligations.',
          'Built process documentation and Quicksight dashboards to keep an international bank compliant with new CPRA laws and regulations.',
          'Point of Contact for the design and execution of the client’s CPRA Right to Correct Process.',
          'Utilized SQL to query data for compliance purposes and managed reporting metrics for the DEPO Governance team.',
        ],
      },
      {
        title: 'Business Development Representative',
        period: 'December 2022 — August 2023',
        achievements: [
          'Managed strategic outreach and advertising for a $25-million account while fulfilling billable consulting responsibilities.',
          'Executed strategic campaigns on cloud architecture, data engineering, and data pipeline management.',
          'Initiated a partnership with Securiti.ai to implement privacy and security solutions.',
        ],
      },
    ],
  },
  {
    name: 'Target Corporation',
    location: 'Pueblo, CO',
    roles: [
      {
        title: 'Operations Manager Intern',
        period: 'June — August 2021',
        achievements: [
          'Supervised a team of 60, managing the flow of 1,524,783 units during the internship period.',
          'Implemented workflow improvements, achieving a 23% productivity increase by the end of my internship.',
        ],
      },
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section__head reveal">
          <h2 className="section__title">Experience</h2>
          <span className="section__no">No. 02</span>
        </div>

        {experiences.map((company) => (
          <article className="xp__company reveal" key={company.name}>
            <div className="xp__company-head">
              <h3 className="xp__company-name">{company.name}</h3>
              <span className="xp__company-loc">{company.location}</span>
            </div>

            {company.roles.map((role) => (
              <div className="xp__role" key={role.title}>
                <div className="xp__period">{role.period}</div>
                <div>
                  <h4 className="xp__role-title">{role.title}</h4>
                  <ul className="xp__achievements">
                    {role.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;

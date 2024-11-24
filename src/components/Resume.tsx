// src/components/Resume.js
import React from "react";
import './Resume.css'; // Optional for styling

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>***Not pretty right now but I'll fix it up***</h2>
      <h1>My Resume</h1>
      
      <section>
        <h2>Education</h2>
        <p><strong>Virginia Tech, Blacksburg, VA</strong></p>
        <p>B.S. in Industrial and Systems Engineering (ISE), Minor in Business (May 2022)</p>
        <p><em>Overall GPA: 3.81 | Summa Cum Laude | Dean’s List (Every Semester)</em></p>
      </section>

      <section>
        <h2>Certifications and Accreditations</h2>
        <ul>
          <li>Certified Scrum Master (CSM)</li>
          <li>AWS Certified Cloud Practitioner (CCP)</li>
          <li>Securiti.ai PrivacyOps Certification</li>
          <li>Lean Six Sigma (Green Belt)</li>
          <li>AWS Machine Learning Plan (In Progress)</li>
        </ul>
      </section>

      <section>
        <h2>Skills and Interests</h2>
        <p>Tableau, SQL, Simio, Microsoft Office, Google Suite, Google Apps Script, DBeaver, MySQL, Python, scikit-learn, Amazon Web Services (RDS, S3, Lambda, CloudWatch Events, IAM Policy), Data Privacy, Data Clean Rooms, Retail Media Networks, Marketing Analytics</p>
      </section>
      
      <section>
        <h2>Experience</h2>
        <h3>Roboflow, New York City, NY</h3>
        <p><strong> Add Roboflow Experience</strong></p>
        <h3>Infinitive, Ashburn, VA</h3>
        <p><strong>Business Analytics Consultant (August 2022 – August 2023)</strong></p>
        <ul>
          <li>Conducted data analysis to ensure compliance with California Consumer Privacy Act (CCPA) obligations.</li>
          <li>Built process documentation and forms to keep an international bank compliant with new CPRA laws and regulations.</li>
          <li>Point of Contact for the design and execution of the client’s CPRA Right to Correct Process.</li>
          <li>Utilized SQL to query data for compliance purposes and managed reporting metrics for the DEPO Governance team.</li>
        </ul>
        <p><strong>Business Development Representative (December 2022 – August 2023)</strong></p>
        <ul>
          <li>Managed strategic outreach and advertising for a $25-million account while fulfilling billable consulting responsibilities.</li>
          <li>Executed strategic campaigns on cloud architecture, data engineering, and data pipeline management.</li>
          <li>Initiated a partnership with Securiti.ai to implement privacy and security solutions.</li>
        </ul>

        <h3>Target Corporation, Pueblo, CO</h3>
        <p><strong>Operations Manager Intern (June - August 2021)</strong></p>
        <ul>
          <li>Supervised a team of 60, managing the flow of 1,000,000 units during the internship period.</li>
          <li>Implemented workflow improvements, achieving a 20% productivity increase.</li>
        </ul>

        {/* Add more experience sections as needed */}
      </section>

      <section>
        <h2>Personal Projects</h2>
        <h3>Add Mouse Detection Project</h3>
        <h3>Bitcoin Analysis and Visualization (March 2023 - Present)</h3>
        <ul>
          <li>Developed a data pipeline using AWS Lambda and Beautiful Soup to scrape Bitcoin price data.</li>
          <li>Implemented CloudWatch Event triggers for scheduled data updates and storage in AWS RDS.</li>
        </ul>
        <h3>NBA Game Predictions (December 2022 - April 2023)</h3>
        <ul>
          <li>Scraped data for 2460 NBA games and used scikit-learn’s RandomForestClassifier for prediction.</li>
          <li>Achieved 61% accuracy against the spread by the end of the season.</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;

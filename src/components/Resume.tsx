// src/components/Resume.js
import React, { useState } from "react";
import "./Resume.css"; // Optional for styling
import Tabs from "./Tabs";
import Projects from "./Projects";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("resume");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="resume-outer-container">
      <Tabs onTabChange={handleTabChange} />
      {activeTab === "resume" ? (
        <div className="resume-container">
          <section>
            <h2>Education</h2>
            <p>
              <strong>Virginia Tech, Blacksburg, VA</strong>
            </p>
            <p>
              B.S. in Industrial and Systems Engineering (ISE), Minor in
              Business (May 2022)
            </p>
            <p>
              <em>
                Overall GPA: 3.81 | Summa Cum Laude | Dean's List (Every
                Semester)
              </em>
            </p>
          </section>
          <section>
            <h2>Experience</h2>
            <h3>Roboflow, New York City, NY</h3>
            <p>
              <strong>Account Executive (October 2024 - Present)</strong>
            </p>
            <ul>
              <li>
                Helping build out the sales motion for Growth and Starter Plan
                customers ($5M+ in combined ARR and annualized MRR)
              </li>
              <li>112% quota attainment across Q4 '24 and Q1 '25</li>
              <li>
                Built out reporting using GCP BiqQuery for Growth Sales reps to
                monitor and promote account level credit usage.
              </li>
            </ul>
            <p>
              <strong>User Success (September 2023 - October 2024)</strong>
            </p>
            <ul>
              <li>
                Established the user success strategy, helping businesses build
                and deploy production-ready computer vision solutions at scale,
                leading to 131% quota attainment.
              </li>
            </ul>
            <h3>Infinitive, Ashburn, VA</h3>
            <p>
              <strong>
                Business Analytics Consultant (August 2022 – August 2023)
              </strong>
            </p>
            <ul>
              <li>
                Conducted data analysis to ensure compliance with California
                Consumer Privacy Act (CCPA) obligations.
              </li>
              <li>
                Built process documentation and dashboards to keep an international
                bank compliant with new CPRA laws and regulations.
              </li>
              <li>
                Point of Contact for the design and execution of the client's
                CPRA Right to Correct Process.
              </li>
              <li>
                Utilized SQL to query data for compliance purposes and managed
                reporting metrics for the DEPO Governance team.
              </li>
            </ul>
            <p>
              <strong>
                Business Development Representative (December 2022 – August
                2023)
              </strong>
            </p>
            <ul>
              <li>
                Managed strategic outreach and advertising for a $25-million
                account while fulfilling billable consulting responsibilities.
              </li>
              <li>
                Executed strategic campaigns on cloud architecture, data
                engineering, and data pipeline management.
              </li>
              <li>
                Initiated a partnership with Securiti.ai to implement privacy
                and security solutions.
              </li>
            </ul>

            <h3>Target Corporation, Pueblo, CO</h3>
            <p>
              <strong>Operations Manager Intern (June - August 2021)</strong>
            </p>
            <ul>
              <li>
                Supervised a team of 60, managing the flow of 1,524,783 units
                during the internship period.
              </li>
              <li>
                Implemented workflow improvements, achieving a 23% productivity
                increase.
              </li>
            </ul>

            {/* Add more experience sections as needed */}
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
            <p>
              Sales (Usage Based) • Computer Vision • Dashboarding • SQL •
              Python • AWS Cloud • Javascript • React • Docker • Supabase •
              Roboflow • OpenCV • Git
            </p>
          </section>
        </div>
      ) : (
        <Projects />
      )}
    </div>
  );
};

export default Resume;

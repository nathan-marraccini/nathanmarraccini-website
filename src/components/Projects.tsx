import React from 'react';
import ExpandableImage from './ExpandableImage';
import splitTheG from '../assets/splitthegimage.png';
import mouse1 from '../assets/mouse1.png';
import mouse2 from '../assets/mouse2.png';

const Projects: React.FC = () => {
  return (
    <section className="section section--tint" id="projects">
      <div className="wrap">
        <div className="section__head reveal">
          <h2 className="section__title">Featured Work</h2>
          <span className="section__no">No. 03</span>
        </div>

        {/* Guinness SplitScorer */}
        <article className="proj reveal">
          <div className="proj__head">
            <span className="proj__index">i.</span>
            <h3 className="proj__title">
              <a href="https://splittheg.dev" target="_blank" rel="noopener noreferrer">Guinness SplitScorer</a>
            </h3>
          </div>
          <div className="proj__body">
            <div className="proj__meta">
              Personal Project<br />{' '}
              <a href="https://splittheg.dev" target="_blank" rel="noopener noreferrer">splittheg.dev ↗</a><br />{' '}
              <span className="stat sep"><b>200,000+</b> submissions</span>
              <span className="stat sep"><b>3,000+</b> users</span>
              <span className="stat"><b>100+</b> countries</span>
            </div>
            <div>
              <p className="proj__dek">
                A viral web app that uses computer vision to analyze and score the quality of Guinness
                &ldquo;splits&rdquo; in real time.
              </p>
              <ul className="proj__notes">
                <li>
                  People wanted an app so I built that too (
                  <a href="https://apps.apple.com/us/app/splittheg/id6758920970" target="_blank" rel="noopener noreferrer">
                    2,500+ App Store downloads
                  </a>
                  ).
                </li>
                <li>Trained a custom CV pipeline to process user-uploaded pictures of Guinness pours and displayed a score for how well they Split the G.</li>
                <li>Integrated Supabase for real-time database, storage, and edge functions; deployed globally on Fly.io.</li>
              </ul>
              <div className="proj__figures proj__figures--single">
                <ExpandableImage src={splitTheG} alt="Guinness SplitScorer analyzing a pour" caption="Fig. 02 — Splitting the G" />
              </div>
              <p className="proj__tech">
                <strong>Technologies</strong> React · Supabase · Fly.io · Python · OpenCV · Roboflow · Docker · JavaScript
              </p>
            </div>
          </div>
        </article>

        {/* Mouse Detection */}
        <article className="proj reveal">
          <div className="proj__head">
            <span className="proj__index">ii.</span>
            <h3 className="proj__title"><span>Smart Mouse Detection &amp; Alert System</span></h3>
          </div>
          <div className="proj__body">
            <div className="proj__meta">
              Personal Project<br />{' '}
              <span className="stat sep">Raspberry&nbsp;Pi + OpenCV</span>
              <span className="stat"><b>1 month</b> of rent, waived</span>
            </div>
            <div>
              <p className="proj__dek">
                My friend has a mouse problem and his landlord didn&rsquo;t believe him &mdash; so I built a
                motion-sensing pipeline on a Raspberry Pi using OpenCV and a USB webcam to monitor real-time
                activity in a kitchen environment. He ended up getting a month of rent for free.
              </p>
              <ul className="proj__notes">
                <li><strong>Motion Detection:</strong> Continuously analyze video frames for significant pixel changes.</li>
                <li><strong>Object Recognition:</strong> Invoke a trained object detection model to predict if there was a mouse in the frame.</li>
                <li><strong>Automated Notifications:</strong> Integrated a Twilio API to immediately text my friend whenever a mouse was confirmed.</li>
              </ul>
              <div className="proj__figures">
                <ExpandableImage src={mouse1} alt="Mouse Detection System Setup" caption="Fig. 03 — The setup" />
                <ExpandableImage src={mouse2} alt="Mouse Detection in Action" caption="Fig. 04 — Caught in the act" />
              </div>
              <p className="proj__tech">
                <strong>Technologies</strong> Python · OpenCV · Raspberry Pi · Twilio SMS API · Linux (Raspbian)
              </p>
            </div>
          </div>
        </article>

        {/* Bitcoin */}
        <article className="proj reveal">
          <div className="proj__head">
            <span className="proj__index">iii.</span>
            <h3 className="proj__title"><span>Bitcoin Analysis &amp; Visualization</span></h3>
          </div>
          <div className="proj__body">
            <div className="proj__meta">
              Personal Project<br />{' '}
              <span className="stat">AWS Data Pipeline</span>
            </div>
            <div>
              <p className="proj__dek">A serverless pipeline that scraped, stored, and visualized Bitcoin price data on a schedule.</p>
              <ul className="proj__notes">
                <li>Developed a data pipeline using AWS Lambda and Beautiful Soup to scrape Bitcoin price data.</li>
                <li>Implemented CloudWatch Event triggers for scheduled data updates and storage in AWS RDS.</li>
                <li>This was 2022 and I should have just bought Bitcoin instead&hellip;</li>
              </ul>
            </div>
          </div>
        </article>

        {/* NBA */}
        <article className="proj reveal">
          <div className="proj__head">
            <span className="proj__index">iv.</span>
            <h3 className="proj__title"><span>NBA Game Predictions</span></h3>
          </div>
          <div className="proj__body">
            <div className="proj__meta">
              Personal Project<br />{' '}
              <span className="stat sep"><b>2,460</b> games scraped</span>
              <span className="stat"><b>61%</b> accuracy ATS</span>
            </div>
            <div>
              <p className="proj__dek">A machine-learning model that predicted NBA outcomes against the spread, run daily over a full season.</p>
              <ul className="proj__notes">
                <li>Scraped data for 2460 NBA games and used scikit-learn&rsquo;s RandomForestClassifier to create a model that predicted the outcome of each game ATS (against the spread).</li>
                <li>Achieved 61% accuracy against the spread by the end of the season, running the model on a daily basis and against 53 games total.</li>
                <li>Tried to win money, found out why there is a palace in the desert.</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;

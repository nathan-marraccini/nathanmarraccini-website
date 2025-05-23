import React from "react";
import "./Projects.css";
import mouse1 from "../assets/mouse1.png";
import mouse2 from "../assets/mouse2.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <section>
        <h2>
          Guinness SplitScorer (
          <a
            href="https://splittheg.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            splittheg.dev
          </a>
          )
        </h2>
        <p>
          <em>Personal Project</em>
        </p>
        <p>
          <strong>Submissions: 90,000+ • Countries: 75+</strong>
        </p>
        <ul>
          <li>
            Built a React app that uses computer vision to analyze and score the
            quality of Guinness "splits" in real time
          </li>
          <li>
            Integrated Supabase for real-time database, storage, and edge
            functions; deployed globally on Fly.io
          </li>
          <li>
            Designed and trained a custom CV model to process user-uploaded
            pictures of Guinness pours and displayed a score for how well they
            split the G
          </li>
        </ul>
        <p>
          <strong>Technologies:</strong> React · Supabase · Fly.io · Python ·
          OpenCV · Roboflow · Docker · JavaScript
        </p>
      </section>

      <section>
        <h2>Smart Mouse Detection & Alert System</h2>
        <p>
          <em>Personal Project</em>
        </p>
        <p>
          Built a motion-sensing pipeline on a Raspberry Pi using OpenCV and a
          USB webcam to monitor real-time activity in a kitchen environment
        </p>
        <h4>Implementation Details:</h4>
        <ul>
          <li>
            <strong>Motion Detection:</strong> Continuously analyze video frames
            for significant pixel changes
          </li>
          <li>
            <strong>Object Recognition:</strong> Invoke a trained object
            detection model to predict if there was a mouse in the frame.
          </li>
          <li>
            <strong>Automated Notifications:</strong> Integrated a Twilio API to
            immediately text your friend whenever a mouse was confirmed
          </li>
        </ul>
        <p>
          <strong>Technologies:</strong> Python · OpenCV · Raspberry Pi · Twilio
          SMS API · Linux (Raspbian)
        </p>
        <div className="project-images">
          <img
            src={mouse1}
            alt="Mouse Detection System Setup"
            className="project-image"
          />
          <img
            src={mouse2}
            alt="Mouse Detection in Action"
            className="project-image"
          />
        </div>
      </section>

      <section>
        <h2>Bitcoin Analysis and Visualization</h2>
        <em>Personal Project</em>
        <ul>
          <li>
            Developed a data pipeline using AWS Lambda and Beautiful Soup to
            scrape Bitcoin price data
          </li>
          <li>
            Implemented CloudWatch Event triggers for scheduled data updates and
            storage in AWS RDS
          </li>
        </ul>
      </section>

      <section>
        <h2>NBA Game Predictions</h2>
        <em>Personal Project</em>
        <ul>
          <li>
            Scraped data for 2460 NBA games and used scikit-learn's
            RandomForestClassifier to create a model that predicted the outcome
            of each game ATS (against the spread).
          </li>
          <li>
            Achieved 61% accuracy against the spread by the end of the season,
            running the model on a daily basis and against 53 games total.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;

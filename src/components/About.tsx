import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section section--tint" id="about">
      <div className="wrap">
        <div className="section__head reveal">
          <h2 className="section__title">About Me</h2>
          <span className="section__no">No. 01</span>
        </div>
        <div className="reveal">
          <p className="about__lead">
            I&rsquo;m a Corporate Account Executive&nbsp;II at Roboflow, combining computer vision expertise
            with sales to help businesses deploy Vision&nbsp;AI solutions at scale. My background is in
            Industrial Engineering from Virginia&nbsp;Tech, with a passion for building tech projects like
            the{' '}
            <a href="https://splittheg.dev" target="_blank" rel="noopener noreferrer">
              Guinness Split the&nbsp;G Scorer
            </a>{' '}
            (more below).
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="section section--tint contact" id="contact">
      <div className="wrap reveal">
        <p className="kicker">No. 05 &mdash; Correspondence</p>
        <h2 className="contact__title">Get in <em>touch</em></h2>
        <p className="contact__intro">
          I&rsquo;m always excited to connect with new people and explore opportunities. Feel free to reach out!
        </p>
        <a className="contact__email" href="mailto:njmarraccini@gmail.com">njmarraccini@gmail.com</a>
        <div className="contact__row">
          <a href="tel:434-473-0430">434&ndash;473&ndash;0430</a>
          <span className="dot" aria-hidden="true">•</span>
          <span>New York City</span>
          <span className="dot" aria-hidden="true">•</span>
          <a href="https://www.linkedin.com/in/nathan-marraccini/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="dot" aria-hidden="true">•</span>
          <a href="https://github.com/nathan-marraccini" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

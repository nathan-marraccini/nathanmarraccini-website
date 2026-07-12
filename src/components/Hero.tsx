import React from 'react';
import profilePic from '../assets/profile_pic.png';

const Hero: React.FC = () => {
  return (
    <header className="hero" id="home">
      <div className="wrap">
        <div className="hero__topline reveal">
          <span>Portfolio &amp; Selected Work</span>
          <span>Portfolio</span>
          <span className="accent">New York City</span>
          <span>Est. Virginia Tech &rsquo;22</span>
        </div>

        <h1 className="hero__name reveal">Nathan<br /><em>Marraccini</em></h1>

        <div className="hero__body">
          <div className="reveal">
            <p className="hero__title">
              Corporate Account Executive II @{' '}
              <a href="https://roboflow.com" target="_blank" rel="noopener noreferrer">Roboflow</a>
            </p>
            <p className="hero__tagline">
              Combining computer vision expertise with sales to help businesses deploy Vision&nbsp;AI solutions at scale.
            </p>
            <ul className="hero__social">
              <li>
                <a href="https://www.linkedin.com/in/nathan-marraccini/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  LinkedIn <span className="arrow">↗</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/nathan-marraccini" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  GitHub <span className="arrow">↗</span>
                </a>
              </li>
              <li>
                <a href="mailto:njmarraccini@gmail.com" aria-label="Email">
                  Email <span className="arrow">↗</span>
                </a>
              </li>
            </ul>
          </div>
          <figure className="hero__figure reveal">
            <div className="hero__photo-frame">
              <img src={profilePic} alt="Nathan Marraccini" />
            </div>
            <figcaption className="hero__caption">
              <span>Fig. 01</span>
              <span>The author, NYC</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Hero;

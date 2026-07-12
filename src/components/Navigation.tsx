import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && scrollPos >= el.offsetTop) current = section.id;
      }
      // Bottom of page: force last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = sections[sections.length - 1].id;
      }
      setActiveSection(current);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav" aria-label="Primary">
      <div className="wrap nav__inner">
        <button type="button" className="nav__brand" onClick={() => scrollToSection('home')}>
          <span className="brand-full">Nathan&nbsp;Marraccini</span>
          <span className="brand-mono" aria-hidden="true">N.M.</span>
        </button>
        <ul className="nav__links">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                className={`nav__link ${activeSection === section.id ? 'is-active' : ''}`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

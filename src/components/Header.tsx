import React, { useState } from 'react';
import logo from '../assets/edgelogo.png';

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((open) => !open);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <header>
      <div className="container">
     <div className="logo-container">
          <img src={logo} alt="Efficiency Edge Logo" className="logo" />
        </div>
        <nav aria-label="Primary navigation">
          <div
            className="menu-toggle"
            onClick={toggleNav}
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleNav();
              }
            }}
          >
            &#9776;
          </div>
          <ul className={`nav-list${navOpen ? ' open' : ''}`}>
            <li>
              <a href="#hero" onClick={closeNav}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeNav}>
                Services
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeNav}>
                About Us
              </a>
            </li>
            <li>
              <a href="#signup" onClick={closeNav}>
                Classes
              </a>
            </li>
                <li>
              <a href="#contact" onClick={closeNav}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

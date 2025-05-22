import React, { useState } from 'react';

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
        <h1>Efficiency Edge Africa</h1>
        <nav aria-label="Primary navigation">
          <ul className="primary-nav">
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
          </ul>
          <div
            className="menu-toggle"
            id="menu-toggle"
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
          <ul className={`secondary-nav${navOpen ? ' open' : ''}`} id="secondary-nav">
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

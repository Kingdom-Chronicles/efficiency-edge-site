import React from 'react';

const Signup: React.FC = () => {
  return (
    <section id="signup" aria-label="Signup for classes">
      <h2>Ready to Learn Software Development?</h2>
      <p>Join our expert-led classes to boost your skills and launch your career in technology.</p>
      <a
        href="https://docs.google.com/forms/d/1OYwRYzMBfoLwi3JOfKF92PYuT9RrPKX8gv_BdZWA2oI/preview"
        target="_blank"
        rel="noopener noreferrer"
        className="signup-btn"
        aria-label="Register for Software Development Classes"
      >
        Sign Up Now
      </a>
    </section>
  );
};

export default Signup;

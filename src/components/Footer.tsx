import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Efficiency Edge Africa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

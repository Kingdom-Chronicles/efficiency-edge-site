import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="container" aria-label="Contact us">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Reach out to us through any of the following:</p>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          fontSize: '1.1rem',
          lineHeight: 1.6,
        }}
      >
        <li>
          <strong>Phone:</strong>{' '}
          <a href="tel:+256787219625" aria-label="Call us on +256 787 219 625">
            +256 787 219 625
          </a>
        </li>
        <li>
          <strong>Alternate Phone (WhatsApp):</strong>{' '}
          <a
            href="https://wa.me/256777127289"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp at +256 777 127 289"
          >
            +256 777 127 289
          </a>
        </li>
        <li>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:support@efficiencyedgeafrica.com"
            aria-label="Email us at support@efficiencyedgeafrica.com"
          >
            support@efficiencyedgeafrica.com
          </a>
        </li>
      </ul>

      <p style={{ marginTop: '2rem' }}>
        Our office is open Monday to Friday, 9:00 AM – 6:00 PM.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <h3>Follow Us</h3>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
          <li>
            <a
              href="https://www.linkedin.com/company/efficiency-edge-uganda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/efficiencyedgeafrica"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/efficiencyedgeafrica"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;

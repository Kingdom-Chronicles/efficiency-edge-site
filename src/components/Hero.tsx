import React, { useState, useEffect } from 'react';

const messages = [
  'We Drive Businesses To The Forefront Of The Industries Through Comprehensive AI Automation.',
  'Ready to change your business?',
];

const typingSpeed = 50; // ms per character
const pauseTime = 1500; // ms pause before deleting or typing next

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= currentMessage.length) {
      setDisplayedText(currentMessage.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayedText(currentMessage.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex - 1), typingSpeed);
    }

    if (charIndex === currentMessage.length + 1 && !isDeleting) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (charIndex === 0 && isDeleting) {
      // Move to next message and start typing
      setIsDeleting(false);
      setMessageIndex((messageIndex + 1) % messages.length);
      timeout = setTimeout(() => setCharIndex(1), typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, messageIndex]);

  return (
    <section id="hero" aria-label="Hero section">
      <h2>
        {displayedText}
        <span className="cursor">|</span>
      </h2>
    </section>
  );
};

export default Hero;

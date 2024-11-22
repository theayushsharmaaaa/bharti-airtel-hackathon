import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          GuruLink is an innovative EdTech platform dedicated to addressing teacher shortages, particularly in rural and underserved areas...
        </p>
        <div className="features">
          <h3>Key Features</h3>
          <ul>
            <li>Instant teacher requests based on subject, grade level, and board.</li>
            <li>Real-time tracking and selection of substitutes.</li>
            <li>Cloud-based session recording for up to one year.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

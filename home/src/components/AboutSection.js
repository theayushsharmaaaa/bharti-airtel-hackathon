import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        {/* About Us Header */}
        <h2 className="text-center mb-4">About Us</h2>
        <p className="text-muted text-center mb-5">
          GuruLink is an innovative EdTech platform dedicated to addressing teacher shortages, particularly in rural and underserved areas...
        </p>

        {/* Key Features */}
        <div>
          <h3 className="mb-3">Key Features</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Instant teacher requests based on subject, grade level, and board.
            </li>
            <li className="list-group-item">
              Real-time tracking and selection of substitutes.
            </li>
            <li className="list-group-item">
              Cloud-based session recording for up to one year.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

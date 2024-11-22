import React from 'react';
import './HeroSection.css';
import BrainImage from './WhatsApp Image 2024-11-21 at 22.57.43.jpeg'; // Replace with your image path

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="text-box">
        <h1>GuruLink</h1>
        <p>Let nothing stop the learning. We are here to find you the perfect fit for your school with just a click.</p>
        <button className="cta-button">Learn More</button>
      </div>
      <img src={BrainImage} alt="Brain" className="hero-image" />
    </section>
  );
};

export default HeroSection;

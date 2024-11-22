import React from 'react';
import BrainImage from './WhatsApp Image 2024-11-21 at 22.57.43.jpeg'; // Replace with your image path

const HeroSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Box */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">GuruLink</h1>
            <p className="lead">
              Let nothing stop the learning. We are here to find you the perfect fit for your school with just a click.
            </p>
            <button className="btn btn-primary btn-lg">Learn More</button>
          </div>
          {/* Image */}
          <div className="col-md-6 text-center">
            <img src={BrainImage} alt="Brain" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

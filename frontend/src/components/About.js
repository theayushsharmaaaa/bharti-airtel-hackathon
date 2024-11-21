import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => (
  <section className="py-5 bg-light">
    <Container>
      <h2>About Us</h2>
      <p>
        Gurulink simplifies the process of finding substitute teachers. It ensures real-time availability and cloud-based recording options.
      </p>
      <ul>
        <li>Insert teacher requests based on priority.</li>
        <li>Find the real-time availability of substitutes.</li>
        <li>Cloud-based session recordings.</li>
      </ul>
    </Container>
  </section>
);

export default About;

import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Header = () => (
  <header className="bg-light py-5 text-center">
    <Container>
      <h1 className="display-4">Welcome to Gurulink</h1>
      <p className="lead">Your gateway to substitute teacher management</p>
      <Button variant="primary" size="lg">Learn More</Button>
    </Container>
  </header>
);

export default Header;

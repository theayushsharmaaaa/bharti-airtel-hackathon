import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const AppNavbar = () => (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
    <Navbar.Brand href="/">Gurulink</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/request">Raise a Request</Nav.Link>
      </Nav>
      <Button variant="outline-light" className="ms-2">Sign Out</Button>
    </Navbar.Collapse>
  </Navbar>
);

export default AppNavbar;
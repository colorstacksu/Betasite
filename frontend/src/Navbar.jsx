import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="/path/to/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="ColorStack logo"
        />{' '}
        ColorStack
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link href="#eboard">E-Board</Nav.Link>
          <Nav.Link href="#sponsors">Sponsors</Nav.Link>
          <Button variant="warning" className="ml-2">Contact</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
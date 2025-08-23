import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from './Images.jsx';

//This is the navigation bar, quite self explanatory but you will find all the navigation options here

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={images.OwlKSU}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="ColorStack logo"
        />{' '}
        <span className='navbar-brand-text'>ColorStack at KSU</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/events">Events</Nav.Link>
          <Nav.Link as={Link} to="/eboard">E-Board</Nav.Link>
          <Nav.Link as={Link} to="/database">Database</Nav.Link>
          <Nav.Link as={Link} to="/sponsors" style={{backgroundColor:"gold", borderRadius:"10px"}}>Sponsors</Nav.Link>
          {/* <Button variant="warning" className="ms-2">Contact</Button> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

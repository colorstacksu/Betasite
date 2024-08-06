import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import ColorStackLogo from './assets/ColorStack.png';
import About from './About.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// const CustomNavbar = () => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="#home">
//         <img
//           src={ColorStackLogo}
//           width="50"
//           height="50"
//           className="d-inline-block align-top"
//           alt="ColorStack"
//         />{'ColorStack'}
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ms-auto">
//           <Nav.Link href="#about">About</Nav.Link>
//           <Nav.Link href="#events">Events</Nav.Link>
//           <Nav.Link href="#eboard">E-Board</Nav.Link>
//           <Nav.Link href="#sponsors">Sponsors</Nav.Link>
//           <Button variant="warning" className="ms-2">Contact</Button>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };
const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={ColorStackLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="ColorStack logo"
        />{' '}
        ColorStack
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/events">Events</Nav.Link>
          <Nav.Link as={Link} to="/eboard">E-Board</Nav.Link>
          <Nav.Link as={Link} to="/sponsors">Sponsors</Nav.Link>
          <Button variant="warning" className="ms-2">Contact</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

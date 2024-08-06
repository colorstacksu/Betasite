import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Image } from 'react-bootstrap';
import about from './assets/atrium.jpg';
import gallery1 from "./assets/homepage_gallery/homepage_gallery1.jpg";
import gallery2 from "./assets/homepage_gallery/homepage_gallery2.jpg";
import gallery3 from "./assets/homepage_gallery/homepage_gallery3.jpg";
import gallery4 from "./assets/homepage_gallery/homepage_gallery4.jpg";
import gallery5 from "./assets/homepage_gallery/homepage_gallery5.jpg";

import logo from './assets/ColorStack.png';

const About = () => {
  return (
    <div className="hero-section" style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      {/* <br></br>
      <img
        src={about}
        alt="Background"
        style={{ width: '100%', height: 'auto', filter: 'brightness(50%)' }}
      />
      <Container
        fluid
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <Row></Row>
        <Row>
          <Col>
            <h1>A team that invests in the futures of those left behind every day.</h1>
            <p>We’re a tech nonprofit cultivating the strongest cross-campus community of its kind to deliver community building, academic support, and career development opportunities at scale.</p>
            <div>
              <Button variant="warning" className="mr-3">Join Us</Button>
              <Button variant="light">Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container> */}
      <Container className="text-center my-5">
        <h1>Empowering Black and Latino Students to Launch Successful Technical Careers</h1>
        <p>Join ColorStack at Kennesaw State University</p>
        <Button variant="warning" className="mr-2">Join Us</Button>
        <Button variant="outline-warning">Learn More</Button>
      </Container>
      
      {/* Statistics */}
      <Container className="my-5">
        <Row className="text-center">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>90%</Card.Title>
                <Card.Text>of our members identify as Black & Latinx</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>89%</Card.Title>
                <Card.Text>members study Computer Science, Information Systems, or Computer Engineering</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>40%</Card.Title>
                <Card.Text>of our members identify as women</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Mission Statement */}
      <Container className="my-5 text-center">
        <h2>Our Mission</h2>
        <p>ColorStack at Kennesaw State University is dedicated to increasing the number of Black and Latinx graduates who pursue and succeed in rewarding technical careers. We provide support, resources, and a community to help our members thrive.</p>
      </Container>

      {/* Gallery */}
      <Container className="my-5">
        <h2 className="text-center">Our Gallery</h2>
        <Row>
          <Col md={2}><Image src= {gallery1} thumbnail /></Col>
          <Col md={2}><Image src= {gallery2} thumbnail /></Col>
          <Col md={2}><Image src= {gallery3} thumbnail /></Col>
          <Col md={2}><Image src= {gallery4} thumbnail /></Col>
          <Col md={2}><Image src= {gallery5} thumbnail /></Col>
        </Row>
      </Container>

      {/* Upcoming Events */}
      <Container className="my-5">
        <h2 className="text-center">Upcoming Events</h2>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>Short summary about the event to get peoples attention</Card.Text>
                <Button variant="outline-warning">Add event to calendar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>Short summary about the event to get peoples attention</Card.Text>
                <Button variant="outline-warning">Add event to calendar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Container fluid className="bg-light py-3">
        <Row className="text-center mt-3">
          {/* <Col><a href="#about">About</a></Col> */}
          <Col><Image src= {logo} /></Col>
          <Col>
            <Row><h6 style={{color: "black"}}>Interested in joining ColorStack at KSU?</h6></Row>
            <Row>Click the link below to go straight to our Discord community</Row>
            <Button style={{borderRadius: "25px"}} variant="warning" href="path/to/discord">Join the ColorStack Discord!</Button>
          </Col>
          <Col><a href="#eboard">E-Board</a></Col>
          <Col><a href="#sponsors">Sponsors</a></Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>Contact Us</Col>
        </Row>
      </Container>

    </div>
  );
};

export default About;
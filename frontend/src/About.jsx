import React from 'react';
import './App.css';
import { Container, Navbar, Nav, Button, Row, Col, Card, Image, Section } from 'react-bootstrap';
import about from './assets/atrium.jpg';
import gallery1 from "./assets/homepage_gallery/homepage_gallery1.jpg";
import gallery2 from "./assets/homepage_gallery/homepage_gallery2.jpg";
import gallery3 from "./assets/homepage_gallery/homepage_gallery3.jpg";
import gallery4 from "./assets/homepage_gallery/homepage_gallery4.jpg";
import gallery5 from "./assets/homepage_gallery/homepage_gallery5.jpg";
import graduation from "./assets/graduation.png";
import computer from "./assets/computer.png";
import girl from "./assets/girl_symbol.png";
import { FaLinkedin, FaInstagram, FaMapMarkedAlt, FaDiscord } from 'react-icons/fa';

import logo from './assets/ColorStack.png';

const About = () => {
  return (
    <div className="hero-section">
      <div className="homepage-image">
        <Container className='main-img-txt'>
          <h1>Empowering Black and Latino Students to Launch Successful Technical Careers</h1>          
          <p>Join ColorStack at Kennesaw State University</p>
          <Button variant="warning">Join Us</Button>
          <Button variant="outline-warning" className='learn-more-btn'>Learn More</Button>
        </Container>
      </div>
      
      {/* Statistics */}
      <div className="stats">
        <Row className="text-center">
          <Col md={4}>
            <Card className='card'>
              <Card.Body>
                <img src={graduation} className="stats-img" />
                <Card.Title className='stats-num'>90%</Card.Title>
                <Card.Title className='stats-txt'>of our members identify as Black & Latinx</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='card'>
              <Card.Body>
                <img src={computer} className="stats-img" />
                <Card.Title className='stats-num'>89%</Card.Title>
                <Card.Title className='stats-txt'>members study Computer Science, Information Systems, or Computer Engineering</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='card'>
              <Card.Body>
                <img src={girl} className="stats-img" />
                <Card.Title className='stats-num'>40%</Card.Title>
                <Card.Text className='stats-txt'>of our members identify as women</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Mission Statement */}
      <div className="mission">
        <h2>Our Mission</h2>
        <p>ColorStack at Kennesaw State University is dedicated to increasing the number of Black and Latinx graduates who pursue and succeed in rewarding technical careers. We provide support, resources, and a community to help our members thrive.</p>
      </div>

      {/* Gallery */}
      <div className="gallery">
        <h2>Our Gallery</h2>
        <Row>
          <Col md={2}><Image src= {gallery1} thumbnail /></Col>
          <Col md={2}><Image src= {gallery2} thumbnail /></Col>
          <Col md={2}><Image src= {gallery3} thumbnail /></Col>
          <Col md={2}><Image src= {gallery4} thumbnail /></Col>
          <Col md={2}><Image src= {gallery5} thumbnail /></Col>
        </Row>
      </div>

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
      

    </div>
  );
};

export default About;
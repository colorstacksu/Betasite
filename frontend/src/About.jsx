import React from 'react';
import './App.css';
import { Container, Navbar, Nav, Button, Row, Col, Card, Image, Section, Carousel } from 'react-bootstrap';
import images from './Images';
import graduation from "./assets/icons/graduation.png";
import girl from "./assets/icons/girl_symbol.png";
import { FaLinkedin, FaInstagram, FaMapMarkedAlt, FaDiscord } from 'react-icons/fa';

const pastEventsImages = [
  images.event1,
  images.event2,
  images.event3,
  images.homepage,
  images.event4
  // Include up to 10 image paths
];

const About = () => {
  return (
    <div className="hero-section">
      <div className="homepage-image">
        <Container className='main-img-txt'>
          <Card.Text className='stats-txt'><h1 style={{fontSize:'2.5rem'}}>Empowering Black and Latino Students to Launch Successful Technical Careers</h1> 
           </Card.Text>
          <p>Join ColorStack at Kennesaw State University</p>
          <Button href='https://www.colorstack.org/' variant="warning" className='join-us-btn'>National Organization</Button>
          <Button href='https://www.kennesaw.edu/' variant="outline-warning" className='learn-more-btn'>Kennesaw State University</Button>
        </Container>
      </div>

      {/* Mission Statement */}
      <div className="mission color-inspo">
        <h2 className='custom-h1'>Our Mission</h2>
        <p>ColorStack at Kennesaw State University is dedicated to increasing the number of Black and Latinx graduates who pursue and succeed in rewarding technical careers. 
          We provide support, resources, and a community to help our members thrive.</p>
      </div>

      {/* Statistics */}
      <div className="stats">
        <Row className="text-center">
          <Col md={4}>
            <Card className='card'>
              <Card.Body>
                <img src={graduation} className="stats-img" />
                <Card.Title className='stats-num'>90%</Card.Title>
                <Card.Text className='stats-txt'>of our members identify as Black & Latinx</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='card'>
              <Card.Body>
                <img src={images.computerIcon} className="stats-img" />
                <Card.Title className='stats-num'>89%</Card.Title>
                <Card.Text className='stats-txt'>members study Computer Science, Information Systems, or Computer Engineering</Card.Text>
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
      

    </div>
  );
};

export default About;
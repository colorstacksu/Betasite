import React from "react";
// import { Row, Col } from "react-bootstrap";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import "./App.css";
import images from "./Images";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Section 1 */}
      
      <Row className="justify-content-center">
      
      <h1 className="custom-h1">Welcome to ColorStack KSU!</h1>
      <div>
        {/* Animated Characters */}
        <img
          src={images.Smiski} // Add your character image here
          alt="Character 1"
          className="character img-fluid" 
        />
      </div>
        <Col md={8} className="d-flex flex-column align-items-center">
          <img src={images.eboard1} alt="Background" />
          <div className="text-container">
            
            <p>ColorStack at Kennesaw State University</p>
            <div className="button-container">
              <a
                href="https://app.colorstack.io/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-warning"
              >
                Join the National Org.
              </a>
              <a
                href="https://owllife.kennesaw.edu/organization/colorstackksu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-warning"
              >
                Join Colorstack KSU
              </a>
            </div>
          </div>
        </Col>
      </Row>
      {/* <Row>
        <Container className="my-5" style={{alignContent:"center"}}>
        <h2 style={{ marginBottom: "40px", alignContent:"center" }} className="text-center custom-h1">
          Monthly Newsletter
        </h2>
        <Row className="justify-content-center">
                <Card.Img variant="top" src={images.MNJan20251} />
                <Card.Img variant="top" src={images.MNJan20252} />
        </Row>
      </Container>
      </Row> */}
      <Container className="my-5" style={{alignContent:"center"}}>
        <h2 style={{ marginBottom: "40px", alignContent:"center" }} className="text-center custom-h1">
          Monthly Newsletter
        </h2>
        <Row className="justify-content-center">
      <Col md={4}>
                <Card.Img variant="top" src={images.MNJan20251} style={{filter:"none"}}/>
                
            </Col>
            <Col md={4}>
                <Card.Img variant="top" src={images.MNJan20252} style={{filter:"none"}}/>
            </Col>
            </Row>
            </Container>
      {/* Section 2 */}
      <Row className="justify-content-center position-relative">
        <h1 className="custom-h1">RSVP for our Upcoming Events Here!</h1>
        <Col md={8} className="d-flex flex-column align-items-center">
          {/* Second Image */}
          <img src={images.homepage} alt="Event" />
          {/* RSVP Button Positioned Over the Image */}
          <button
            className="rsvpButton"
            onClick={() =>
              window.open(
                "https://nvidia.eightfold.ai/events/candidate/landing?plannedEventId=5eQmdApVZ",
                "_blank"
              )
            }
          >
            RSVP: Vision Board Night
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;

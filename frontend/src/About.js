import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import about from './assets/atrium.jpg';

const About = () => {
  return (
    <div className="hero-section" style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      <br></br>
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
      </Container>
    </div>
  );
};

export default About;
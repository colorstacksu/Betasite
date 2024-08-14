import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import homepage from './assets/homepage.jpeg';

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      <br></br>
      <img
        src={homepage}
        alt="Background"
        style={{ width: '100%', height: 'auto', filter: 'brightness(50%)' }}
      />
      <Container
        fluid
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <Row>
          <Col>
          <Card.Text className='stats-txt'><h1 style={{fontSize:'2.5rem'}}>Welcome to ColorStack KSU!</h1> 
          <p>Join ColorStack at Kennesaw State University</p>
           </Card.Text>
            
            <div>
              <Button style={{marginLeft: '20px'}} href='https://owllife.kennesaw.edu/organization/colorstackksu' variant="warning" className="mr-3">Join Us</Button>
              <Button style={{marginLeft: '20px'}} href='https://www.colorstack.org/' variant="light">Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
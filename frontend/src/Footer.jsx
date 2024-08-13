import { Container, Navbar, Nav, Button, Row, Col, Card, Image } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaMapMarkedAlt, FaDiscord } from 'react-icons/fa';
import logo from './assets/ColorStack.png';

const Footer = () => {
    return (
        <Container fluid className="bg-light py-3" style={{color: "black"}}>
        <Row className="text-center mt-3">
          {/* <Col><a href="#about">About</a></Col> */}
          <Col><Image src= {logo} /></Col>
          <Col>
            <Row><h6 >Interested in joining ColorStack at KSU?</h6></Row>
            <Row>Click the link below to go straight to our Discord community</Row>
            <Button style={{borderRadius: "25px", marginTop: "20px"}} variant="warning" href="path/to/discord">Join the ColorStack Discord!</Button>
          </Col>
          <Col><h4>Navigation</h4>
          <ul className='list-unstyled text-decoration-none'>
          <li ><a className="text-decoration-none" style={{color: 'inherit'}} href="#eboard">About</a></li>
          <li><a className="text-decoration-none" style={{color: 'inherit'}} href="#events">Events</a></li>
          <li><a className="text-decoration-none" style={{color: 'inherit'}} href="#eboard">E-Board</a></li>
          <li><a className="text-decoration-none" style={{color: 'inherit'}} href="#sponsors">Sponsors</a></li>
          </ul>
          </Col>
          <Col><h4>Contact Us</h4>
          <div style={{marginBottom:'10px'}}><a style={{color: 'inherit'}} href='mailto:colortstacksu@gmail.com'>colorstacksu@gmail.com</a></div>
          <Row className="justify-content-center">
            <Col xs="auto" > <a href="https://discord.gg/Hhb4paWq"><FaDiscord size={40}/></a></Col>
            <Col xs="auto"> <a href="https://www.instagram.com/colorstackatksu?igsh=d2JneHA2dHgyNHhj"><FaInstagram size={40}/></a></Col>
            <Col xs="auto"> <a href="https://www.linkedin.com/company/colorstack-ksu/"><FaLinkedin size={40}/></a></Col>
          </Row>
          </Col>
        </Row>
          
      </Container>

    );
};

export default Footer;
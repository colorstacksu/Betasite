import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import images from './Images';

const Footer = () => {
  return (
    <Container fluid className="bg-light py-3" style={{ color: "black" }}>
      <Row className="text-center mt-3">
        <Col md={3} sm={12} className="mb-3">
          {/* Adjust Image Size on mobile */}
          <Image src={images.colorstackLogo} fluid className="mb-2" />
        </Col>

        <Col md={3} sm={12} className="mb-3">
          <h6>Interested in joining ColorStack at KSU?</h6>
          <p>Click the link below to go straight to our Discord community</p>
          {/* Button adjusted for mobile */}
          <Button
            style={{ borderRadius: "25px", marginTop: "20px" }}
            variant="warning"
            href="path/to/discord"
            size="sm"
          >
            Join the ColorStack Discord!
          </Button>
        </Col>

        <Col md={3} sm={12} className="mb-3">
          <h4>Navigation</h4>
          <ul className="list-unstyled text-decoration-none">
            <li>
              <a
                className="text-decoration-none"
                style={{ color: 'inherit' }}
                href="#eboard"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none"
                style={{ color: 'inherit' }}
                href="#events"
              >
                Events
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none"
                style={{ color: 'inherit' }}
                href="#eboard"
              >
                E-Board
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none"
                style={{ color: 'inherit' }}
                href="#sponsors"
              >
                Sponsors
              </a>
            </li>
          </ul>
        </Col>

        <Col md={3} sm={12} className="mb-3">
          <h4>Contact Us</h4>
          <div style={{ marginBottom: '10px' }}>
            <a style={{ color: 'inherit' }} href='mailto:colortstacksu@gmail.com'>
              colorstacksu@gmail.com
            </a>
          </div>
          <Row className="justify-content-center">
            <Col xs="auto">
              <a href="https://discord.gg/Hhb4paWq">
                <FaDiscord size={30} />
              </a>
            </Col>
            <Col xs="auto">
              <a href="https://www.instagram.com/colorstackatksu?igsh=d2JneHA2dHgyNHhj">
                <FaInstagram size={30} />
              </a>
            </Col>
            <Col xs="auto">
              <a href="https://www.linkedin.com/company/colorstack-ksu/">
                <FaLinkedin size={30} />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

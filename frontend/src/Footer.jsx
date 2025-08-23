import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import images from "./Images";
import { SiGroupme } from "react-icons/si";

const Footer = () => {
  return (
    <Container fluid className="bg-light py-3" style={{ color: "black" }}>
      <Row className="text-center mt-3">
        <Col md={4} sm={12} className="mb-3">
          {/* Adjust Image Size on mobile */}
          <Image src={images.OwlKSU} fluid className="mb-2 owlPic" />
          <p>Copyright &#169; Colorstack at KSU</p>
          <p>All Rights Reserved</p>
        </Col>

        <Col md={4} sm={12} className="mb-3">
          <h4>Navigation</h4>
          <ul className="list-unstyled text-decoration-none">
            <li>
              <a
                className="text-decoration-none"
                style={{ color: "inherit" }}
                href="./about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none"
                style={{ color: "inherit" }}
                href="./events"
              >
                Events
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none"
                style={{ color: "inherit" }}
                href="./eboard"
              >
                E-Board
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none"
                style={{ color: "inherit" }}
                href="./sponsors"
              >
                Sponsors
              </a>
            </li>
          </ul>
        </Col>

        <Col md={4} sm={12} className="mb-3">
          <h4>Contact Us</h4>
          <div style={{ marginBottom: "10px" }}>
            <a
              style={{ color: "inherit" }}
              href="mailto:colortstacksu@gmail.com"
              target="_blank"
            >
              colorstacksu@gmail.com
            </a>
          </div>
          <Row className="justify-content-center">
            <Col xs="auto">
              <a href="https://discord.gg/Hhb4paWq" target="_blank">
                <FaDiscord size={30} />
              </a>
            </Col>
            <Col xs="auto">
              <a
                href="https://www.instagram.com/colorstackatksu?igsh=d2JneHA2dHgyNHhj"
                target="_blank"
              >
                <FaInstagram size={30} />
              </a>
            </Col>
            <Col xs="auto">
              <a
                href="https://www.linkedin.com/company/colorstack-ksu/"
                target="_blank"
              >
                <FaLinkedin size={30} />
              </a>
            </Col>
            <Col xs="auto">
              <a
                href="https://groupme.com/join_group/102170994/5SP2kPci"
                target="_blank"
              >
                <SiGroupme size={30} />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

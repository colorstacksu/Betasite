import React from "react";
import { Container, Button, Image, Row, Col, Card } from "react-bootstrap";
import CustomNavbar from "./Navbar.jsx";
import images from "./Images.jsx";
import { FaLinkedin } from "react-icons/fa";
import "./App.css";

// const HeroSection = () => (
//   <div className="hero-section" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)', padding: '100px 0', textAlign: 'center', color: '#fff' }}>
//     <h1>Meet the Student Leaders of ColorStack at KSU!</h1>
//   </div>
// );

const ExecutiveBoard = () => {
  const teams = [
    "Executive Board",
    "Internal Team",
    "External Team",
    "Academic Team",
  ];
  const boardMembers = [
    {
      name: "Helena Patino Cruz",
      title: "President",
      imgSrc: images.helenaImage,
      description: "Software Engineering, May 2027",
      linkedIn: "https://www.linkedin.com/in/helenapatinoc/",
    },
    {
      name: "Geovanni Cuevas",
      title: "Vice President",
      imgSrc: images.geoImage,
      description: "Computer Science, Dec 2025",
      linkedIn: "https://www.linkedin.com/in/geovanni-cuevas-a589b01ab/",
    },
    {
      name: "Amiyah Richardson",
      title: "Founder/Alumni Chair",
      imgSrc: images.amiyahImage,
      description: "BBA Information Systems, May 2024",
      linkedIn: "https://www.linkedin.com/in/amiyahrich/",
    },
    {
      name: "Kevyn Lopez",
      title: "Operations Chair",
      imgSrc: images.kevynImage,
      description: "Computer Science, Dec 2025",
      linkedIn: "https://www.linkedin.com/in/kevyn-lopez-381a8722a/",
    },
    {
      name: "Dennise Gonzales-Garcia",
      title: "Secretary",
      imgSrc: images.denniseImage,
      description: "Computer Science, May 2026",
      linkedIn: "https://www.linkedin.com/in/dennise-gonzalez-garcia/",
    },
    {
      name: "Lisbeth Martinez",
      title: "Treasurer",
      imgSrc: images.lisbethImage,
      description: "Game Design & Dev., May 2026",
      linkedIn: "https://www.linkedin.com/in/lismar/",
    },
    {
      name: "Karrington Duggins",
      title: "Internal Social Media Chair",
      imgSrc: images.karringtonImage,
      description: "Information Security, May 2025",
      linkedIn: "https://www.linkedin.com/in/karrington-duggins/",
    },
    {
      name: "Denzel Osei",
      title: "Outreach Chair",
      imgSrc: images.denzelImage,
      description: "Information Systems, May 2027",
      linkedIn: "https://www.linkedin.com/in/denzel-osei-390812295/",
    },
    {
      name: "Ramon Mandujano III",
      title: "External Social Media Chair",
      imgSrc: images.ramonImage,
      description: "Computer Science, May 2026",
      linkedIn: "https://www.linkedin.com/in/ramonmandujano3/",
    },
    {
      name: "Constant Nortey Jr.",
      title: "Software Chair",
      imgSrc: images.constantImage,
      description: "Software Engineering, May 2026",
      linkedIn: "https://www.linkedin.com/in/constant-nortey/",
    },
    {
      name: "Philip Nsajja",
      title: "Membership Chair",
      imgSrc: images.philipImage,
      description: "Computer Science, May 2026",
      linkedIn: "https://www.linkedin.com/in/philipzn/",
    },
    {
      name: "Victor Urey",
      title: "Academic Chair",
      imgSrc: images.victorImage,
      description: "Computer Science, May 2026",
      linkedIn: "https://www.linkedin.com/in/victor-urey/",
    },
  ];

  const rows = [];

  for (let i = 0; i < boardMembers.length; i += 3) {
    rows.push(boardMembers.slice(i, i + 3));
  }
  return (
    <Container className="mt-5">
      <div
        className="hero-section"
        style={{
          backgroundSize: "100%",
          padding: "20px 0",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1 class="custom-h1">Meet Our Eboard</h1>
        <img style={{
                width: "60vw",
                height: "auto",
                filter: "brightness(70%)",
              }} src={images.eboard1} alt="" />
      </div>
      {rows.map((row, rowIndex, team) => (
        <Row
          key={rowIndex}
          className="mb-4"
          style={{
            borderRadius: "30px",
            backgroundColor: rowIndex % 2 === 0 ? "#b2f0e" : "#fff",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Col md={4}>
              <h4 className="eboard-custom-h1">{teams[rowIndex]}</h4>
            </Col>
          </div>

          {row.map((member, colIndex) => (
            <Col md={4} sm={6} key={colIndex}>
              <Card
                style={{
                  marginTop: "2%",
                  borderRadius: "30px",
                  height: "97%",
                  alignItems: "center",
                }}
              >
                <Card.Img
                  variant="top"
                  src={member.imgSrc}
                  alt={member.name}
                  style={{
                    marginTop: "5%",
                    borderRadius: "30px",
                    height: "75%",
                    width: "85%",
                  }}
                />
                <Card.Body>
                  <Card.Title>{member.title}</Card.Title>
                  <Card.Text>
                    {member.name}
                    <br />
                    {member.description}
                    <Row style={{ padding: "0.5rem" }}>
                      <a href={member.linkedIn} target="_blank">
                        <FaLinkedin size={30} />
                      </a>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default ExecutiveBoard;

import React from 'react';
import { Container, Button, Image, Row, Col, Card } from 'react-bootstrap';
import CustomNavbar from './Navbar.jsx';
import images from './Images.jsx';

import './App.css';

// const HeroSection = () => (
//   <div className="hero-section" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)', padding: '100px 0', textAlign: 'center', color: '#fff' }}>
//     <h1>Meet the Student Leaders of ColorStack at KSU!</h1>
//   </div>
// );

const ExecutiveBoard = () => {
  const teams = ["Executive Board", "Internal Team", "External Team", "Academic Team"]
  const boardMembers = [
    {
      name: 'Helena Patino Cruz',
      title: 'President',
      imgSrc: images.helenaImage,
      description: 'Software Engineering, May 2027'
    },
    {
      name: 'Geovanni Cuevas',
      title: 'Vice President',
      imgSrc: images.geoImage,
      description: 'Computer Science, Dec 2025'
    },
    {
      name: 'Amiyah Richardson',
      title: 'Founder/Alumni Chair',
      imgSrc: images.amiyahImage,
      description: 'BBA Information Systems, May 2024'
    },
    {
        name: 'Kevyn Lopez',
        title: 'Operations Chair',
        imgSrc: images.kevynImage,
        description: 'Computer Science, Dec 2025'

    },
    {
        name: 'Dennise Gonzales-Garcia',
        title: 'Secretary',
        imgSrc: images.denniseImage,
        description: 'Computer Science, May 2026'

    },
    {
        name: 'Lisbeth Martinez',
        title: 'Treasurer',
        imgSrc: images.lisbethImage,
        description: 'Game Design & Dev., May 2026'

    },
    {
        name: 'Karrington Duggins',
        title: 'Internal Social Media Chair',
        imgSrc: images.karringtonImage,
        description: 'Information Security, May 2025'

    },
    {
        name: 'Denzel Osei',
        title: 'Outreach Chair',
        imgSrc: images.denzelImage,
        description: 'Information Systems, May 2027'

    },
    {
        name: 'Ramon Mandujano III',
        title: 'External Social Media Chair',
        imgSrc: images.ramonImage,
        description: 'Computer Science, May 2026'

    },
    {
      name: 'Constant Nortey Jr.',
      title: 'Software Chair',
      imgSrc: images.constantImage,
      description: 'Software Engineering, May 2026'
    },
    {
      name: 'Philip Nsajja',
      title: 'Membership Chair',
      imgSrc: images.philipImage,
      description: 'Computer Science, May 2026'
    },
    {
      name: 'Victor Urey',
      title: 'Academic Chair',
      imgSrc: images.victorImage,
      description: 'Computer Science, May 2026'
    },
  ];

  const rows = [];
  
  for (let i = 0; i < boardMembers.length; i += 3) {
    rows.push(boardMembers.slice(i, i + 3));
  }
  return (
    <Container className="mt-5" >
      <div className="hero-section" 
        style={{ backgroundImage: `url(${images.eboardPic})`, 
          backgroundSize: '100%', 
          padding: '100px 0', 
          textAlign: 'center', 
          color: '#fff' 
        }}>
          <h1>Meet the Student Leaders of ColorStack at KSU!</h1>
      </div>
      {rows.map((row, rowIndex, team) => (
        <Row 
          key={rowIndex} 
          className="mb-4"
          style={{borderRadius:'30px' ,backgroundColor: rowIndex % 2 === 0 ? 'white' : '#feff78' }}
        >
          <h4>{teams[rowIndex]}</h4>
          {row.map((member, colIndex) => (
            <Col md={4} sm={6} key={colIndex}>
              <Card style={{marginTop:'2%', borderRadius:'30px',height:'97%',alignItems:'center'}}>
                <Card.Img variant="top" src={member.imgSrc} alt={member.name} style={{marginTop:'5%',borderRadius:'30px',height: '75%',width: '85%'}}/>
                <Card.Body>
                  <Card.Title>{member.title}</Card.Title>
                  <Card.Text>
                    {member.name}<br/>
                    {member.description}
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

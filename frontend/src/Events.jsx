import React from 'react';
import './Events.css';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import './App.css'; // Ensure the CSS file is named correctly and includes necessary styles
import Header from './assets/events1.jpg';

const upcomingEvents = [
  { id: 1, date: 'APR 06', title: 'LinkedIn Profile Power Up!', description: 'Short summary about the event to get peoples attention', imageUrl: '/path/to/image.jpg' },
  { id: 2, date: 'APR 08', title: 'Meet our First Platinum Sponsor!', description: 'Join us to celebrate our new partnership!', imageUrl: '/path/to/image2.jpg' },
  { id: 3, date: 'APR 10', title: 'Career Workshop', description: 'Essential skills for your tech career!', imageUrl: '/path/to/image3.jpg' },
];

const weeklyEvents = [
  { id: 1, day: 'Monday', event: 'Code Review Sessions' },
  { id: 2, day: 'Wednesday', event: 'Industry Talks' },
  { id: 3, day: 'Friday', event: 'Networking Happy Hour' },
];

const pastEventsImages = [
  '/path/to/pastEvent1.jpg',
  '/path/to/pastEvent2.jpg',
  '/path/to/pastEvent3.jpg',
  '/path/to/pastEvent4.jpg',
  // Include up to 10 image paths
];

const Events = () => {
  return (
    <div className="events-section">
        <div className="hero-section" 
        style={{ backgroundImage: `url(${Header})`, 
            backgroundSize: '80%', // Adjusts the size of the background image
            padding: '100px 0', 
            textAlign: 'center', 
            color: '#fff' 
        }}>
            <h1>Our Events!</h1>
        </div>
      {/* Event Banner with Text Overlay */}
      

      {/* Upcoming Events Section */}
      <Container className="my-5">
        <h2 className="text-center">Upcoming Events</h2>
        <Row>
          {upcomingEvents.map((event) => (
            <Col md={4} key={event.id}>  
              <Card>
                <Card.Img variant="top" src={event.imageUrl} />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                  <Button variant="outline-warning">Add event to calendar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Weekly Events Section */}
      <Container className="my-5">
        <h3 className="text-center">Weekly Events</h3>
        <Row>
          {weeklyEvents.map(event => (
            <Col md={4} key={event.id}>
              <div className="weekly-event">
                <h5>{event.day}</h5>
                <p>{event.event}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Past Events Carousel */}
      <Container className="my-5">
        <h2 className="text-center">Past Events</h2>
        <Carousel>
          {pastEventsImages.slice(0, 10).map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Past Event ${index + 1}`}
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Events;

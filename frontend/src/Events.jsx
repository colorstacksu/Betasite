import React from 'react';
import './Events.css';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import './App.css'; // Ensure the CSS file is named correctly and includes necessary styles
import images from './Images';
import { SiGooglecalendar, SiMicrosoftoutlook } from "react-icons/si";

const upcomingEvents = [
  { id: 1, date: 'SEP 30', title: 'Late Night w/ Nvidia', description: 'Interested in Nvidia? Join us for a chat with an engineer and recruiter from Nvidia', imageUrl: images.LateNightNvidia, 
    calendarLink: 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Late+Night+With+Nvidia&dates=20240930T230000Z/20241001T010000Z&details=Event+Details&location=ETC+Room+106',
    calendarLink2: 'https://outlook.office.com/calendar/0/deeplink/compose?subject=Late+Night+With+Nvidia&body=Event+Details&location=ETC+Room+106&startdt=2024-09-30T23:00:00Z&enddt=2024-09-31T01:00:00Z'},
  { id: 2, date: 'OCT 01', title: 'Technical Interview Prep ', description: 'Get prepared for technical interviews with Colorstack x SHPE x AT&T', imageUrl: images.TechPrepSHPEATT, 
    calendarLink: 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Technical+Interview+Prep&dates=20241001T230000Z/20241002T010000Z&details=Event+Details&location=Atrium+Building+Room+131',
    calendarLink2: 'https://outlook.office.com/calendar/0/deeplink/compose?subject=Technical+Interview+Prep&body=Event+Details&location=Atrium+Building+Room+131&startdt=2024-10-01T23:00:00Z&enddt=2024-10-02T01:00:00Z'},
  { id: 3, date: 'OCT 08', title: 'Study Session', description: 'Come study with other Colorstack members', imageUrl: images.StudySesh1008, 
    calendarLink: 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Study+Session&dates=20241008T230000Z/20241009T010000Z&details=Event+Details&location=Atrium+Building+Room+157', 
    calendarLink2: 'https://outlook.office.com/calendar/0/deeplink/compose?subject=Study+Session&body=Event+Details&location=Atrium+Building+Room+157&startdt=2024-10-08T23:00:00Z&enddt=2024-10-09T01:00:00Z'},
];

const weeklyEvents = [
  { id: 1, day: 'Monday', event: 'Code Review Sessions' },
  { id: 2, day: 'Wednesday', event: 'Industry Talks' },
  { id: 3, day: 'Friday', event: 'Networking Happy Hour' },
];

const pastEventsImages = [
  images.UberCareerFair,
  images.WelcomeBack,
  images.GoogleResume,
  images.ResumeWorkshop,
  images.IceCreamSocial,
  images.LeetCodeSesh
  // Include up to 10 image paths
];

 // Array of images
 const eventImages = [
  images.event1,
  images.event2,
  images.event3,
  images.event4,
  images.event5
];


const Events = () => {
  return (
    <div className="events-section" >
        {/* <div className="hero-section" 
        style={{ backgroundImage: `url(${images.event4})`, 
            backgroundSize: '20%', // Adjusts the size of the background image
            padding: '100px 0', 
            textAlign: 'center', 
            color: '#fff' 
        }}>
            <h1>Our Events!</h1>
        </div> */}
        <div className="hero-section" style={{ padding: '30px 0', textAlign: 'center', color: '#000' }}>
        <h1 class="custom-h1">Events</h1>
        <div className="color-inspo">
  <h2>
    Our events are catered towards the development of 
    <span className="highlight"> Technical Skills </span> and the promotion of 
    <span className="highlight"> Social WellBeing</span>.
  </h2>
</div>
    <div className="grid-container">
      <div className="grid-item img-inc" style={{ backgroundImage: `url(${images.event1})` }}></div>
      <div className="grid-item img-inc" style={{ backgroundImage: `url(${images.event3})` }}></div>
      <div className="grid-item img-inc" style={{ backgroundImage: `url(${images.event5})` }}></div>
      <div className="grid-item img-inc" style={{ backgroundImage: `url(${images.event4})` }}></div>
      <div className="grid-item img-inc" style={{ backgroundImage: `url(${images.event2})` }}></div>
    </div>
  </div>
      {/* Event Banner with Text Overlay */}
      

      {/* Upcoming Events Section */}
      <Container className="my-5">
        <h2 style={{marginBottom:'40px'}} className="text-center custom-h1">Upcoming Events</h2>
        <Row>
          {upcomingEvents.map((event) => (
            <Col md={4} key={event.id}>  
              <Card>
                <Card.Img variant="top" src={event.imageUrl} />
                <Card.Body >
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                  <a href={event.calendarLink} target='_blank'><SiGooglecalendar style={{width:'40px', height:'40px',marginRight:'10px', }}/></a>
                  <a href={event.calendarLink2} target='_blank'><SiMicrosoftoutlook style={{width:'40px', height:'40px',marginLeft:'10px'}}/></a>
                  {/* <Button href={event.calendarLink} variant="outline-warning">Add event to calendar</Button> */}
                  <p>Add to Calendar</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <br />
      {/* Weekly Events Section */}
      {/* <Container className="my-5">
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
      </Container> */}

      {/* Past Events Carousel */}
      <Container className="my-5">
  <h2 style={{marginBottom:'40px'}} className="text-center custom-h1">Past Events</h2>
  <Row>
    {/* First Carousel */}
    <Col md={6}>
      <Carousel>
        {pastEventsImages.slice(0, 3).map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 img-inc"
              src={image}
              alt={`Past Event ${index + 1}`}
              style={{ height: '400px', objectFit: 'contain' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Col>

    {/* Second Carousel */}
    <Col md={6}>
      <Carousel>
        {pastEventsImages.slice(3,6).map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 img-inc"
              src={image}
              alt={`Past Event ${index + 3}`}
              style={{ height: '400px', objectFit: 'contain' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Col>
  </Row>
</Container>

    </div>
  );
};

export default Events;

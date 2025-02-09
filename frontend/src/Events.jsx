import React from "react";
import "./Events.css";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import "./App.css"; //Ensure the CSS file is named correctly and includes necessary styles
import images from "./Images";
import { SiGooglecalendar, SiMicrosoftoutlook } from "react-icons/si";
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const upcomingEvents = [
  {
    id: 1,
    date: "2025-02-12",
    startTime: "18:30",
    endTime: "19:30",
    title: "Black History Month Panel",
    location: "Atrium J161",
    description:
      "Join us in celebrating Black History Month with a panel of industry professionals!",
    imageUrl: images.BLMflyer,
  },
  // {
  //   id: 2,
  //   date: "2024-10-23",
  //   startTime: "12:00",
  //   endTime: "13:00",
  //   location: "Atrium Building Room 131",
  //   title: "Leetcode Learning Session",
  //   description:
  //     "Join us for the second session in our leetcode series! Learn about leetcode and work in groups fofr solutions",
  //   imageUrl: images.LeetCodeSesh,
  // },
  // {
  //   id: 3,
  //   date: "2024-10-29",
  //   startTime: "18:30",
  //   endTime: "19:30",
  //   location: "ETC+Room+106",
  //   title: "Spooky Boots Movie Night",
  //   description: "Joim us for a scary time with a spooky movie screening!",
  //   imageUrl: images.SpookyMovNight
  // },
];

const weeklyEvents = [
  { id: 1, day: "Monday", event: "Code Review Sessions" },
  { id: 2, day: "Wednesday", event: "Industry Talks" },
  { id: 3, day: "Friday", event: "Networking Happy Hour" },
];

const pastEventsImages = [
  images.UberCareerFair,
  images.WelcomeBack,
  images.GoogleResume,
  images.ResumeWorkshop,
  images.IceCreamSocial,
  images.LeetCodeSesh,
  images.TechPrepSHPEATT,
  images.LateNightNvidia,
  images.GBM,
  images.SpookyMovNight,
  images.LeetCodeSesh,
  images.VisionBoardNight
  // Include up to 10 image paths
];

// Array of images
const eventImages = [
  images.event1,
  images.event2,
  images.event3,
  images.event4,
  images.event5,
];

const Events = () => {
  return (
    <div className="events-section">
      <div
        className="hero-section"
        style={{ padding: "30px 0", textAlign: "center", color: "#000" }}
      >
        <h1 class="custom-h1">Events</h1>
        <div className="color-inspo">
          <h2>
            Our events are catered towards the development of
            <span className="highlight"> Technical Skills </span> and the
            promotion of
            <span className="highlight"> Social WellBeing</span>.
          </h2>
        </div>
        <div className="grid-container">
          <div
            className="grid-item img-inc"
            style={{ backgroundImage: `url(${images.event1})` }}
          ></div>
          <div
            className="grid-item img-inc"
            style={{ backgroundImage: `url(${images.event3})` }}
          ></div>
          <div
            className="grid-item img-inc"
            style={{ backgroundImage: `url(${images.event5})` }}
          ></div>
          <div
            className="grid-item img-inc"
            style={{ backgroundImage: `url(${images.event4})` }}
          ></div>
          <div
            className="grid-item img-inc"
            style={{ backgroundImage: `url(${images.event2})` }}
          ></div>
        </div>
      </div>
      {/* Event Banner with Text Overlay */}

      {/* Upcoming Events Section */}
      <Container className="my-5" style={{alignContent:"center"}}>
        <h2 style={{ marginBottom: "40px", alignContent:"center" }} className="text-center custom-h1">
          Upcoming Events
        </h2>
        <Row className="justify-content-center">
          {upcomingEvents.map((event) => (
            <Col md={4} key={event.id}>
              <Card>
                <Card.Img variant="top" src={event.imageUrl} />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                  <br />
                  <div className="d-flex justify-content-center">
                    <AddToCalendarButton
                      name={event.title}
                      startDate={event.date}
                      startTime={event.startTime}
                      endTime={event.endTime}
                      location={event.location}
                      options={['Apple','Google','iCal', 'Outlook.com']}
                      timeZone="America/New_York"
                    />
                    </div>
                   {/*Might need to install using npm install add-to-calendar-button-react in terminal */}
                  {/* <strong>Add to Calendar</strong> */}
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
        <h2 style={{ marginBottom: "40px" }} className="text-center custom-h1">
          Past Events
        </h2>
        <Row>
          {/* First Carousel */}
          <Col md={6}>
            <Carousel>
              {pastEventsImages.slice(0, 6).map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 img-inc"
                    src={image}
                    alt={`Past Event ${index + 1}`}
                    style={{ height: "400px", objectFit: "contain" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          {/* Second Carousel */}
          <Col md={6}>
            <Carousel>
              {pastEventsImages.slice(6, 11).map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 img-inc"
                    src={image}
                    alt={`Past Event ${index + 3}`}
                    style={{ height: "400px", objectFit: "contain" }}
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

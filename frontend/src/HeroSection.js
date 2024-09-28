import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import images from "./Images";

import { useState, useEffect } from "react";

const MyComponent1 = () => {
  const [fontSize, setFontSize] = useState("50px");
  const [paraFontSize, setParaFontSize] = useState("1.5rem");

  const updateFontSize = () => {
    const width = window.innerWidth;
    if (width < 576) {
      setFontSize("6vw"); // Mobile
      setParaFontSize("3vw"); // Mobile
    } else if (width < 768) {
      setFontSize("5vw"); // Tablet
      setParaFontSize("2.5vw"); // Tablet
    } else {
      setFontSize("50px"); // Desktop
      setParaFontSize("1.5rem"); // Desktop
    }
  };

  useEffect(() => {
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
  }, []);

  return (
    <Col md={4} className="d-flex align-items-center">
      <div style={{ padding: "10px", color: "black" }}>
        <h1 className="custom-h1" style={{ fontSize }}>
          Welcome to ColorStack KSU!
        </h1>
        <p style={{ fontSize: paraFontSize }}>
          ColorStack at Kennesaw State University
        </p>
        <Button
          style={{ marginRight: "5px" }}
          href="https://app.colorstack.io/apply"
          variant="outline-warning"
        >
          Join the National Org.
        </Button>
        <Button
          style={{ marginLeft: "5px" }}
          href="https://owllife.kennesaw.edu/organization/colorstackksu"
          variant="outline-warning"
        >
          Join Colorstack KSU
        </Button>
      </div>
    </Col>
  );
};

const MyComponent2 = () => {
  const [fontSize, setFontSize] = useState("50px");
  const [paraFontSize, setParaFontSize] = useState("1.5rem");

  const updateFontSize = () => {
    const width = window.innerWidth;
    if (width < 576) {
      setFontSize("6vw"); // Mobile
      setParaFontSize("3vw"); // Mobile
    } else if (width < 768) {
      setFontSize("5vw"); // Tablet
      setParaFontSize("2.5vw"); // Tablet
    } else {
      setFontSize("50px"); // Desktop
      setParaFontSize("1.5rem"); // Desktop
    }
  };

  useEffect(() => {
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
  }, []);

  return (
    <Col md={4} className="d-flex align-items-center">
      <div style={{ padding: "10px", color: "black" }}>
        <h1 className="custom-h1" style={{ fontSize }}>
          RSVP for our Latest Events Here!
        </h1>
        <p style={{ fontSize: paraFontSize }}>
          ColorStack at Kennesaw State University
        </p>
      </div>
    </Col>
  );
};

// project designed for interns(individual attention)
// makes you comfortable, provides true life simulation
// job culture / inclusion
// 30 min technical / 30 min behavorial / Oct 17 / 11 am

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{ position: "relative", textAlign: "center", color: "white" }}
    >
      <div>
        <Row className="justify-content-start">
          {/* Column for the image */}
          <Col md={8} className="d-flex justify-content-start">
            <img
              src={images.homepage}
              alt="Background"
              style={{
                width: "60vw",
                height: "auto",
                filter: "brightness(50%)",
              }}
            />
          </Col>

          {/* Column for the text */}
          <MyComponent1 />
        </Row>
      </div>

      {/* <Row className="justify-content-center">
        {" "}
        <Col md={8}>
          <img
            src={images.homepage1}
            alt="Background"
            style={{ width: "60vw", height: "auto", filter: "brightness(50%)" }}
          />
        </Col>{" "}
      </Row> */}
      <Row className="justify-content-end">
        <MyComponent2 />
        <Col className="d-flex justify-content-end position-relative" md={8}>
          <img
            src={images.homepage}
            alt="Background"
            style={{ width: "60vw", height: "auto", filter: "brightness(50%)" }}
          />

          {/* Container for the buttons */}
          <div
            style={{
              position: "absolute",
              top: "20%", // Adjust the top position of the button container
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              justifyContent: "space-between",
              width: "50%", // Adjust the width of the button container
            }}
          >
            {/* First Button */}
            <Row
              className="position-absolute w-100"
              style={{
                marginTop: "13vw",
                marginLeft: "5.7rem",
                top: "50%", // Adjust this to control vertical placement
                left: "0",
                transform: "translateY(-50%)", // Center the buttons vertically
                display: "flex",
                justifyContent: "end",
              }}
            >
              <button
                className="rsvpButton"
                style={{ fontSize: "2vw" }}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSepWziFmDtZJE4kr3u33wStPJLi9aryICe2U4X3XyGe-QU3fw/viewform",
                    "_blank"
                  )
                }
              >
                RSVP: Late Night With Nvidia
              </button>

              {/* Second Button */}

              <button
                className="rsvpButton"
                style={{ fontSize: "2vw" }}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSf5il9DFL0tApbIdG43HDt2e4mc_y1s0sakRbjzWCnPj9IIMg/viewform",
                    "_blank"
                  )
                }
              >
                RSVP: Technical Interview Prep w SHPE x AT&T
              </button>

              {/* Third Button */}

              <button
                className="rsvpButton"
                style={{ fontSize: "2vw" }}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeKRqPVA_j2Hz8yBEs6q53PiRJ-DcQYIDsUjIdwoneLm_du-Q/viewform",
                    "_blank"
                  )
                }
              >
                RSVP: Upperclassmen Panel
              </button>
            </Row>
          </div>
        </Col>
      </Row>

      {/* <Container
        fluid
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
      </Container> */}
    </div>
  );
};

export default HeroSection;

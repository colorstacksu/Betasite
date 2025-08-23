import React, { useState } from "react";
import { Carousel } from "react-bootstrap";


import './App.css'; // Ensure the CSS file is named correctly and includes necessary styles
import images from './Images';
const pastEventsImages = [
    images.UberLogo,
    images.NvidiaLogo,
    // Include up to 10 image paths
  ];

const Sponsors = () => {
  

  return (
    <div>
        <h1 class="custom-h1">Our Sponsorship and Partners</h1>
        <Carousel>
        {pastEventsImages.slice(0,1).map((image, index) => (
          <Carousel.Item key={index}>
            <img

              className="d-block w-100"
              src={image}
              alt={`Past Event ${index + 3}`}
              style={{marginTop:'50px', marginBottom:'50px', height: '5.0rem', objectFit: 'contain' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Carousel>
        {pastEventsImages.slice(1,2).map((image, index) => (
          <Carousel.Item key={index}>
            <img

              className="d-block w-100"
              src={image}
              alt={`Past Event ${index + 3}`}
              style={{marginTop:'50px', marginBottom:'50px', height: '5.0rem', objectFit: 'contain' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
        <br />
      <h4 style={{display:'flex', alignContent:'left'}} class="eboard-custom-h1">Become a Sponsor</h4>
      <article className="color-inspo"><h4>Join us in making an impact at Kennesaw State University and the world at large</h4></article>
    </div>
  );
};

export default Sponsors;

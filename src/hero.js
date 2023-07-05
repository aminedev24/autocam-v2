import React from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./searchBox";
import heroImg1 from './BARGAINSALE-sale_n copy.jpg';
import heroImg2 from './FLASHSALE-sale_n copy.jpg';

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="carousel-container">
          <Carousel nextIcon={<span className="carousel-arrow">&#8250;</span>} prevIcon={<span className="carousel-arrow">&#8249;</span>}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={heroImg1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={heroImg2}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="vip-container">
          <h3 className="vip-header">VIP Member</h3>
          <p className="vip-text">Get discounts, special offers, and more!</p>
          <div className="vip-inputs">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Country" />
          </div>
          <div className="vip-checkbox">
            <input type="checkbox" id="agree-checkbox" />
            <label htmlFor="agree-checkbox">I agree to the terms and conditions</label>
          </div>
          <button className="vip-button">Enter Now</button>
        </div>
      </div>
      <div className="searchBox">
        <SearchBox />
      </div>
    </>
  );
}

export default Hero;

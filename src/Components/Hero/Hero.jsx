import React from "react";
import "./Hero.css";

import heroImg from "../Assets/heroImg.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-top">
        <input type="button" value="" />
      </div>
      <div className="hero-bottom">
        <div className="hero-right">
          <h3>Welcome To</h3>
          <h2>Wendy Luxury</h2>
          <p>
            {"( "}A style for every one{" )"}
          </p>
          <button>Explore Now</button>
        </div>
        <div className="hero-left">
          <img src={heroImg} alt="Wendy luxury dress" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

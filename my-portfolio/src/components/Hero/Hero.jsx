import React from "react";
import "./Hero.css";

import photo from "../../assets/photo1.jpg.jpg";

const Hero = () => {
  return (
    <div id="home" className="container-box">
      <div className="container d-flex py-3 justify-content-between align-items-center Hero-section">
        <div className="hero-right">
          <h1>
            Hi,I'm <span className="Name">Ayush Kumar</span>
          </h1>
          <p>
            Full Stack Developer passionate about creating innovative web
            solutions
          </p>
          <div className="button d-flex ">
            <button className=" primary-btn ">View My Work</button>
            <button className="  Secondary-btn">Get In Touch</button>
          </div>
        </div>
        <div className="hero-left">
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

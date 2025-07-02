// src/components/Loader.jsx
import React from "react";
import "./Loader.css";
import logo from "../assets/logo.png";

const Loader = () => {
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div className="loader-container">
      {generateStars()}
      <div className="loader-card">
        <img src={logo} alt="Logo" className="loader-logo" />
        <h1 className="loader-heading">Welcome to Automation Brain</h1>
        <p className="loader-subtext">Pakistan’s No. 1 Industrial Coding Company</p>
        <div className="typewriter-text">Your website is loading...</div>
        <div className="progress-bar">
          <div className="bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

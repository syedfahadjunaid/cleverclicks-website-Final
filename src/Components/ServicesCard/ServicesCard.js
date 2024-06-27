import React from "react";

import "./ServicesCard.css";

import ServicesCardStarsImg from "../../Assets/Services-Web-Dev/ServicesCardStarsImg.svg";

function ServicesCard({ heading, icon, text }) {
  return (
    <div className="services-card">
      <div className="services-card-top">
        <img src={ServicesCardStarsImg} alt="Stars" />
        <div>{icon}</div>
      </div>
      <div className="services-card-text">
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ServicesCard;

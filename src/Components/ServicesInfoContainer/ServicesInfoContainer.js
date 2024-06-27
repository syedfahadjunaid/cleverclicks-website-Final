import React from "react";

import "./ServicesInfoContainer.css";

import AnimatedGlobe from "../AnimatedGlobe/AnimatedGlobe";

function ServicesInfoContainer({
  leftGlobeFrontImg,
  mainHeading,
  text,
  rightSideImg,
}) {
  console.log(text);
  return (
    <div className="services-info-container">
      <div className="services-info-left">
        <AnimatedGlobe frontImage={leftGlobeFrontImg} />
      </div>
      <div className="services-info-right">
        <div className="services-info-text-section">
          <h3>{mainHeading}</h3>
          {text.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <img src={rightSideImg} alt="Info Container" />
      </div>
    </div>
  );
}

export default ServicesInfoContainer;

import React from "react";

import "./AnimatedGlobe.css";

import GlobeTopImg from "../../Assets/Globe/GlobeTopImg.png";
import GlobeBGImg from "../../Assets/Globe/GlobeBGImg.png";

function AnimatedGlobe({ frontImage }) {
  return (
    <div className="services-globe-container">
      <img src={GlobeBGImg} className="services-globe-container-background" />
      <img src={GlobeTopImg} className="services-globe-container-top" />
      <img src={frontImage} className="services-globe-container-top-main" />
    </div>
  );
}

export default AnimatedGlobe;

import React from "react";

import "../../Pages/Home/Home.css";

import AboutUsMonkeyImg from "../../Assets/AboutUs/AboutUsMonkeyImg.png";

function MonkeyComp() {
  return (
    <div className="page-bottom-monkey">
      <img src={AboutUsMonkeyImg} alt="Clever Monkey" />
    </div>
  );
}

export default MonkeyComp;

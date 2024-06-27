import React from "react";
import "./NeedHelpMain.css";

import HomeHelpBgImg from "../../Assets/Home/HomeHelpBgImg.jpeg";
import AboutUsNeedHelpImg1 from "../../Assets/AboutUs/AboutUsNeedHelpImg1.png";

import ContactForm from "../ContactForm/ContactForm";

function NeedHelpMain() {
  const needHelpStyle = {
    backgroundImage: `url("${HomeHelpBgImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="need-help-section" style={needHelpStyle}>
      <div className="need-help-left">
        <h2>Let’s Collaborate to Discuss Your Project!</h2>
        <span>
          Fill in Your Details Below and Request a Customized Brand Marketing
          Strategy Session Today!
        </span>
        <div className="need-help-left-form">
          <ContactForm />
        </div>
      </div>
      <div className="need-help-right">
        <img src={AboutUsNeedHelpImg1} alt="About" />
        <span>
          Call Us Now to Know How Our Strategies Can Help Your Brand Grow at
          Record Speed!
        </span>
        <button>Call Us Now</button>
      </div>
    </div>
  );
}

export default NeedHelpMain;

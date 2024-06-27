import React from "react";
import "./NewHelpSection.css";

import companyData from "../../CompanyData";

import QuoteForm from "../QuoteForm/QuoteForm";

import HomeHelpBgImg from "../../Assets/Home/HomeHelpBgImg.jpeg";

function NewHelpSection({textColor}) {
  const homeHelpStyle = {
    backgroundImage: `url("${HomeHelpBgImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const handleCallButtonClick = () => {
    window.location.href = `tel:${companyData.companyPhone}`;
  };

  return (
    <div className="new-help-section" style={homeHelpStyle}>
      <div className="new-help-section-left-form">
        <QuoteForm textColor={textColor}/>
      </div>
      <div className="new-help-section-border" />
      <div className="new-help-section-right">
        <p>
          Call Us Now to Know How Our Strategies Can Help Your Brand Grow at
          Record Speed!
        </p>
        <button onClick={handleCallButtonClick}>Call us now!</button>
      </div>
    </div>
  );
}

export default NewHelpSection;

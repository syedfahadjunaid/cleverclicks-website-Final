import React from "react";
import "./HomeInfoCards.css";

import { Link } from "react-router-dom";

function HomeInfoCards({ image, heading, text, pageLink }) {
  return (
    <div className="home-info-card">
      <img src={image} />
      <div className="home-info-card-text-section">
        <h4>{heading}</h4>
        <span>{text}</span>
        <Link to={pageLink}>
          <button>
            Read More&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
            >
              <path
                d="M1.55566 1.19238L10.4624 10.0991L1.55566 19.0058"
                stroke="#4F4F4F"
                stroke-width="1.78134"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeInfoCards;

import React from "react";
import "./InfoContainer.css";

import { Link } from "react-router-dom";

import ReadMoreButtonImg from "../../Assets/Home/ReadMoreButtonImg.png";
import AboutUsInfoSectionRightImg from "../../Assets/AboutUs/AboutUsInfoSectionRightImg.png";

import GlobeTopMainImg from "../../Assets/Globe/GlobeTopMainImg.png";
import GlobeTopImg from "../../Assets/Globe/GlobeTopImg.png";
import GlobeBGImg from "../../Assets/Globe/GlobeBGImg.png";

function InfoContainer({
  image,
  subheading,
  heading,
  text,
  text2,
  cardText,
  readMore,
}) {
  return (
    <div className="info-container-section">
      <div className="info-container-image-section">
        <img src={GlobeBGImg} className="info-globe-background"/>
        <img src={GlobeTopImg}  className="info-globe-top"/>
        <img src={GlobeTopMainImg}  className="info-globe-top-main"/>
      </div>
      <div className="info-container-text-section">
        <h4 className="app-yellow-text">{subheading}</h4>
        <h3>{heading}</h3>
        <p>{text}</p>
        <p>{text2}</p>

        <div className="info-container-card-section">
          <div className="info-container-card">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="37"
                viewBox="0 0 42 37"
                fill="none"
              >
                <path
                  d="M20.9736 36.012C9.96043 36.012 1 28.1586 1 18.506C1 8.85343 9.96043 1 20.9736 1C27.8146 1 34.1062 4.0174 37.8025 9.07369C37.9871 9.32514 37.9026 9.66236 37.6157 9.82415C37.3265 9.98593 36.944 9.91186 36.7594 9.66041C33.29 4.91599 27.3898 2.08572 20.9736 2.08572C10.6432 2.08572 2.23876 9.45184 2.23876 18.506C2.23876 27.5602 10.6432 34.9263 20.9736 34.9263C31.304 34.9263 39.7084 27.5602 39.7084 18.506C39.7084 18.2058 39.9864 17.9622 40.3289 17.9622C40.6714 17.9622 40.9494 18.2058 40.9494 18.506C40.9472 28.1586 31.9868 36.012 20.9736 36.012Z"
                  stroke="#FFBB00"
                  stroke-width="1.29663"
                />
                <path
                  d="M20.3365 25.1121L12.924 18.6153C12.6816 18.4028 12.6816 18.0598 12.924 17.8473C13.1664 17.6348 13.5578 17.6348 13.8002 17.8473L20.3365 23.5761L36.8563 9.09722C37.0987 8.88475 37.4901 8.88475 37.7325 9.09722C37.975 9.30968 37.975 9.65274 37.7325 9.86521L20.3365 25.1121Z"
                  stroke="#FFBB00"
                  stroke-width="1.29663"
                />
              </svg>
              {cardText[0]}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="37"
                viewBox="0 0 42 37"
                fill="none"
              >
                <path
                  d="M20.9736 36.012C9.96043 36.012 1 28.1586 1 18.506C1 8.85343 9.96043 1 20.9736 1C27.8146 1 34.1062 4.0174 37.8025 9.07369C37.9871 9.32514 37.9026 9.66236 37.6157 9.82415C37.3265 9.98593 36.944 9.91186 36.7594 9.66041C33.29 4.91599 27.3898 2.08572 20.9736 2.08572C10.6432 2.08572 2.23876 9.45184 2.23876 18.506C2.23876 27.5602 10.6432 34.9263 20.9736 34.9263C31.304 34.9263 39.7084 27.5602 39.7084 18.506C39.7084 18.2058 39.9864 17.9622 40.3289 17.9622C40.6714 17.9622 40.9494 18.2058 40.9494 18.506C40.9472 28.1586 31.9868 36.012 20.9736 36.012Z"
                  stroke="#FFBB00"
                  stroke-width="1.29663"
                />
                <path
                  d="M20.3365 25.1121L12.924 18.6153C12.6816 18.4028 12.6816 18.0598 12.924 17.8473C13.1664 17.6348 13.5578 17.6348 13.8002 17.8473L20.3365 23.5761L36.8563 9.09722C37.0987 8.88475 37.4901 8.88475 37.7325 9.09722C37.975 9.30968 37.975 9.65274 37.7325 9.86521L20.3365 25.1121Z"
                  stroke="#FFBB00"
                  stroke-width="1.29663"
                />
              </svg>
              {cardText[1]}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="37"
                viewBox="0 0 42 37"
                fill="none"
              >
                <path
                  d="M20.9736 36.012C9.96043 36.012 1 28.1586 1 18.506C1 8.85343 9.96043 1 20.9736 1C27.8146 1 34.1062 4.0174 37.8025 9.07369C37.9871 9.32514 37.9026 9.66236 37.6157 9.82415C37.3265 9.98593 36.944 9.91186 36.7594 9.66041C33.29 4.91599 27.3898 2.08572 20.9736 2.08572C10.6432 2.08572 2.23876 9.45184 2.23876 18.506C2.23876 27.5602 10.6432 34.9263 20.9736 34.9263C31.304 34.9263 39.7084 27.5602 39.7084 18.506C39.7084 18.2058 39.9864 17.9622 40.3289 17.9622C40.6714 17.9622 40.9494 18.2058 40.9494 18.506C40.9472 28.1586 31.9868 36.012 20.9736 36.012Z"
                  stroke="#FFBB00"
                  stroke-width="1.29663"
                />
                <path
                  d="M20.3365 25.1121L12.924 18.6153C12.6816 18.4028 12.6816 18.0598 12.924 17.8473C13.1664 17.6348 13.5578 17.6348 13.8002 17.8473L20.3365 23.5761L36.8563 9.09722C37.0987 8.88475 37.4901 8.88475 37.7325 9.09722C37.975 9.30968 37.975 9.65274 37.7325 9.86521L20.3365 25.1121Z"
                  stroke="#FFBB00"
                  stroke-width="1.29663"
                />
              </svg>
              {cardText[0]}
            </span>
          </div>
          {readMore == "true" ? (
            <Link to="/about-us">
              <img src={ReadMoreButtonImg} />
            </Link>
          ) : (
            <img src={AboutUsInfoSectionRightImg} alt="About Us" />
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;

import React from "react";

import "./ServicesMidContent.css";

import ServicesMidLeftBgImg from "../../Assets/Services-Web-Dev/ServiesMidLeftBgImg.png";
import ServicesMidLeftBgBigImg from "../../Assets/Services-Creative-Design/ServicesMidLeftBgBigImg.png";

import { NoBackpackSharp } from "@mui/icons-material";

function ServicesMidContent({ data }) {
  const servicesMidLeftBgStyle = {
    backgroundImage: `url("${ServicesMidLeftBgImg}")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  const servicesMidLeftBgBigStyle = {
    backgroundImage: `url("${ServicesMidLeftBgBigImg}")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="services-mid-content-container">
      <div className="services-mid-left">
        <div className="services-mid-left-text-section">
          <h3>{data.heading}</h3>
          {data.text.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {data.type === "paras" ? (
          <div className="services-mid-left-bottom-paras-mobile">
            <div>
              {data.leftContent.map((text, index) => (
                <>
                  <span key={index}>
                    {text.includes(" ") ? (
                      <span style={{ color: "#FEBB00" }}>
                        {text.split(" ")[0]} &nbsp;
                      </span>
                    ) : (
                      <span style={{ color: "#FEBB00" }}>{text}</span>
                    )}
                    {text.includes(" ")
                      ? text.substr(text.indexOf(" ") + 1)
                      : ""}
                  </span>
                  <br></br>
                  <br></br>
                </>
              ))}
            </div>
          </div>
        ) : (
          <div className="services-mid-left-bottom-mobile">
            <div>
              {data.leftContent.map((text, index) => (
                <>
                  <span key={index}>
                    {text.includes(" ") ? (
                      <span style={{ color: "#FEBB00" }}>
                        {text.split(" ")[0]} &nbsp;
                      </span>
                    ) : (
                      <span style={{ color: "#FEBB00" }}>{text}</span>
                    )}
                    {text.includes(" ")
                      ? text.substr(text.indexOf(" ") + 1)
                      : ""}
                  </span>
                  <br></br>
                </>
              ))}
            </div>
          </div>
        )}

        {data.type === "paras" ? (
          <div
            className="services-mid-left-bottom-paras"
            style={servicesMidLeftBgBigStyle}
          >
            <div>
              {data.leftContent.map((text, index) => (
                <>
                  <span key={index}>
                    {text.includes(" ") ? (
                      <span style={{ color: "#FEBB00" }}>
                        {text.split(" ")[0]} &nbsp;
                      </span>
                    ) : (
                      <span style={{ color: "#FEBB00" }}>{text}</span>
                    )}
                    {text.includes(" ")
                      ? text.substr(text.indexOf(" ") + 1)
                      : ""}
                  </span>
                  <br></br>
                </>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="services-mid-left-bottom"
            style={servicesMidLeftBgStyle}
          >
            <div>
              {data.leftContent.map((text, index) => (
                <span key={index}>
                  {text.includes(" ") ? (
                    <span style={{ color: "#FEBB00" }}>
                      {text.split(" ")[0]} &nbsp;
                    </span>
                  ) : (
                    <span style={{ color: "#FEBB00" }}>{text}</span>
                  )}
                  {text.includes(" ") ? text.substr(text.indexOf(" ") + 1) : ""}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="services-mid-right">
        <img
          className="services-div-main-img"
          src={data.mainImg}
          alt="Services"
        />
        <img
          className="services-mid-right-img"
          src={data.rightImg}
          alt="Services"
        />
      </div>
    </div>
  );
}

export default ServicesMidContent;

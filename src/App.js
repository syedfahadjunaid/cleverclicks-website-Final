import "./App.css";
import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

import { internalLinks } from "./internalLinks";

import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";

import ServicesWebDev from "./Pages/ServicesPages/ServicesWebDev/ServicesWebDev";
import ServicesBranding from "./Pages/ServicesPages/ServicesBranding/ServicesBranding";
import ServicesCreativeDesign from "./Pages/ServicesPages/ServicesCreativeDesign/ServicesCreativeDesign";
import ServicesSeo from "./Pages/ServicesPages/ServicesSeo/ServicesSeo";
import ServicesSMM from "./Pages/ServicesPages/ServicesSMM/ServicesSMM";
import ServicesPerformMarketing from "./Pages/ServicesPages/ServicesPerformMarketing/ServicesPerformMarketing";
import LandingPage from "./Pages/LandingPage/LandingPage";
import StaffAugmentation from "./Pages/StaffAugmentation/StaffAugmentation";

// const internalLinks = {
//   home: "/",
//   aboutUs: "/about-us",
//   project: "/project",
//   contact: "/contact",
//   privacyPolicy: "/privacy-policy",
//   terms: "/terms-and-conditions",
//   services: {
//     webDev: "/services/web-development",
//   },
// };

function App() {
  const [shrink, setShrink] = useState(false);

  const handleShrink = () => {
    setShrink(!shrink);
  };
  return (
    <Router>
      <div className={`App ${shrink ? "shrink" : ""}`}>
        <NavBar handleShrink={handleShrink} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route
            path='/services/web-development'
            element={<ServicesWebDev />}
          />
          <Route path='/services/branding' element={<ServicesBranding />} />
          <Route
            path='/services/creative-design'
            element={<ServicesCreativeDesign />}
          />
          <Route path='/services/seo' element={<ServicesSeo />} />
          <Route
            path='/services/social-media-management'
            element={<ServicesSMM />}
          />
          <Route
            path='/services/performance-marketing'
            element={<ServicesPerformMarketing />}
          />

          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/landing-page' element={<LandingPage />} />
          <Route path='/StaffAugmentation' element={<StaffAugmentation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./NavBar.css";

import MobileNav from "../MobileNav/MobileNav";

import MainLogo from "../../Assets/Logos/MainLogo.png";

import { Link, NavLink, useLocation } from "react-router-dom";

import { internalLinks } from "../../internalLinks";

function NavBar({ handleShrink }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPath]);

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  //   const servicesLinks = {
  //     webDev: "/web-development",
  //     digitalMarketing: "/digital-marketing",
  //     seo: "/seo-optimization",
  //     emailMarketing: "/email-marketing",
  //     contentMarketing: "/content-marketing",
  //     graphicDesign: "/graphic-design",
  //   };

  //   const internalLinks = {
  //     home: "/",
  //     aboutUs: "/about-us",
  //     project: "/project",
  //     contact: "/contact",
  //     privacyPolicy: "/privacy-policy",
  //     terms: "/terms-and-conditions",
  //   };

  console.log(currentPath);

  return (
    <nav className="main-nav">
      {isMobile ? (
        <MobileNav isMobile={isMobile} handleShrink={handleShrink} />
      ) : (
        <>
          <div className="nav-main-logo">
            <Link to={internalLinks.home}>
              <img src={MainLogo} alt="Nav Rec" />
            </Link>
          </div>
          <ul>
            <li>
              <NavLink
                to={internalLinks.home}
                className={
                  currentPath === internalLinks.home
                    ? "active-link"
                    : "inactive=link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={internalLinks.aboutUs}
                className={
                  currentPath === internalLinks.aboutUs
                    ? "active-link"
                    : "inactive=link"
                }
              >
                About us
              </NavLink>
            </li>
            <li className="main-nav-services-li">
              <span
                className={
                  currentPath.startsWith("/services")
                    ? "active-link"
                    : "inactive-link"
                }
              >
                Services
              </span>
              <ul className={`main-nav-service-menu`}>
                <li>
                  <Link to={internalLinks.services.webDev}>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to={internalLinks.services.branding}>Branding</Link>
                </li>
                <li>
                  <Link to={internalLinks.services.creativeDesign}>
                    Creative Designing
                  </Link>
                </li>
                <li>
                  <Link to={internalLinks.services.seo}>
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link to={internalLinks.services.socialMediaManagement}>
                    Social Media Management
                  </Link>
                </li>
                <li>
                  <Link to={internalLinks.services.performanceMarketing}>
                    Performance Marketing
                  </Link>
                </li>
                {/* <li>
                  <Link to={internalLinks.services.webDev}>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to={internalLinks.services.webDev}>
                    Web Development
                  </Link>
                </li> */}
              </ul>
            </li>
            {/* <Link to={internalLinks.landingPage}>Landing Page</Link> */}
            {/* <li>Project</li> */}
            <li>
              <NavLink
                to={internalLinks.contact}
                className={
                  currentPath === internalLinks.contact
                    ? "active-link"
                    : "inactive=link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div>
            <NavLink to={'/StaffAugmentation'}>
              <button className="app-yellow-buttons ">
                Staff Augmentation
              </button>
            </NavLink>
          </div>
        </>
      )}
    </nav>
  );
}

export default NavBar;

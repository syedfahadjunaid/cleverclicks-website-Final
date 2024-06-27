import React, { useRef, useEffect, useState } from "react";
import "./LandingPage.css";

import { Link } from "react-router-dom";

import QuoteForm from "../../Components/QuoteForm/QuoteForm";
import { internalLinks } from "../../internalLinks";
import NeedHelpMain from "../../Components/NeedHelpMain/NeedHelpMain";

import LandingPageBannerBgImg from "../../Assets/LandingPage/LandingPageBannerBgImg.jpeg";
import LandingPageBannerLeftImg from "../../Assets/LandingPage/LandingPageBannerLeftImg.png";
import LandingWhatWeDoMainImg from "../../Assets/LandingPage/LandingWhatWeDoMainImg.png";
import LandingWhatWeDoRightImg from "../../Assets/LandingPage/LandingWhatWeDoRightImg.png";

import LandingServicesIcon1 from "../../Assets/LandingPage/LandingServicesIcon1.png";
import LandingServicesIcon2 from "../../Assets/LandingPage/LandingServicesIcon2.png";
import LandingServicesIcon3 from "../../Assets/LandingPage/LandingServicesIcon3.png";
import LandingServicesIcon4 from "../../Assets/LandingPage/LandingServicesIcon4.png";
import LandingServicesIcon5 from "../../Assets/LandingPage/LandingServicesIcon5.png";
import LandingServicesIcon6 from "../../Assets/LandingPage/LandingServicesIcon6.png";

import BannerCarousalLeftImage from "../../Assets/LandingPage/BannerCarousalLeftImage.png";
import BannerCarousalRightImage from "../../Assets/LandingPage/BannerCarousalRightImage.png";

import LandingPageLastImg from "../../Assets/LandingPage/LandingPageLastImg.png";

import HomeClientsBgImg from "../../Assets/Home/HomeClientsBgImg.jpeg";
import HomeOurTeamCatImg from "../../Assets/Home/HomeOurTeamCatImg.png";
import HomeTeramPolygonImg from "../../Assets/Home/HomeTeramPolygon.png";
import HomeOurClientsBgImg from "../../Assets/Home/HomeOurClientsBgImg.png";
import HomeClientsDogImg from "../../Assets/Home/HomeClientsDogImg.png";

import ClientsImages from "../../Assets/Home/ClientsImages.png";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import NewHelpSection from "../../Components/NewHelpSection/NewHelpSection";
import EnquiryModal from "../../Components/EnquiryModal/EnquiryModal";

function LandingPage() {
  const [bookInterestModalOpen, setBookInterestModalOpen] = useState(false);

  const handleBookInterestModalOpen = () => {
    setBookInterestModalOpen(true);
  };

  const handleBookInterestModalClose = () => {
    setBookInterestModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      handleBookInterestModalOpen();
    }, 3000);
  }, []);

  const landingPageBannerBgStyle = {
    backgroundImage: `url("${LandingPageBannerBgImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const homeClientsStyle = {
    backgroundImage: `url("${HomeClientsBgImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const carousel = useRef(null);

  const smallFormRef = useRef(null);

  const needHelpRef = useRef(null);

  const scrollToSmallForm = () => {
    if (smallFormRef.current) {
      //   smallFormRef.current.scrollIntoView({ behavior: "smooth" });
      //   smallFormRef.current.scrollDown = 0;
      const componentPosition = smallFormRef.current.offsetTop;
      window.scrollTo({
        top: componentPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToNeedHelpForm = () => {
    if (smallFormRef.current) {
      //   smallFormRef.current.scrollIntoView({ behavior: "smooth" });
      //   smallFormRef.current.scrollDown = 0;
      const componentPosition = needHelpRef.current.offsetTop;
      window.scrollTo({
        top: componentPosition,
        behavior: "smooth",
      });
    }
  };

  const clientTestimonials = [
    {
      name: "Imran, Hawqr!",
      text: "For a few months, I've partnered with Clever Clicks, and the outcomes have exceeded my expectations. Witnessing a surge in website traffic and unprecedented social media engagement has been remarkable. Their team exhibits a wealth of expertise, creativity, and an unwavering commitment to supporting my business's growth.",
    },
    {
      name: "Sonakshi, Innisfree, India!",
      text: "The guidance of Clever Clicks in shaping our all-encompassing branding & marketing approach has played a pivotal role in propelling our business forward. Their proficiency in SEO, social media marketing, and content development has proven invaluable, resulting in a notable upsurge in both leads and conversions",
    },
    {
      name: "Dr, Khizer Junaidy, Caspian Healthcare!",
      text: "With an exceptional level of responsiveness, the Clever Clicks team consistently collaborates with us to reach our objectives. Their continual monitoring and fine-tuning of our campaigns guarantee optimal ROI. I wholeheartedly endorse them to anyone seeking a first-rate digital marketing agency.",
    },
    {
      name: "Nalin, Inidi Villas!",
      text: "Working with Clever Clicks has been a game-changer for our business. They helped us build a strong online presence and reach new audiences through targeted advertising and content marketing. The results speak for themselves, and we're grateful for their expertise and dedication.",
    },
    {
      name: "Dennis, Rocket Advisory!",
      text: "In my experience with various branding & marketing agencies, none have matched the exceptional service and results delivered by Clever Clicks. They invest time in comprehending our business and objectives, devising tailored strategies that yield tangible benefits.",
    },
    {
      name: "Leena, Oleena Shade!",
      text: "The Clever Clicks team is truly exceptional. Their contribution in revitalizing our online presence and fostering business growth via impactful social media marketing and precise advertising is commendable. Their responsiveness, dependability, and consistent willingness to exceed expectations have been instrumental in our success.",
    },
    {
      name: "Rawia, Daddy Bites!",
      text: "Working with Clever Clicks has been an incredibly positive experience. Their team is well-informed, professional, and consistently eager to assist us in reaching our marketing objectives. Since joining forces, we've observed a substantial rise in conversions and sales, and we anticipate sustaining this prosperous collaboration.",
    },
    {
      name: "Anuradha, World Investment Professionals!",
      text: "Our collaboration with Clever Clicks has spanned for months, and we are extremely pleased with the outcomes. Their contribution in establishing a powerful brand identity and reaching fresh audiences through inventive branding and marketing initiatives has been instrumental. I strongly endorse them to anyone aspiring to elevate their business.",
    },
  ];

  const homeClientTestimonialsCarousalData = clientTestimonials.map(
    (data, index) => (
      <div key={index} className="home-clients-card-main">
        <svg
          fill="#6C5719"
          height="200px"
          width="200px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 198 198"
          // xml:space="preserve"
          transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
          className="home-clients-svg-left"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path>{" "}
              <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path>{" "}
            </g>{" "}
          </g>
        </svg>

        <p>{data.text}</p>
        <h4>{data.name}</h4>
        <svg
          fill="#6C5719"
          height="200px"
          width="200px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 198 198"
          // xml:space="preserve"
          className="home-clients-svg-right"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path>{" "}
              <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
    )
  );

  return (
    <div className="landing-page-section">
      <div className="landing-page-banner" style={landingPageBannerBgStyle}>
        <div className="landing-page-banner-left">
          <img src={LandingPageBannerLeftImg} alt="Landin Page" />
        </div>
        <div className="landing-page-right">
          <QuoteForm />

          <button onClick={scrollToNeedHelpForm}>
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="80"
              viewBox="0 0 65 132"
              fill="none"
            >
              <path
                d="M6.65342 94.0949L0.775597 99.9082L32.6192 131.752L64.5273 99.9082L58.6495 94.0949L36.8176 115.927L36.8822 0.0498047H28.6145L28.5499 115.991L6.65342 94.0949Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="landing-what-we-do-section">
        <div className="landing-what-we-do-section-left">
          <h3> What We Do!</h3>
          <img src={LandingWhatWeDoMainImg} alt="What we do" />
          <button onClick={scrollToSmallForm} className="app-yellow-buttons">
            Let's Start &nbsp;{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5.5 13.5002L18 6.50023M16.25 24.0002H16.5C17.4938 16.3819 19.6891 8.96921 23.004 2.03823L23.26 1.50023L23 1.24023L22.462 1.49623C15.531 4.81121 8.11838 7.00645 0.5 8.00023V8.25023L5.5 13.2502V21.0002H5.75L7.524 19.3102C8.22291 18.645 8.99952 18.0665 9.837 17.5872L16.25 24.0002Z"
                stroke="black"
              />
            </svg>{" "}
          </button>
        </div>
        <div className="landing-what-we-do-section-right">
          <img src={LandingWhatWeDoRightImg} alt="What WE Do" />
          <h3 className="app-yellow-text">Services Offered</h3>
        </div>
      </div>
      <div ref={needHelpRef}></div>
      <NeedHelpMain />
      <div className="landing-page-services-section">
        <div className="landing-page-services-heading">
          <h3>Growth Driven Strategies & Services We Offer!</h3>
        </div>
        <div className="landing-page-service-cards">
          <Link to={internalLinks.services.webDev}>
            <div className="landing-page-services-card">
              <img src={LandingServicesIcon1} alt="Web Development" />
              <span>Web Development & Design </span>
            </div>
          </Link>
          <Link to={internalLinks.services.branding}>
            <div className="landing-page-services-card">
              <img src={LandingServicesIcon2} alt="Branding" />

              <span>Branding</span>
            </div>
          </Link>
          <Link to={internalLinks.services.creativeDesign}>
            <div className="landing-page-services-card">
              <img src={LandingServicesIcon3} alt="Creative Designing" />

              <span>Creative Designing</span>
            </div>
          </Link>
          <Link to={internalLinks.services.socialMediaManagement}>
            <div className="landing-page-services-card">
              <img src={LandingServicesIcon4} alt="Social Media management" />

              <span>Social Media Management</span>
            </div>
          </Link>
          <Link to={internalLinks.services.seo}>
            <div className="landing-page-services-card">
              <img src={LandingServicesIcon5} alt="SEO" />

              <span>SEO</span>
            </div>
          </Link>
          <Link to={internalLinks.services.performanceMarketing}>
            <div className="landing-page-services-card">
              <img src={LandingServicesIcon6} alt="Performance Marketing" />

              <span>Performance Marketing</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="home-our-clients-section" style={homeClientsStyle}>
        <div className="home-our-clients-top-text">
          <h2 className="app-yellow-text">
            Our Clients Love us and We Love Them
          </h2>
          <span>
            We've assisted outstanding brands in reaching new heights.
          </span>
        </div>

        <div className="home-clients-card">
          <button onClick={(e) => carousel?.current?.slidePrev(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="45"
              viewBox="0 0 44 45"
              fill="none"
            >
              <path
                d="M25.5208 13.3384L26.9629 14.8835L19.3402 22.6092L26.9629 30.3349L25.5208 31.88L16.2499 22.6092L25.5208 13.3384Z"
                fill="black"
              />
            </svg>
          </button>
          <AliceCarousel
            items={homeClientTestimonialsCarousalData}
            mouseTracking
            autoPlay
            autoPlayInterval={2000}
            autoPlayStrategy={"all"}
            infinite
            ref={carousel}
            disableDotsControls
            disableButtonsControls
          />
          <button onClick={(e) => carousel?.current?.slideNext(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M18.8249 13.3384L17.3828 14.8835L25.0055 22.6092L17.3828 30.3349L18.8249 31.88L28.0958 22.6092L18.8249 13.3384Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <div ref={smallFormRef}></div>

      <NewHelpSection textColor="white" />

      <img src={LandingPageLastImg} alt="Landing Page" />
      <EnquiryModal
        open={bookInterestModalOpen}
        onClose={handleBookInterestModalClose}
        setBookInterestModalOpen={setBookInterestModalOpen}
      />
    </div>
  );
}

export default LandingPage;

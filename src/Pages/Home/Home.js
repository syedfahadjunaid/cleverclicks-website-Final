import React, { useState, useRef, useEffect } from "react";
import "./Home.css";

import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import InfoContainer from "../../Components/InfoContainer/InfoContainer";
import HomeInfoCards from "../../Components/HomeInfoCards/HomeInfoCards";
import CreativeWorksSection from "../../Components/CreativeWorksSection/CreativeWorksSection";

import rotatingEarth from "../../Components/RotatingEarth/rotatingEarth";

import companyData from "../../CompanyData";

import HomeBannerImg from "../../Assets/Home/HomeBannerImg.jpeg";
import HomeInfoContImg from "../../Assets/Home/HomeInfoContImg.png";
import HomeAboutUsSinceImg from "../../Assets/Home/HomeAboutUsSinceImg.png";
import HomeAboutUsBotFrameImg from "../../Assets/Home/HomeAboutUsBotFrameImg.png";

import HomeHelpBgImg from "../../Assets/Home/HomeHelpBgImg.jpeg";

import HomeClientsBgImg from "../../Assets/Home/HomeClientsBgImg.jpeg";
import HomeOurTeamCatImg from "../../Assets/Home/HomeOurTeamCatImg.png";
import HomeTeramPolygonImg from "../../Assets/Home/HomeTeramPolygon.png";
import HomeOurClientsBgImg from "../../Assets/Home/HomeOurClientsBgImg.png";
import HomeClientsDogImg from "../../Assets/Home/HomeClientsDogImg.png";
import HomeAboutUsNewInfoBottomImg from "../../Assets/Home/HomeAboutUsNewInfoBottomImg.png";
import HomeAboutUsNewInfoMainImg from "../../Assets/Home/HomeAboutUsNewInfoMainImg.png";

import HomeBannerCardsImg1 from "../../Assets/Home/HomeBannerCardsImg1.jpeg";
import HomeBannerCardsImg2 from "../../Assets/Home/HomeBannerCardsImg2.jpeg";
import HomeBannerCardsImg3 from "../../Assets/Home/HomeBannerCardsImg3.jpeg";

import HomeInfoCardsImg1 from "../../Assets/Home/HomeInfoCardsImg1.png";
import HomeInfoCardsImg2 from "../../Assets/Home/HomeInfoCardsImg2.png";
import HomeInfoCardsImg3 from "../../Assets/Home/HomeInfoCardsImg3.png";
import HomeInfoCardsImg4 from "../../Assets/Home/HomeInfoCardsImg4.png";
import HomeInfoCardsImg5 from "../../Assets/Home/HomeInfoCardsImg5.png";
import HomeInfoCardsImg6 from "../../Assets/Home/HomeInfoCardsImg6.png";

import HomeCertificateImg1 from "../../Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg2 from "../../Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg3 from "../../Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg4 from "../../Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg5 from "../../Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg6 from "../../Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg7 from "../../Assets/Home/HomeCertificateImg1.jpeg";
import HomeCertificateImg8 from "../../Assets/Home/HomeCertificateImg1.jpeg";

import ClientsImages from "../../Assets/Home/ClientsImages.png";

import AboutUsMonkeyImg from "../../Assets/AboutUs/AboutUsMonkeyImg.png";

import GlobeTopMainImg from "../../Assets/Globe/GlobeTopMainImg.png";
import GlobeTopImg from "../../Assets/Globe/GlobeTopImg.png";
import GlobeBGImg from "../../Assets/Globe/GlobeBGImg.png";

import HomeTeamImg1 from "../../Assets/Home/HomeTeamImg1.png";
import { internalLinks } from "../../internalLinks";
import NewHelpSection from "../../Components/NewHelpSection/NewHelpSection";

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // form submission code
  };

  const homeBannerStyle = {
    backgroundImage: `url("${HomeBannerImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const homeHelpStyle = {
    backgroundImage: `url("${HomeHelpBgImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const homeClientsStyle = {
    backgroundImage: `url("${HomeClientsBgImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const homeClientsShowcaseStyle = {
    backgroundImage: `url("${HomeOurClientsBgImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const homeInfoCardsData = [
    {
      image: HomeInfoCardsImg1,
      heading: "Web development & design",
      text: "As a web development agency in Dubai we build a digital hub for your business, attracting new customers and establishing your credibility.",
      pageLink: internalLinks.services.webDev,
    },
    {
      image: HomeInfoCardsImg2,
      heading: "Branding",
      text: "Our branding agency in Dubai manages every brand aspect meticulously, from creative concepts to brand activation.",
      pageLink: internalLinks.services.branding,
    },
    {
      image: HomeInfoCardsImg3,
      heading: "Creative Designing",
      text: "We as a graphic design company in Dubai crafts tailored, meaningful designs, from creating new ones to revamping existing ones, ensuring your vision becomes reality.",
      pageLink: internalLinks.services.creativeDesign,
    },
    {
      image: HomeInfoCardsImg4,
      heading: "Social Media Management",
      text: "Being one of the trusted marketing companies in Dubai we boost business awareness, attracting and engaging audiences through the most effective social platforms.",
      pageLink: internalLinks.services.socialMediaManagement,
    },
    {
      image: HomeInfoCardsImg5,
      heading: "Search Engine Optimization",
      text: "We enhance sales prospects by developing impactful optimization strategy, ensuring that your website is the top result.",
      pageLink: internalLinks.services.seo,
    },
    {
      image: HomeInfoCardsImg6,
      heading: "Performance Marketing",
      text: "By analyzing your prior marketing strategy, we assess your campaigns' growth potential, delving deep into their performance to pinpoint relevant audiences.",
      pageLink: internalLinks.services.performanceMarketing,
    },
  ];

  const renderedHomeInfoCards = homeInfoCardsData.map((data, index) => (
    <HomeInfoCards
      image={data.image}
      pageLink={data.pageLink}
      heading={data.heading}
      text={data.text}
    />
  ));

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
      <div key={index} className='home-clients-card-main'>
        <svg
          fill='#6C5719'
          height='200px'
          width='200px'
          version='1.1'
          id='Capa_1'
          xmlns='http://www.w3.org/2000/svg'
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox='0 0 198 198'
          // xml:space="preserve"
          transform='rotate(0)matrix(-1, 0, 0, 1, 0, 0)'
          className='home-clients-svg-left'>
          <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            stroke-linecap='round'
            stroke-linejoin='round'></g>
          <g id='SVGRepo_iconCarrier'>
            {" "}
            <g>
              {" "}
              <path d='M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z'></path>{" "}
              <path d='M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z'></path>{" "}
            </g>{" "}
          </g>
        </svg>

        <p>{data.text}</p>
        <h4>{data.name}</h4>
        <svg
          fill='#6C5719'
          height='200px'
          width='200px'
          version='1.1'
          id='Capa_1'
          xmlns='http://www.w3.org/2000/svg'
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox='0 0 198 198'
          // xml:space="preserve"
          className='home-clients-svg-right'>
          <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            stroke-linecap='round'
            stroke-linejoin='round'></g>
          <g id='SVGRepo_iconCarrier'>
            {" "}
            <g>
              {" "}
              <path d='M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z'></path>{" "}
              <path d='M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z'></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
    )
  );

  const carousel = useRef(null);

  const certificates = [
    HomeCertificateImg1,
    HomeCertificateImg2,
    HomeCertificateImg3,
    HomeCertificateImg4,
    HomeCertificateImg5,
    HomeCertificateImg6,
    HomeCertificateImg7,
    HomeCertificateImg8,
  ];

  const headings = [
    "We are Today!",
    "We are Tomorrow!",
    "We are Clever Clicks.",
  ];
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      const currentHeading = document.querySelector(
        ".home-banner-text-animation h1:nth-child(" +
          (currentHeadingIndex + 1) +
          ")"
      );
      currentHeading.classList.add("slideOut");

      setTimeout(() => {
        currentHeading.classList.remove("slideOut");
        currentHeading.classList.add("slideIn");

        setCurrentHeadingIndex(
          (prevIndex) => (prevIndex + 1) % headings.length
        );
      }, 500);
    }, 3000);

    return () => {
      clearInterval(animationInterval);
    };
  }, [currentHeadingIndex]);

  const handleCallButtonClick = () => {
    window.location.href = `tel:${companyData.companyPhone}`;
  };

  const servicesRef = useRef();

  const scrollToServices = () => {
    if (servicesRef.current) {
      window.scrollTo({
        top: servicesRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='home-section app-sections'>
      <div className='home-banner-main' style={homeBannerStyle}>
        <div className='home-banner-text-section'>
          <h2>Hello There,</h2>
          <div className='home-banner-text-animation'>
            {headings.map((heading, index) => (
              <h1
                key={index}
                className={
                  index === currentHeadingIndex
                    ? "slideIn"
                    : index === (currentHeadingIndex + 1) % headings.length
                    ? "slideOut"
                    : ""
                }
                style={{
                  animationDelay: index === currentHeadingIndex ? "0s" : "0.5s", // Adjust this delay
                }}>
                {heading}
              </h1>
            ))}
          </div>
          <h2>
            Boosting Business Growth via Innovative Brand Marketing Strategy!
          </h2>

          <button onClick={scrollToServices} className='app-yellow-buttons'>
            DISCOVER MORE
          </button>
        </div>

        <div className='home-banner-cards-section'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='136'
            height='143'
            viewBox='0 0 136 143'
            fill='none'
            className='home-banner-svg-left'>
            <circle cx='46.0616' cy='52.9703' r='89.8194' fill='#FFBB00' />
          </svg>
          <div className='home-banner-card'>
            <img src={HomeBannerCardsImg1} />
            <div>
              <h4>Design your Business</h4>
              <span>
                From Ideas to Impact, We Design your Business’s Success Story!{" "}
              </span>
            </div>
          </div>
          <div className='home-banner-card'>
            <img src={HomeBannerCardsImg2} />
            <div>
              <h4>Brand Marketing </h4>
              <span>
                Paving the Path into the Digital Realm, Your Presence and Brand
                Marketing Starts Here
              </span>
            </div>
          </div>
          <div className='home-banner-card'>
            <img src={HomeBannerCardsImg3} />
            <div>
              <h4>Marketing Strategy </h4>
              <span>
                Where Marketing Strategy Meets Success, Transforming Businesses
                in Brands!
              </span>
            </div>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='148'
            height='134'
            viewBox='0 0 148 134'
            fill='none'
            className='home-banner-svg-right'>
            <circle cx='89.9444' cy='90.492' r='89.8194' fill='#6EB3EC' />
          </svg>
        </div>
      </div>

      <InfoContainer
        image={HomeInfoContImg}
        subheading='// DISCOVER OUR COMPANY'
        heading='Award-Winning Comprehensive Branding Agency Dubai!'
        text='With a strategy-first approach, our marketing agency recognizes the result-oriented plans aligned to your business goals and objectives. It includes a comprehensive online audit with the outline of messaging, services and content needed to achieve the growth targets of clients. '
        text2='Believing in the fusion of creativity, technology, and intelligence, our branding agency in Dubai join the creative minds with our developers, SEO and social media experts to create unique solutions for clients. Being one of the best marketing agencies in Dubai, Clever Clicks can develop a strategy to address your unique business requirements.'
        cardText={[
          "Being one of the leading branding and marketing companies in Dubai, we ensure developing result-oriented campaigns and strategies that define brands’ distinct experience and merits.",
          "As one of the top marketing companies in UAE, we combine collaboration and iteration, guaranteeing our continuous support throughout our branding journey",
          "Whether web design, social presence, or performance marketing, our marketing agency prioritizes impactful and focused interactions.",
        ]}
        readMore='true'
      />
      <br />

      <div className='home-sbout-us-heading'>
        <h1>ABOUT US</h1>
        <div className='home-about-us-heading-right'>
          <h4>Innovate.</h4>
          <h4>Engage.</h4>
          <h4>Succeed.</h4>
        </div>
        {/* <img src={HomeAboutUsSinceImg} /> */}
      </div>
      <div className='home-section-division' />
      <div className='home-about-us-info-top-new-section'>
        <div className='home-about-us-info-top-new-sub-section'>
          <div className='home-about-us-top-new-left'>
            <h2 className='home-about-new-heading'>
              Get Access to The Talented Brains & Supercharge Your Brand's
              Capabilities with Clever Clicks Staff{" "}
              <span className='app-yellow-text'>Augmentation</span> Services.
            </h2>
            <span>
              Clever Clicks' staff augmentation services offer the most
              effective means to enhance your team's capabilities without the
              complexities of recruitment and training.
            </span>
            <div className='home-about-new-buttons-section'>
              <Link to={internalLinks.contact}>
                <button className='app-yellow-buttons'>
                  Contact Us &nbsp;{" "}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='25'
                    viewBox='0 0 24 25'
                    fill='none'>
                    <g clip-path='url(#clip0_893_4047)'>
                      <path
                        d='M5.5 13.5002L18 6.50023M16.25 24.0002H16.5C17.4938 16.3819 19.6891 8.96921 23.004 2.03823L23.26 1.50023L23 1.24023L22.462 1.49623C15.531 4.81121 8.11838 7.00645 0.5 8.00023V8.25023L5.5 13.2502V21.0002H5.75L7.524 19.3102C8.22291 18.645 8.99952 18.0665 9.837 17.5872L16.25 24.0002Z'
                        stroke='black'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_893_4047'>
                        <rect
                          width='24'
                          height='24'
                          fill='white'
                          transform='translate(0 0.5)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </Link>
              <Link>
                <button
                  onClick={handleCallButtonClick}
                  className='home-about-us-new-call-button'>
                  Call Us Now &nbsp;{" "}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='21'
                    viewBox='0 0 20 21'
                    fill='none'>
                    <path
                      d='M13.555 13.0473L13.011 12.5313L13.555 13.0483V13.0473ZM17.001 18.7543L16.456 18.2373L17 18.7543H17.001ZM15.675 19.4643L15.749 20.2093L15.675 19.4633V19.4643ZM1.75105 5.42527C1.74573 5.32691 1.72109 5.23056 1.67853 5.14172C1.63598 5.05289 1.57634 4.9733 1.50303 4.90751C1.42972 4.84172 1.34417 4.79101 1.25126 4.75829C1.15835 4.72556 1.05991 4.71145 0.961547 4.71677C0.863187 4.72209 0.766838 4.74673 0.678 4.78928C0.589163 4.83184 0.509577 4.89147 0.443787 4.96479C0.377996 5.0381 0.32729 5.12365 0.294563 5.21656C0.261836 5.30947 0.247729 5.40791 0.253047 5.50627L1.75105 5.42527ZM2.71705 1.59227C2.58571 1.73741 2.51632 1.92814 2.5237 2.12375C2.53107 2.31935 2.61462 2.50432 2.75651 2.63916C2.8984 2.774 3.08738 2.84802 3.28311 2.84543C3.47883 2.84283 3.66578 2.76383 3.80405 2.62527L2.71705 1.59227ZM8.66305 18.3123C8.74644 18.366 8.83968 18.4027 8.93734 18.4201C9.03501 18.4376 9.13517 18.4355 9.23202 18.414C9.32888 18.3925 9.4205 18.3519 9.50158 18.2948C9.58266 18.2376 9.65159 18.1649 9.70437 18.0809C9.75716 17.9969 9.79275 17.9032 9.80909 17.8054C9.82543 17.7075 9.82219 17.6074 9.79956 17.5108C9.77693 17.4142 9.73535 17.323 9.67725 17.2426C9.61914 17.1622 9.54566 17.0941 9.46105 17.0423L8.66305 18.3123ZM13.112 18.5583C12.9172 18.5176 12.7143 18.5559 12.5477 18.6649C12.3812 18.7738 12.2648 18.9445 12.224 19.1393C12.1833 19.3341 12.2217 19.5371 12.3306 19.7036C12.4396 19.8701 12.6102 19.9866 12.805 20.0273L13.112 18.5583ZM13.644 14.0443L14.099 13.5643L13.011 12.5313L12.556 13.0113L13.644 14.0443ZM15.598 13.3623L17.508 14.4623L18.256 13.1623L16.346 12.0623L15.598 13.3623ZM17.877 16.7423L16.456 18.2373L17.544 19.2713L18.964 17.7753L17.877 16.7423ZM6.35805 14.4593C2.48205 10.3783 1.83205 6.93527 1.75105 5.42527L0.253047 5.50627C0.353047 7.35627 1.13705 11.1403 5.27105 15.4923L6.35805 14.4593ZM7.73405 7.82227L8.02005 7.52027L6.93305 6.48727L6.64605 6.78927L7.73405 7.82227ZM8.24605 3.76027L6.98505 1.97727L5.76005 2.84327L7.02005 4.62627L8.24605 3.76027ZM7.18905 7.30527C7.00907 7.13183 6.82739 6.96015 6.64405 6.79027L6.64205 6.79227L6.63905 6.79527C6.62129 6.81364 6.6046 6.83301 6.58905 6.85327C6.49102 6.98302 6.41346 7.12703 6.35905 7.28027C6.26105 7.55527 6.20905 7.91927 6.27505 8.37327C6.40505 9.26527 6.99005 10.4643 8.51705 12.0733L9.60505 11.0393C8.17705 9.53627 7.82505 8.61127 7.75905 8.15527C7.72705 7.93527 7.75905 7.82027 7.77205 7.78327L7.78005 7.76427C7.76953 7.78128 7.75712 7.79705 7.74305 7.81127L7.73805 7.81627C7.73709 7.81731 7.73609 7.81832 7.73505 7.81927L7.73405 7.82027C7.73405 7.82027 7.73305 7.82227 7.18905 7.30527ZM8.51705 12.0723C10.04 13.6763 11.19 14.3063 12.067 14.4493C12.518 14.5223 12.883 14.4633 13.159 14.3543C13.312 14.2942 13.4541 14.2098 13.58 14.1043L13.616 14.0703L13.63 14.0563L13.637 14.0503L13.64 14.0473L13.641 14.0453C13.641 14.0453 13.643 14.0443 13.099 13.5273C12.555 13.0113 12.556 13.0103 12.556 13.0093L12.558 13.0083L12.56 13.0053L12.566 13.0003C12.5812 12.9857 12.5968 12.9717 12.613 12.9583C12.622 12.9523 12.621 12.9543 12.608 12.9593C12.588 12.9673 12.498 12.9993 12.308 12.9683C11.906 12.9023 11.038 12.5483 9.60505 11.0393L8.51705 12.0723ZM6.98505 1.97727C5.97105 0.543272 3.94305 0.300272 2.71705 1.59227L3.80405 2.62527C4.32705 2.07527 5.24805 2.11827 5.76005 2.84327L6.98505 1.97727ZM16.456 18.2373C16.177 18.5313 15.886 18.6893 15.602 18.7173L15.749 20.2093C16.496 20.1363 17.101 19.7383 17.544 19.2713L16.456 18.2383V18.2373ZM8.02005 7.52027C8.98905 6.50027 9.05605 4.90727 8.24605 3.76027L7.02105 4.62627C7.44305 5.22327 7.37805 6.01827 6.93305 6.48627L8.02005 7.52027ZM17.508 14.4623C18.329 14.9353 18.49 16.0973 17.877 16.7423L18.964 17.7753C20.269 16.4013 19.888 14.1023 18.256 13.1623L17.508 14.4623ZM14.099 13.5643C14.484 13.1583 15.085 13.0673 15.598 13.3623L16.346 12.0623C15.247 11.4303 13.886 11.6113 13.011 12.5313L14.099 13.5643ZM9.46105 17.0423C8.47705 16.4243 7.43105 15.5883 6.35805 14.4593L5.27105 15.4923C6.42505 16.7073 7.56805 17.6243 8.66305 18.3123L9.46105 17.0423ZM15.601 18.7173C14.7681 18.7904 13.9289 18.7368 13.112 18.5583L12.805 20.0273C13.7715 20.2366 14.7642 20.298 15.749 20.2093L15.602 18.7173H15.601Z'
                      fill='#3D3D3D'
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className='home-about-us-top-new-right'>
            <img src={HomeAboutUsNewInfoMainImg} alt='About Us Main' />
          </div>
        </div>
        <div className='home-about-us-new-bottom'>
          <img src={HomeAboutUsNewInfoBottomImg} alt='About US' />
        </div>
      </div>
      {/* <div className="home-need-help-section" style={homeHelpStyle}>
        <div className="home-help-left">
          <h3>Let’s Collaborate to Discuss Your Project!</h3>
          <span>
            Fill in Your Details Below and Request a Customized Brand Marketing
            Strategy Session Today!
          </span>
          <div className="home-help-left-input-section">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="home-help-input-border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z"
                    fill="#3D3D3D"
                  />
                </svg>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  {...register("name", { required: true })}
                />
                {errors.name && <p>This field is required</p>}
              </div>
              <div className="home-help-input-border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 15 12"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.39844 2.55357V9.61748C1.39844 10.0858 1.5845 10.535 1.91568 10.8662C2.24686 11.1974 2.69605 11.3835 3.16441 11.3835H11.9943C12.4627 11.3835 12.9118 11.1974 13.243 10.8662C13.5742 10.535 13.7603 10.0858 13.7603 9.61748V2.55357C13.7603 2.08521 13.5742 1.63602 13.243 1.30484C12.9118 0.973655 12.4627 0.787598 11.9943 0.787598H3.16441C2.69605 0.787598 2.24686 0.973655 1.91568 1.30484C1.5845 1.63602 1.39844 2.08521 1.39844 2.55357Z"
                    stroke="black"
                    stroke-width="0.882988"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.16406 3.43652L7.579 6.08549L11.9939 3.43652"
                    stroke="black"
                    stroke-width="0.882988"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  {...register("email", { required: true })}
                />
                {errors.email && <p>This field is required</p>}
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M15.2298 10.7567L11.4609 9.06793L11.4505 9.06313C11.2549 8.97944 11.0414 8.94586 10.8295 8.96541C10.6176 8.98497 10.4139 9.05705 10.2369 9.17513C10.2161 9.18889 10.196 9.20385 10.1769 9.21993L8.22969 10.8799C6.99608 10.2807 5.72246 9.01673 5.12326 7.79911L6.78567 5.82229C6.80167 5.80229 6.81687 5.78229 6.83127 5.76069C6.94682 5.58413 7.01692 5.38175 7.03534 5.17155C7.05377 4.96135 7.01994 4.74985 6.93687 4.55588V4.54628L5.24326 0.771045C5.13345 0.517655 4.94464 0.306573 4.705 0.169311C4.46537 0.0320479 4.18777 -0.0240334 3.91365 0.0094382C2.82961 0.152085 1.83457 0.684459 1.11436 1.50713C0.394161 2.3298 -0.00195276 3.3865 7.23898e-06 4.47988C7.23898e-06 10.8319 5.16806 16 11.5201 16C12.6135 16.002 13.6702 15.6058 14.4929 14.8856C15.3155 14.1654 15.8479 13.1704 15.9906 12.0864C16.0241 11.8123 15.9681 11.5348 15.831 11.2952C15.6939 11.0556 15.483 10.8667 15.2298 10.7567ZM11.5201 14.72C8.80519 14.717 6.2023 13.6372 4.28255 11.7174C2.3628 9.7977 1.28298 7.19481 1.28002 4.47988C1.27701 3.69867 1.55846 2.94306 2.07182 2.35419C2.58517 1.76531 3.29532 1.38342 4.06965 1.27985C4.06933 1.28304 4.06933 1.28626 4.06965 1.28945L5.74966 5.04949L4.09605 7.02871C4.07926 7.04802 4.06402 7.06861 4.05045 7.09031C3.93006 7.27504 3.85943 7.48775 3.84542 7.7078C3.8314 7.92786 3.87447 8.1478 3.97045 8.34632C4.69525 9.82873 6.18887 11.3111 7.68728 12.0352C7.88726 12.1302 8.10847 12.1718 8.32932 12.1558C8.55017 12.1398 8.7631 12.0668 8.94729 11.944C8.96783 11.9301 8.9876 11.9152 9.0065 11.8992L10.9513 10.2399L14.7114 11.924H14.7202C14.6178 12.6994 14.2365 13.411 13.6475 13.9256C13.0586 14.4402 12.3023 14.7226 11.5201 14.72Z"
                    fill="#3D3D3D"
                  />
                </svg>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value: /^\+?\d{8,}$/,
                      message:
                        "Invalid phone number (minimum 8 digits required)",
                    },
                  })}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
              </div>
              <button type="submit">Get a Quote</button>
            </form>
          </div>
        </div>
        <div className="home-help-border" />
        <div className="home-help-right">
          <p>
            Call Us Now to Know How Our Strategies Can Help Your Brand Grow at
            Record Speed!
          </p>
          <button onClick={handleCallButtonClick}>Call us now!</button>
        </div>
      </div> */}
      <NewHelpSection />
      <div className='home-about-us-info-section' ref={servicesRef}>
        <div className='home-about-us-background-layer'>
          <img src={HomeAboutUsBotFrameImg} />
          <h1>SERVICES</h1>
        </div>
        <div className='home-about-us-info-top'>
          <h3>What We Offer!</h3>
          <span>
            We are one of the trusted branding companies in Dubai utilizing our
            in-depth understanding of human needs and behaviors, we'll provide
            guidance on optimal solutions and craft tailored brand marketing
            strategies exclusively for you.
          </span>
          <div className='home-about-us-info-top-cards-section'>
            {renderedHomeInfoCards}
          </div>
        </div>
      </div>

      <CreativeWorksSection />

      <div className='home-our-clients-section' style={homeClientsStyle}>
        <div className='home-our-clients-top-text'>
          <h2 className='app-yellow-text'>
            Our Clients Love us and We Love Them
          </h2>
          <span>
            We've assisted outstanding brands in reaching new heights.
          </span>
        </div>

        <div className='home-clients-card'>
          <button onClick={(e) => carousel?.current?.slidePrev(e)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='44'
              height='45'
              viewBox='0 0 44 45'
              fill='none'>
              <path
                d='M25.5208 13.3384L26.9629 14.8835L19.3402 22.6092L26.9629 30.3349L25.5208 31.88L16.2499 22.6092L25.5208 13.3384Z'
                fill='black'
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
              xmlns='http://www.w3.org/2000/svg'
              width='45'
              height='45'
              viewBox='0 0 45 45'
              fill='none'>
              <path
                d='M18.8249 13.3384L17.3828 14.8835L25.0055 22.6092L17.3828 30.3349L18.8249 31.88L28.0958 22.6092L18.8249 13.3384Z'
                fill='black'
              />
            </svg>
          </button>
        </div>
      </div>
      {/* <div className="home-our-team-section">
        <div className="home-our-team-top-section">
          <div className="home-team-top-img">
            <img src={HomeOurTeamCatImg} alt="our team" />
          </div>
          <div className="home-team-top-text">
            <h3 className="app-yellow-text">// MEET OUT TEAM MEMBERS</h3>
            <h2>Our Team</h2>
            <span>
              As one of the reliable marketing companies in UAE, we offer
              practical experience, not just only theoretical knowledge, in
              managing and expanding online brands and businesses.
            </span>
          </div>
        </div>
        <div className="home-our-team-mid-section">
          <div className="home-team-mid-top">
            <div className="home-team-hex">
              <div className="home-team-hex-image-section">
                <img
                  className="home-team-hex-top-img"
                  src={HomeTeamImg1}
                  alt="Team members"
                />
                <img src={HomeTeramPolygonImg} alt="polygon" />
              </div>
              <div className="home-team-hex-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="102"
                  height="87"
                  viewBox="0 0 102 87"
                  fill="none"
                >
                  <path
                    d="M96.3341 84C96.3341 85.4728 97.528 86.6667 99.0008 86.6667C100.474 86.6667 101.667 85.4728 101.667 84C101.667 82.5272 100.474 81.3333 99.0008 81.3333C97.528 81.3333 96.3341 82.5272 96.3341 84ZM3.01966 0.863839C2.79869 1.64459 2.59164 2.44843 2.40022 3.27342L3.37434 3.49945C3.56221 2.68978 3.76529 1.90137 3.98186 1.13616L3.01966 0.863839ZM1.49439 8.16167C1.2696 9.76067 1.1046 11.4155 1.0092 13.1151L2.00763 13.1712C2.10145 11.4996 2.2637 9.87256 2.48466 8.30089L1.49439 8.16167ZM0.934843 18.0984C0.977425 19.7247 1.08627 21.3801 1.26897 23.0561L2.26308 22.9477C2.08343 21.2997 1.97638 19.6718 1.9345 18.0722L0.934843 18.0984ZM2.01602 27.9837C2.3286 29.5864 2.71269 31.2 3.17458 32.8176L4.13615 32.543C3.68228 30.9536 3.30479 29.3677 2.99753 27.7922L2.01602 27.9837ZM4.74877 37.542C5.33322 39.0699 5.9924 40.5952 6.73158 42.1119L7.63051 41.6738C6.90444 40.184 6.25692 38.6857 5.68277 37.1848L4.74877 37.542ZM9.10361 46.4801C9.94401 47.8777 10.8587 49.2628 11.852 50.6304L12.6611 50.0427C11.685 48.6987 10.7862 47.3378 9.96062 45.9648L9.10361 46.4801ZM14.9494 54.5347C16.0127 55.7652 17.1468 56.9766 18.3549 58.1652L19.0562 57.4524C17.8672 56.2826 16.7516 55.0908 15.706 53.8808L14.9494 54.5347ZM22.0255 61.5077C23.2629 62.5517 24.5649 63.5735 25.934 64.5701L26.5225 63.7616C25.1725 62.7789 23.8893 61.7718 22.6704 60.7434L22.0255 61.5077ZM30.0445 67.3556C31.4128 68.2186 32.8389 69.0584 34.3248 69.8728L34.8055 68.9959C33.3372 68.1912 31.9287 67.3617 30.578 66.5098L30.0445 67.3556ZM38.7476 72.1347C40.2103 72.8322 41.7244 73.5067 43.2913 74.1566L43.6744 73.2329C42.1231 72.5895 40.6248 71.922 39.178 71.2321L38.7476 72.1347ZM47.9106 75.944C49.4254 76.49 50.9848 77.0144 52.59 77.516L52.8883 76.5615C51.2965 76.0641 49.7506 75.5443 48.2497 75.0033L47.9106 75.944ZM57.339 78.896C58.9044 79.3179 60.5098 79.7194 62.1561 80.0994L62.381 79.125C60.7463 78.7477 59.1527 78.3491 57.5992 77.9304L57.339 78.896ZM67.0235 81.1359C68.6003 81.4445 70.2118 81.7344 71.8589 82.0048L72.0209 81.0181C70.3837 80.7492 68.7821 80.4612 67.2156 80.1546L67.0235 81.1359ZM76.7578 82.7369C78.3734 82.9552 80.0209 83.1556 81.7011 83.3376L81.8088 82.3434C80.1372 82.1624 78.4984 81.963 76.8917 81.7459L76.7578 82.7369ZM86.5834 83.8059C88.2085 83.9423 89.8625 84.062 91.5456 84.1647L91.6065 83.1665C89.9308 83.0643 88.2844 82.9451 86.667 82.8094L86.5834 83.8059ZM96.4651 84.4122C97.2985 84.4454 98.1388 84.4747 98.9859 84.4998L99.0156 83.5002C98.1718 83.4752 97.335 83.4461 96.5049 83.413L96.4651 84.4122Z"
                    fill="black"
                  />
                </svg>
                <span>
                  <h3>Name</h3>
                  Designation
                </span>
              </div>
            </div>
            <div className="home-team-hex">
              <div className="home-team-hex-image-section">
                <img
                  className="home-team-hex-top-img"
                  src={HomeTeamImg1}
                  alt="Team members"
                />
                <img src={HomeTeramPolygonImg} alt="polygon" />
              </div>
              <div className="home-team-hex-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="102"
                  height="87"
                  viewBox="0 0 102 87"
                  fill="none"
                >
                  <path
                    d="M96.3341 84C96.3341 85.4728 97.528 86.6667 99.0008 86.6667C100.474 86.6667 101.667 85.4728 101.667 84C101.667 82.5272 100.474 81.3333 99.0008 81.3333C97.528 81.3333 96.3341 82.5272 96.3341 84ZM3.01966 0.863839C2.79869 1.64459 2.59164 2.44843 2.40022 3.27342L3.37434 3.49945C3.56221 2.68978 3.76529 1.90137 3.98186 1.13616L3.01966 0.863839ZM1.49439 8.16167C1.2696 9.76067 1.1046 11.4155 1.0092 13.1151L2.00763 13.1712C2.10145 11.4996 2.2637 9.87256 2.48466 8.30089L1.49439 8.16167ZM0.934843 18.0984C0.977425 19.7247 1.08627 21.3801 1.26897 23.0561L2.26308 22.9477C2.08343 21.2997 1.97638 19.6718 1.9345 18.0722L0.934843 18.0984ZM2.01602 27.9837C2.3286 29.5864 2.71269 31.2 3.17458 32.8176L4.13615 32.543C3.68228 30.9536 3.30479 29.3677 2.99753 27.7922L2.01602 27.9837ZM4.74877 37.542C5.33322 39.0699 5.9924 40.5952 6.73158 42.1119L7.63051 41.6738C6.90444 40.184 6.25692 38.6857 5.68277 37.1848L4.74877 37.542ZM9.10361 46.4801C9.94401 47.8777 10.8587 49.2628 11.852 50.6304L12.6611 50.0427C11.685 48.6987 10.7862 47.3378 9.96062 45.9648L9.10361 46.4801ZM14.9494 54.5347C16.0127 55.7652 17.1468 56.9766 18.3549 58.1652L19.0562 57.4524C17.8672 56.2826 16.7516 55.0908 15.706 53.8808L14.9494 54.5347ZM22.0255 61.5077C23.2629 62.5517 24.5649 63.5735 25.934 64.5701L26.5225 63.7616C25.1725 62.7789 23.8893 61.7718 22.6704 60.7434L22.0255 61.5077ZM30.0445 67.3556C31.4128 68.2186 32.8389 69.0584 34.3248 69.8728L34.8055 68.9959C33.3372 68.1912 31.9287 67.3617 30.578 66.5098L30.0445 67.3556ZM38.7476 72.1347C40.2103 72.8322 41.7244 73.5067 43.2913 74.1566L43.6744 73.2329C42.1231 72.5895 40.6248 71.922 39.178 71.2321L38.7476 72.1347ZM47.9106 75.944C49.4254 76.49 50.9848 77.0144 52.59 77.516L52.8883 76.5615C51.2965 76.0641 49.7506 75.5443 48.2497 75.0033L47.9106 75.944ZM57.339 78.896C58.9044 79.3179 60.5098 79.7194 62.1561 80.0994L62.381 79.125C60.7463 78.7477 59.1527 78.3491 57.5992 77.9304L57.339 78.896ZM67.0235 81.1359C68.6003 81.4445 70.2118 81.7344 71.8589 82.0048L72.0209 81.0181C70.3837 80.7492 68.7821 80.4612 67.2156 80.1546L67.0235 81.1359ZM76.7578 82.7369C78.3734 82.9552 80.0209 83.1556 81.7011 83.3376L81.8088 82.3434C80.1372 82.1624 78.4984 81.963 76.8917 81.7459L76.7578 82.7369ZM86.5834 83.8059C88.2085 83.9423 89.8625 84.062 91.5456 84.1647L91.6065 83.1665C89.9308 83.0643 88.2844 82.9451 86.667 82.8094L86.5834 83.8059ZM96.4651 84.4122C97.2985 84.4454 98.1388 84.4747 98.9859 84.4998L99.0156 83.5002C98.1718 83.4752 97.335 83.4461 96.5049 83.413L96.4651 84.4122Z"
                    fill="black"
                  />
                </svg>
                <span>
                  <h3>Name</h3>
                  Designation
                </span>
              </div>
            </div>
          </div>
          <div className="home-team-mid-bottom">
            <div className="home-team-hex">
              <div className="home-team-hex-image-section">
                <img
                  className="home-team-hex-top-img"
                  src={HomeTeamImg1}
                  alt="Team members"
                />
                <img src={HomeTeramPolygonImg} alt="polygon" />
              </div>
              <div className="home-team-hex-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="102"
                  height="87"
                  viewBox="0 0 102 87"
                  fill="none"
                >
                  <path
                    d="M96.3341 84C96.3341 85.4728 97.528 86.6667 99.0008 86.6667C100.474 86.6667 101.667 85.4728 101.667 84C101.667 82.5272 100.474 81.3333 99.0008 81.3333C97.528 81.3333 96.3341 82.5272 96.3341 84ZM3.01966 0.863839C2.79869 1.64459 2.59164 2.44843 2.40022 3.27342L3.37434 3.49945C3.56221 2.68978 3.76529 1.90137 3.98186 1.13616L3.01966 0.863839ZM1.49439 8.16167C1.2696 9.76067 1.1046 11.4155 1.0092 13.1151L2.00763 13.1712C2.10145 11.4996 2.2637 9.87256 2.48466 8.30089L1.49439 8.16167ZM0.934843 18.0984C0.977425 19.7247 1.08627 21.3801 1.26897 23.0561L2.26308 22.9477C2.08343 21.2997 1.97638 19.6718 1.9345 18.0722L0.934843 18.0984ZM2.01602 27.9837C2.3286 29.5864 2.71269 31.2 3.17458 32.8176L4.13615 32.543C3.68228 30.9536 3.30479 29.3677 2.99753 27.7922L2.01602 27.9837ZM4.74877 37.542C5.33322 39.0699 5.9924 40.5952 6.73158 42.1119L7.63051 41.6738C6.90444 40.184 6.25692 38.6857 5.68277 37.1848L4.74877 37.542ZM9.10361 46.4801C9.94401 47.8777 10.8587 49.2628 11.852 50.6304L12.6611 50.0427C11.685 48.6987 10.7862 47.3378 9.96062 45.9648L9.10361 46.4801ZM14.9494 54.5347C16.0127 55.7652 17.1468 56.9766 18.3549 58.1652L19.0562 57.4524C17.8672 56.2826 16.7516 55.0908 15.706 53.8808L14.9494 54.5347ZM22.0255 61.5077C23.2629 62.5517 24.5649 63.5735 25.934 64.5701L26.5225 63.7616C25.1725 62.7789 23.8893 61.7718 22.6704 60.7434L22.0255 61.5077ZM30.0445 67.3556C31.4128 68.2186 32.8389 69.0584 34.3248 69.8728L34.8055 68.9959C33.3372 68.1912 31.9287 67.3617 30.578 66.5098L30.0445 67.3556ZM38.7476 72.1347C40.2103 72.8322 41.7244 73.5067 43.2913 74.1566L43.6744 73.2329C42.1231 72.5895 40.6248 71.922 39.178 71.2321L38.7476 72.1347ZM47.9106 75.944C49.4254 76.49 50.9848 77.0144 52.59 77.516L52.8883 76.5615C51.2965 76.0641 49.7506 75.5443 48.2497 75.0033L47.9106 75.944ZM57.339 78.896C58.9044 79.3179 60.5098 79.7194 62.1561 80.0994L62.381 79.125C60.7463 78.7477 59.1527 78.3491 57.5992 77.9304L57.339 78.896ZM67.0235 81.1359C68.6003 81.4445 70.2118 81.7344 71.8589 82.0048L72.0209 81.0181C70.3837 80.7492 68.7821 80.4612 67.2156 80.1546L67.0235 81.1359ZM76.7578 82.7369C78.3734 82.9552 80.0209 83.1556 81.7011 83.3376L81.8088 82.3434C80.1372 82.1624 78.4984 81.963 76.8917 81.7459L76.7578 82.7369ZM86.5834 83.8059C88.2085 83.9423 89.8625 84.062 91.5456 84.1647L91.6065 83.1665C89.9308 83.0643 88.2844 82.9451 86.667 82.8094L86.5834 83.8059ZM96.4651 84.4122C97.2985 84.4454 98.1388 84.4747 98.9859 84.4998L99.0156 83.5002C98.1718 83.4752 97.335 83.4461 96.5049 83.413L96.4651 84.4122Z"
                    fill="black"
                  />
                </svg>
                <span>
                  <h3>Name</h3>
                  Designation
                </span>
              </div>
            </div>
            <div className="home-team-hex">
              <div className="home-team-hex-image-section">
                <img
                  className="home-team-hex-top-img"
                  src={HomeTeamImg1}
                  alt="Team members"
                />
                <img src={HomeTeramPolygonImg} alt="polygon" />
              </div>
              <div className="home-team-hex-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="102"
                  height="87"
                  viewBox="0 0 102 87"
                  fill="none"
                >
                  <path
                    d="M96.3341 84C96.3341 85.4728 97.528 86.6667 99.0008 86.6667C100.474 86.6667 101.667 85.4728 101.667 84C101.667 82.5272 100.474 81.3333 99.0008 81.3333C97.528 81.3333 96.3341 82.5272 96.3341 84ZM3.01966 0.863839C2.79869 1.64459 2.59164 2.44843 2.40022 3.27342L3.37434 3.49945C3.56221 2.68978 3.76529 1.90137 3.98186 1.13616L3.01966 0.863839ZM1.49439 8.16167C1.2696 9.76067 1.1046 11.4155 1.0092 13.1151L2.00763 13.1712C2.10145 11.4996 2.2637 9.87256 2.48466 8.30089L1.49439 8.16167ZM0.934843 18.0984C0.977425 19.7247 1.08627 21.3801 1.26897 23.0561L2.26308 22.9477C2.08343 21.2997 1.97638 19.6718 1.9345 18.0722L0.934843 18.0984ZM2.01602 27.9837C2.3286 29.5864 2.71269 31.2 3.17458 32.8176L4.13615 32.543C3.68228 30.9536 3.30479 29.3677 2.99753 27.7922L2.01602 27.9837ZM4.74877 37.542C5.33322 39.0699 5.9924 40.5952 6.73158 42.1119L7.63051 41.6738C6.90444 40.184 6.25692 38.6857 5.68277 37.1848L4.74877 37.542ZM9.10361 46.4801C9.94401 47.8777 10.8587 49.2628 11.852 50.6304L12.6611 50.0427C11.685 48.6987 10.7862 47.3378 9.96062 45.9648L9.10361 46.4801ZM14.9494 54.5347C16.0127 55.7652 17.1468 56.9766 18.3549 58.1652L19.0562 57.4524C17.8672 56.2826 16.7516 55.0908 15.706 53.8808L14.9494 54.5347ZM22.0255 61.5077C23.2629 62.5517 24.5649 63.5735 25.934 64.5701L26.5225 63.7616C25.1725 62.7789 23.8893 61.7718 22.6704 60.7434L22.0255 61.5077ZM30.0445 67.3556C31.4128 68.2186 32.8389 69.0584 34.3248 69.8728L34.8055 68.9959C33.3372 68.1912 31.9287 67.3617 30.578 66.5098L30.0445 67.3556ZM38.7476 72.1347C40.2103 72.8322 41.7244 73.5067 43.2913 74.1566L43.6744 73.2329C42.1231 72.5895 40.6248 71.922 39.178 71.2321L38.7476 72.1347ZM47.9106 75.944C49.4254 76.49 50.9848 77.0144 52.59 77.516L52.8883 76.5615C51.2965 76.0641 49.7506 75.5443 48.2497 75.0033L47.9106 75.944ZM57.339 78.896C58.9044 79.3179 60.5098 79.7194 62.1561 80.0994L62.381 79.125C60.7463 78.7477 59.1527 78.3491 57.5992 77.9304L57.339 78.896ZM67.0235 81.1359C68.6003 81.4445 70.2118 81.7344 71.8589 82.0048L72.0209 81.0181C70.3837 80.7492 68.7821 80.4612 67.2156 80.1546L67.0235 81.1359ZM76.7578 82.7369C78.3734 82.9552 80.0209 83.1556 81.7011 83.3376L81.8088 82.3434C80.1372 82.1624 78.4984 81.963 76.8917 81.7459L76.7578 82.7369ZM86.5834 83.8059C88.2085 83.9423 89.8625 84.062 91.5456 84.1647L91.6065 83.1665C89.9308 83.0643 88.2844 82.9451 86.667 82.8094L86.5834 83.8059ZM96.4651 84.4122C97.2985 84.4454 98.1388 84.4747 98.9859 84.4998L99.0156 83.5002C98.1718 83.4752 97.335 83.4461 96.5049 83.413L96.4651 84.4122Z"
                    fill="black"
                  />
                </svg>
                <span>
                  <h3>Name</h3>
                  Designation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className='home-our-clients-showcase-section'>
        <img src={HomeClientsDogImg} alt='Dog' />
        <div
          className='home-our-clients-showcase'
          style={homeClientsShowcaseStyle}>
          <div className='home-clinets-showcase-left'>
            <h3>CLIENTS</h3>
            <h2 className='app-yellow-text'>OUR CLIENTS</h2>
            <h4>We've assisted outstanding brands in reaching new heights. </h4>
          </div>
          <div className='our-clients-showcase-right'>
            <img src={ClientsImages} alt='Our Clients' />
            {/* <div className="info-container-image-section">
              <img src={GlobeBGImg} className="info-globe-background" />
              <img src={GlobeTopImg} className="info-globe-top" />
            </div> */}
          </div>
        </div>
      </div>
      <div className='home-certification-section'>
        <h2>Certifications</h2>
        <div className='home-certification-all-certificates'>
          {certificates.map((certificate, index) => (
            <img key={index} src={certificate} />
          ))}
        </div>
      </div>
      <div className='page-bottom-monkey'>
        <img src={AboutUsMonkeyImg} alt='Clever Monkey' />
      </div>
    </div>
  );
}

export default Home;

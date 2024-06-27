import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

import MainLogo from "../../Assets/Logos/MainLogo.png";
import FooterBgImg from "../../Assets/Footer/FooterBgImg.jpeg";
import FooterMonkImg from "../../Assets/Footer/FooterMonkImg.png";

import companyData from "../../CompanyData";
import { internalLinks } from "../../internalLinks";

function Footer() {
  const footerStyle = {
    backgroundImage: `url("${FooterBgImg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const whatsappMessage = "Hey CleverClicks!";
  const companyWhatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    companyData.companyPhone
  )}&text=${encodeURIComponent(whatsappMessage)}`;

  //   const internalLinks.services = {
  //     webDev: "",
  //     digitalMarketing: "",
  //     seo: "",
  //     emailMarketing: "",
  //     contentMarketing: "",
  //     graphicDesign: "",
  //   };

  //   const internalLinks = {
  //     home: "/",
  //     aboutUs: "/about-us",
  //     project: "/project",
  //     contact: "/contact",
  //     privacyPolicy: "/privacy-policy",
  //     terms: "/terms-and-conditions",
  //   };

  return (
    <footer className='footer-section' style={footerStyle}>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <Link to={internalLinks.home}>
            <img src={MainLogo} alt='Logo' />
          </Link>
          <span>
            Branding and Marketing Agency in Dubai Specializing in Offering
            Sustainable Solutions and Growth to Brands and Businesses.
          </span>
          <div className='footer-top-left-contact'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='20'
                viewBox='0 0 14 20'
                fill='none'>
                <path
                  d='M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z'
                  fill='#EFEFEF'
                />
              </svg>
              {companyData.companyAddress}
            </span>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='17'
                viewBox='0 0 20 17'
                fill='none'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M1 3.57143V13.8571C1 14.5391 1.27092 15.1932 1.75315 15.6754C2.23539 16.1577 2.88944 16.4286 3.57143 16.4286H16.4286C17.1106 16.4286 17.7646 16.1577 18.2468 15.6754C18.7291 15.1932 19 14.5391 19 13.8571V3.57143C19 2.88944 18.7291 2.23539 18.2468 1.75315C17.7646 1.27092 17.1106 1 16.4286 1H3.57143C2.88944 1 2.23539 1.27092 1.75315 1.75315C1.27092 2.23539 1 2.88944 1 3.57143Z'
                  stroke='#EFEFEF'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M3.57129 4.85742L9.99986 8.71456L16.4284 4.85742'
                  stroke='#EFEFEF'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <a href={`mailto:${companyData.companyEmail}`}>
                {companyData.companyEmail}
              </a>
            </span>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'>
                <path
                  d='M19.1425 13.7038L14.3219 11.5436C14.1035 11.45 13.8652 11.4123 13.6286 11.4341C13.3919 11.4558 13.1645 11.5362 12.9668 11.6681C12.9467 11.6809 12.9276 11.6953 12.9096 11.7109L10.3902 13.8538C10.364 13.8681 10.3349 13.8761 10.3052 13.8771C10.2754 13.8782 10.2458 13.8723 10.2187 13.86C8.59928 13.0783 6.92167 11.4109 6.13695 9.8139C6.12389 9.78722 6.11709 9.7579 6.11709 9.72819C6.11709 9.69847 6.12389 9.66916 6.13695 9.64247L8.28702 7.09136C8.30245 7.07248 8.31676 7.05272 8.32988 7.03217C8.45988 6.8337 8.53839 6.60598 8.55835 6.36956C8.5783 6.13315 8.53906 5.89549 8.44417 5.67804L6.2992 0.865619C6.17739 0.581537 5.96673 0.344623 5.69884 0.190437C5.43094 0.0362499 5.12027 -0.0268925 4.81344 0.0104861C3.47995 0.185795 2.25592 0.840657 1.37008 1.8527C0.484244 2.86474 -0.00278344 4.1647 1.19671e-05 5.50967C1.19671e-05 13.4998 6.50023 20 14.4903 20C15.8352 20.0026 17.135 19.5155 18.147 18.6297C19.159 17.7439 19.8139 16.52 19.9895 15.1865C20.0268 14.8812 19.9645 14.5719 19.8119 14.3047C19.6593 14.0376 19.4245 13.8268 19.1425 13.7038ZM14.4903 18.7755C7.17576 18.7755 1.22454 12.8242 1.22454 5.50967C1.22113 4.46262 1.59905 3.45014 2.28769 2.66141C2.97632 1.87268 3.92857 1.36165 4.96651 1.2238H4.98998C5.0311 1.22456 5.07103 1.23774 5.10453 1.26159C5.13804 1.28545 5.16355 1.31887 5.17774 1.35747L7.33087 6.16479C7.34315 6.19152 7.34951 6.22059 7.34951 6.25C7.34951 6.27941 7.34315 6.30848 7.33087 6.33521L5.17672 8.89244C5.16065 8.9107 5.14598 8.93014 5.13284 8.95061C4.99804 9.15639 4.91867 9.39349 4.9024 9.63895C4.88613 9.88441 4.93352 10.1299 5.03998 10.3517C5.94511 12.2048 7.81252 14.0579 9.68605 14.9631C9.90912 15.0689 10.1558 15.1152 10.4021 15.0973C10.6483 15.0794 10.8858 14.998 11.0912 14.861C11.1106 14.8478 11.13 14.8335 11.1483 14.8182L13.6668 12.6752C13.6917 12.6619 13.7191 12.654 13.7473 12.6523C13.7755 12.6505 13.8037 12.6549 13.8301 12.665L18.6517 14.8253C18.691 14.8421 18.7242 14.8708 18.7463 14.9074C18.7685 14.9441 18.7786 14.9867 18.7751 15.0294C18.638 16.0678 18.1275 17.0208 17.3389 17.7102C16.5503 18.3996 15.5377 18.7783 14.4903 18.7755Z'
                  fill='#EFEFEF'
                />
              </svg>
              <a href={`tel:${companyData.companyPhone}`}>
                {companyData.companyPhone}
              </a>
            </span>
          </div>
          <div className='footer-top-left-social-media'>
            <a href={companyData.companyFacebook} target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='56'
                height='56'
                viewBox='0 0 56 56'
                fill='none'>
                <rect width='56' height='56' rx='6' fill='white' />
                <path
                  d='M46 28.0451C46 18.0842 37.936 10 28 10C18.064 10 10 18.0842 10 28.0451C10 36.7789 16.192 44.0511 24.4 45.7293V33.4586H20.8V28.0451H24.4V23.5338C24.4 20.0511 27.226 17.218 30.7 17.218H35.2V22.6316H31.6C30.61 22.6316 29.8 23.4436 29.8 24.4361V28.0451H35.2V33.4586H29.8V46C38.89 45.0977 46 37.4105 46 28.0451Z'
                  fill='black'
                />
              </svg>
            </a>
            <a href={companyData.companyInsta} target='_blank'>
              <svg
                width='64px'
                height='64px'
                viewBox='-4.8 -4.8 33.60 33.60'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g
                  id='SVGRepo_bgCarrier'
                  stroke-width='0'
                  transform='translate(0,0), scale(1)'>
                  <rect
                    x='-4.8'
                    y='-4.8'
                    width='33.60'
                    height='33.60'
                    rx='3.36'
                    fill='#ffffff'
                    strokewidth='0'></rect>
                </g>
                <g
                  id='SVGRepo_tracerCarrier'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke='#CCCCCC'
                  stroke-width='0.048'></g>
                <g id='SVGRepo_iconCarrier'>
                  {" "}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
                    fill='#0F0F0F'></path>{" "}
                  <path
                    d='M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z'
                    fill='#0F0F0F'></path>{" "}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z'
                    fill='#0F0F0F'></path>{" "}
                </g>
              </svg>
            </a>
            <a href={companyWhatsappLink} target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='56'
                height='56'
                viewBox='0 0 56 56'
                fill='none'>
                <rect width='56' height='56' rx='6' fill='white' />
                <path
                  d='M38.6281 15.3651C37.246 13.976 35.5998 12.8746 33.7854 12.1252C31.971 11.3757 30.0248 10.9933 28.0603 11.0001C19.8291 11.0001 13.1206 17.6751 13.1206 25.865C13.1206 28.49 13.8141 31.04 15.1106 33.29L13 41L20.9146 38.93C23.1005 40.115 25.5578 40.745 28.0603 40.745C36.2915 40.745 43 34.07 43 25.88C43 21.9051 41.4472 18.1701 38.6281 15.3651ZM28.0603 38.225C25.8291 38.225 23.6432 37.625 21.7286 36.5L21.2764 36.23L16.5729 37.46L17.8241 32.9L17.5226 32.435C16.283 30.4655 15.6248 28.1889 15.6231 25.865C15.6231 19.0551 21.201 13.5051 28.0452 13.5051C31.3618 13.5051 34.4824 14.7951 36.8191 17.1351C37.9761 18.281 38.893 19.6441 39.5167 21.1452C40.1403 22.6463 40.4583 24.2557 40.4523 25.88C40.4824 32.69 34.9045 38.225 28.0603 38.225ZM34.8744 28.985C34.4975 28.805 32.6583 27.905 32.3266 27.77C31.9799 27.65 31.7387 27.59 31.4824 27.95C31.2261 28.325 30.5176 29.165 30.3065 29.405C30.0955 29.66 29.8693 29.69 29.4925 29.495C29.1156 29.315 27.9095 28.91 26.4925 27.65C25.3769 26.66 24.6382 25.445 24.4121 25.07C24.201 24.695 24.3819 24.5 24.5779 24.305C24.7437 24.14 24.9548 23.8701 25.1357 23.6601C25.3166 23.4501 25.392 23.2851 25.5126 23.0451C25.6332 22.7901 25.5729 22.5801 25.4824 22.4001C25.392 22.2201 24.6382 20.3901 24.3367 19.6401C24.0352 18.9201 23.7186 19.0101 23.4925 18.9951H22.7688C22.5126 18.9951 22.1206 19.0851 21.7739 19.4601C21.4422 19.8351 20.4774 20.7351 20.4774 22.5651C20.4774 24.3951 21.8191 26.165 22 26.405C22.1809 26.66 24.6382 30.41 28.3769 32.015C29.2663 32.405 29.9598 32.63 30.5025 32.795C31.392 33.08 32.206 33.035 32.8543 32.945C33.5779 32.84 35.0703 32.045 35.3719 31.175C35.6884 30.305 35.6884 29.57 35.5829 29.405C35.4774 29.24 35.2513 29.165 34.8744 28.985Z'
                  fill='black'
                />
              </svg>
            </a>
            <a href={companyData.companyLinkedIn} target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='56'
                height='56'
                viewBox='0 0 56 56'
                fill='none'>
                <rect width='56' height='56' rx='6' fill='white' />
                <path
                  d='M13 15.1488C13 13.9619 13.9862 13 15.2031 13H40.7969C42.0138 13 43 13.9619 43 15.1488V40.8512C43 42.0381 42.0138 43 40.7969 43H15.2031C13.9862 43 13 42.0381 13 40.8512V15.1488ZM22.2681 38.1138V24.5669H17.7663V38.1138H22.2681ZM20.0181 22.7163C21.5875 22.7163 22.5644 21.6775 22.5644 20.3763C22.5363 19.0469 21.5894 18.0363 20.0481 18.0363C18.5069 18.0363 17.5 19.0487 17.5 20.3763C17.5 21.6775 18.4769 22.7163 19.9881 22.7163H20.0181ZM29.2206 38.1138V30.5481C29.2206 30.1431 29.2506 29.7381 29.3706 29.4494C29.695 28.6412 30.4356 27.8031 31.6806 27.8031C33.31 27.8031 33.9606 29.0444 33.9606 30.8669V38.1138H38.4625V30.3438C38.4625 26.1812 36.2425 24.2463 33.28 24.2463C30.8913 24.2463 29.8206 25.5588 29.2206 26.4831V26.53H29.1906C29.2006 26.5143 29.2106 26.4987 29.2206 26.4831V24.5669H24.7206C24.7769 25.8381 24.7206 38.1138 24.7206 38.1138H29.2206Z'
                  fill='black'
                />
              </svg>
            </a>
          </div>
        </div>
        <div className='footer-top-mid'>
          <div className='footer-mid-services'>
            <h4>Services</h4>
            <ul>
              <li>
                <Link to={internalLinks.services.webDev}>Web Development</Link>
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
            </ul>
          </div>
          <div className='footer-mid-services'>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to={internalLinks.home}>Home</Link>
              </li>
              <li>
                <Link to={internalLinks.aboutUs}>About Us</Link>
              </li>
              <li>
                <Link to={internalLinks.contact}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-top-right'>
          <h3>Newsletter</h3>
          <span>
            Signup our newsletter to get update information, news, insight or
            promotions.{" "}
          </span>
          <div className='footer-top-right-input-section'>
            <input type='email' name='email' placeholder='Email' />
            <button className='app-yellow-buttons'>Signup!</button>
          </div>
          <img src={FooterMonkImg} alt='Monk' />
        </div>
      </div>

      <div className='footer-bottom'>
        <span>
          Copyright © 2023 All Rights Reserved <br />
          Powered By: Branding 360
        </span>
        <div className='footer-bottom-links'>
          <Link to='/landing-page'>LANDING PAGE</Link>
          <Link to={internalLinks.privacyPolicy}>PRIVACY POLICY</Link>
          {/* <Link to={internalLinks.terms}>TERMS & CONDITIONS</Link> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

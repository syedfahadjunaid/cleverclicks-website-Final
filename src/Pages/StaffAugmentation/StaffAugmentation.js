import React from "react";
import "./StaffAugmentation.css";
import heroimage from "../../Assets/StaffAugmentation/hero img.png";
import { IoMdPaperPlane } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbBulb } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import bgImage from "../../Assets/StaffAugmentation/img bg.png";
import logoImage from "../../Assets/StaffAugmentation/LOGO DESIGN SOURCE FILE-01 1.png";
import card1Image from "../../Assets/StaffAugmentation/card1.png";
import card2Image from "../../Assets/StaffAugmentation/card2.png";
import card3Image from "../../Assets/StaffAugmentation/card3.png";
import section3Card1 from "../../Assets/StaffAugmentation/img.png";
import section3Card2 from "../../Assets/StaffAugmentation/img(1).png";
import section3Card3 from "../../Assets/StaffAugmentation/img(2).png";
import section4BGImage from "../../Assets/StaffAugmentation/image 16(1).jpg";
import section4SideImage from "../../Assets/StaffAugmentation/joyful-young-beautiful-girl-doing-call-sign-showing-empty-hand-isolated-orange-space 1.png";

export default function StaffAugmentation() {
  return (
    <div className='staff-augmentation-page'>
      <div className='staff-augmentation-page_herosection'>
        <div className='staff-augmentation-page_herosection-left'>
          <p
            className='staff-augmentation-page_herosection-left_text-1'
            style={{
              color: "black",
              fontWeight: "700",
              fontSize: "30px",
              textAlign: "left",
            }}>
            Get Access to The Talented Brains & Supercharge Your Brand's
            Capabilities with Clever Clicks Staff{" "}
            <span
              className='staff-augmentation-page_herosection-left_spantext'
              style={{ color: "white", backgroundColor: "#FFBB00" }}>
              Augmentation
            </span>{" "}
            Services.
          </p>
          <p
            className='staff-augmentation-page_herosection-left_text-2'
            style={{ textAlign: "left" }}>
            Clever Clicks' staff augmentation services offer the most effective
            means to enhance your team's capabilities without the complexities
            of recruitment and training.
          </p>
          <Link
            to={"/contact"}
            className='staff-augmentation-page_herosection-left_button'
            style={{
              backgroundColor: "black",
              borderRadius: "8px",
              border: "none",
              color: "white",
              padding: "10px 25px",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              justifyContent: "center",
              width: "fit-content",
              textDecoration: "none",
            }}>
            <span style={{ fontSize: "18px" }}>Contact</span>
            <IoMdPaperPlane className='' style={{ fontSize: "25px" }} />
          </Link>
        </div>
        <div className='staff-augmentation-page_herosection-right'>
          <img
            className='staff-augmentation-page_herosection-right-img'
            src={heroimage}
            alt='staff-augmentation-hero-img'
          />
        </div>
      </div>

      <p className='' style={{ width: "90%" }}>
        We’ve helped 250+ clients outsource their software development
      </p>

      {/* <Marquee
        className='staff-augmentation-page_marquee'
        style={{ width: "80%" }}> */}
      <div className='staff-augmentation-page_marqueesection'>
        <div className='staff-augmentation-page_marqueesection-content'>
          <TbBulb style={{ fontSize: "22px" }} />
          <span>Web development</span>
        </div>
        <div className='staff-augmentation-page_marqueesection-content'>
          <TbBulb style={{ fontSize: "22px" }} />
          <span>Digital Marketing</span>
        </div>
        <div className='staff-augmentation-page_marqueesection-content'>
          <TbBulb style={{ fontSize: "22px" }} />
          <span>Web design</span>
        </div>
        <div className='staff-augmentation-page_marqueesection-content'>
          <TbBulb style={{ fontSize: "22px" }} />
          <span>Graphic Design</span>
        </div>
        <div className='staff-augmentation-page_marqueesection-content'>
          <TbBulb style={{ fontSize: "22px" }} />
          <span>Content Marketing</span>
        </div>
        <div className='staff-augmentation-page_marqueesection-content'>
          <TbBulb style={{ fontSize: "22px" }} />
          <span>PPC</span>
        </div>
      </div>
      {/* </Marquee> */}

      <p style={{ fontWeight: "500" }}>A new way to extend your team</p>

      <div className='staff-augmentation-page_secondSection-heading'>
        <p>STAFF AUGUMENTATION BY</p>
        <img src={logoImage} alt='logo' />
      </div>

      <div
        className='staff-augmentation-page_secondSection-content'
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}>
        {/* <img src={bgImage} alt='bgimg' /> */}
        <div className='staff-augmentation-page_secondSection-content-cards'>
          <div className='staff-augmentation-page_secondSection-content-card'>
            <h3>Creative Designing</h3>
            <img src={card1Image} alt='card1Image' />
            <div className='staff-augmentation-page_secondSection-content-card-text'>
              <div className='staff-augmentation-page_secondSection-content-card-textContent'>
                <p>Logo</p>
                <p>$100.00 / H</p>
              </div>
              <div className='staff-augmentation-page_secondSection-content-card-textContent'>
                <p>Graphic Design</p>
                <p>$100.00 / H</p>
              </div>
              <div className='staff-augmentation-page_secondSection-content-card-textContent'>
                <p>Reels</p>
                <p>$100.00 / H</p>
              </div>
              <div className='staff-augmentation-page_secondSection-content-card-textContent'>
                <p>Logo</p>
                <p>$100.00 / H</p>
              </div>
              <div className='staff-augmentation-page_secondSection-content-card-textContent'>
                <p>Logo</p>
                <p>$100.00 / H</p>
              </div>
            </div>
            <div className='staff-augmentation-page_secondSection-content-card-button'>
              <Link
                className='staff-augmentation-page_secondSection-content-card-button-main'
                to={"/contact"}>
                Book Now
              </Link>
            </div>
          </div>
          <div className='staff-augmentation-page_secondSection-content-card-big'>
            <h3>Website Development</h3>
            <img src={card2Image} alt='card2Image' />
            <div className='staff-augmentation-page_secondSection-content-card-big-content'>
              <div className='staff-augmentation-page_secondSection-content-card-bigtextContent'>
                <span>Static</span>
                <div className='staff-augmentation-page_secondSection-content-card-bigsubtextContent'>
                  <span style={{ color: "white" }}>Bootstrap/PHP</span>
                  <span style={{ color: "#FFBB00" }}>$100.00 / H</span>
                </div>
                <div className='staff-augmentation-page_secondSection-content-card-bigsubtextContent'>
                  <span style={{ color: "white" }}>HTML , CSS</span>
                  <span style={{ color: "#FFBB00" }}>$100.00 / H</span>
                </div>
              </div>
              <div className='staff-augmentation-page_secondSection-content-card-bigtextContent'>
                <span>Dynamic</span>
                <div className='staff-augmentation-page_secondSection-content-card-bigsubtextContent'>
                  <span style={{ color: "white" }}>Bootstrap/PHP</span>
                  <span style={{ color: "#FFBB00" }}>$100.00 / H</span>
                </div>
                <div className='staff-augmentation-page_secondSection-content-card-bigsubtextContent'>
                  <span style={{ color: "white" }}>React/PHP</span>
                  <span style={{ color: "#FFBB00" }}>$100.00 / H</span>
                </div>
                <div className='staff-augmentation-page_secondSection-content-card-bigsubtextContent'>
                  <span style={{ color: "white" }}>React / Node JS</span>
                  <span style={{ color: "#FFBB00" }}>$100.00 / H</span>
                </div>
                <div className='staff-augmentation-page_secondSection-content-card-bigsubtextContent'>
                  <span style={{ color: "white" }}>HTML / CSS /JS</span>
                  <span style={{ color: "#FFBB00" }}>$100.00 / H</span>
                </div>
              </div>
              <div className='staff-augmentation-page_secondSection-content-card-bigtextContent'>
                <span>Ecommerce</span>
                <div className='staff-augmentation-page_secondSection-content-card-bigsubtextContent'>
                  <span style={{ color: "white" }}>Bootstrap/PHP</span>
                  <span style={{ color: "#FFBB00" }}>$100.00 / H</span>
                </div>
                <div className='staff-augmentation-page_secondSection-content-card-bigsubtextContent'>
                  <span style={{ color: "white" }}>React/PHP</span>
                  <span style={{ color: "#FFBB00" }}>$100.00 / H</span>
                </div>
                <div className='staff-augmentation-page_secondSection-content-card-bigsubtextContent'>
                  <span style={{ color: "white" }}>React / Node JS</span>
                  <span style={{ color: "#FFBB00" }}>$100.00 / H</span>
                </div>
                <div className='staff-augmentation-page_secondSection-content-card-bigsubtextContent'>
                  <span style={{ color: "white" }}>HTML / CSS /JS</span>
                  <span style={{ color: "#FFBB00" }}>$100.00 / H</span>
                </div>
              </div>
            </div>
            <div className='staff-augmentation-page_secondSection-content-bigcard-button'>
              <Link
                className='staff-augmentation-page_secondSection-content-bigcard-button-main'
                to={"/contact"}>
                Book Now
              </Link>
            </div>
          </div>
          <div className='staff-augmentation-page_secondSection-content-card'>
            <h3>Branding</h3>
            <img src={card3Image} alt='card3Image' />
            <div className='staff-augmentation-page_secondSection-content-card-text'>
              <div className='staff-augmentation-page_secondSection-content-card-textContent'>
                <p>Logo</p>
                <p>$100.00 / H</p>
              </div>
              <div className='staff-augmentation-page_secondSection-content-card-textContent'>
                <p>Graphic Design</p>
                <p>$100.00 / H</p>
              </div>
              <div className='staff-augmentation-page_secondSection-content-card-textContent'>
                <p>Reels</p>
                <p>$100.00 / H</p>
              </div>
              <div className='staff-augmentation-page_secondSection-content-card-textContent'>
                <p>Logo</p>
                <p>$100.00 / H</p>
              </div>
              <div className='staff-augmentation-page_secondSection-content-card-textContent'>
                <p>Logo</p>
                <p>$100.00 / H</p>
              </div>
            </div>
            <div className='staff-augmentation-page_secondSection-content-card-button'>
              <Link
                className='staff-augmentation-page_secondSection-content-card-button-main'
                to={"/contact"}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='staff-augmentation-page_thirdSection'>
        <div className='staff-augmentation-page_thirdSection_card'>
          <div className='staff-augmentation-page_thirdSection_card-textContent'>
            <h3 style={{ textAlign: "left" }}>
              Outsource Frontend Development
            </h3>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                // gap: "10px",
                fontSize: "16px",
                // justifyContent: "center",
                // alignItems: "center",
              }}>
              <li style={{ textAlign: "left" }}>Angular Developers</li>
              <li style={{ textAlign: "left" }}>Web Developers</li>
              <li style={{ textAlign: "left" }}>React.js Developers</li>
              <li style={{ textAlign: "left" }}>JavaScript Developers</li>
              <li style={{ textAlign: "left" }}>HTML Developers</li>
              <li style={{ textAlign: "left" }}>CSS Developers</li>
            </ul>
          </div>
          <img src={section3Card1} alt='section3Card1Image' />
        </div>
      </div>
      <div className='staff-augmentation-page_thirdSection'>
        <div className='staff-augmentation-page_thirdSection_card'>
          <div className='staff-augmentation-page_thirdSection_card-textContent'>
            <h3 style={{ textAlign: "left" }}>Outsource Graphic Design</h3>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                // gap: "10px",
                fontSize: "16px",
                // justifyContent: "center",
                // alignItems: "center",
              }}>
              <li style={{ textAlign: "left" }}>Logo Design</li>
              <li style={{ textAlign: "left" }}>Reels Design</li>
              <li style={{ textAlign: "left" }}>Vista Card Design</li>
              <li style={{ textAlign: "left" }}>Creative Design</li>
              <li style={{ textAlign: "left" }}>Web Design</li>
              <li style={{ textAlign: "left" }}>UI Design</li>
              <li style={{ textAlign: "left" }}>UX Design</li>
            </ul>
          </div>
          <img src={section3Card2} alt='section3Card1Image' />
        </div>
      </div>
      <div className='staff-augmentation-page_thirdSection'>
        <div className='staff-augmentation-page_thirdSection_card'>
          <div className='staff-augmentation-page_thirdSection_card-textContent'>
            <h3 style={{ textAlign: "left" }}>Outsource Backend Development</h3>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                // gap: "10px",
                fontSize: "16px",
                // justifyContent: "center",
                // alignItems: "center",
              }}>
              <li style={{ textAlign: "left" }}>PHP Developers</li>
              <li style={{ textAlign: "left" }}>MongoDB Developers</li>
              <li style={{ textAlign: "left" }}>Laravel Developers</li>
              <li style={{ textAlign: "left" }}>Node Js Developers</li>
              <li style={{ textAlign: "left" }}>SQL Developers</li>
            </ul>
          </div>
          <img src={section3Card3} alt='section3Card1Image' />
        </div>
      </div>

      <div
        className='staff-augmentation-page_fourthSection'
        style={{
          backgroundImage: `url('${section4BGImage}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}>
        <div className='staff-augmentation-page_fourthSection-content'>
          <h4>Let’s Collaborate to Discuss Your Project!</h4>
          <span>
            Call Us Now to Know How Our Strategies Can Help Your Brand Grow at
            Record Speed!
          </span>
          <div className='staff-augmentation-page_fourthSection-content-button'>
            <a
              href='tel:+919919444434'
              style={{
                backgroundColor: "black",
                borderRadius: "10px",
                padding: "12px 25px",
                border: "1px solid black",
                color: "white",
                textDecoration: "none",
              }}>
              Call Us Now
            </a>
            <a
              href='mailto:info@cleverclicks.ae'
              style={{
                backgroundColor: "transparent",
                borderRadius: "10px",
                padding: "12px 25px",
                border: "1px solid black",
                color: "black",
                textDecoration: "none",
              }}>
              Email Us
            </a>
          </div>
        </div>
        <div className='staff-augmentation-page_fourthSection-img'>
          <img src={section4SideImage} alt='section4SideImage' />
        </div>
      </div>
    </div>
  );
}

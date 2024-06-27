import React, { useRef, useState, useEffect } from "react";
import "./CreativeWorksSection.css";

import HomeCreativeWorksMainLeftImg from "../../Assets/Home/HomeCreativeWorksMainLeftImg.png";
import CreativeWorksMainBgImg from "../../Assets/Home/CreativeWorksMainBgImg.png";
import CreativeWorksCollageImg1 from "../../Assets/Home/CreativeWorksCollageImg1.jpeg";
import CreativeWorksCollageImg2 from "../../Assets/Home/CreativeWorksCollageImg2.jpeg";
import CreativeWorksCollageImg3 from "../../Assets/Home/CreativeWorksCollageImg3.jpeg";
import CreativeWorksCollageImg4 from "../../Assets/Home/CreativeWorksCollageImg4.jpeg";
import CreativeWorksCollageImg5 from "../../Assets/Home/CreativeWorksCollageImg5.jpeg";
import CreativeWorksCollageImg6 from "../../Assets/Home/CreativeWorksCollageImg6.jpeg";

function CreativeWorksSection() {
  const collageRef = useRef(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);

  const [animationInterval, setAnimationInterval] = useState(3000);

  const imagesData = [
    {
      image: CreativeWorksCollageImg1,
      heading: "Web Designing & Development",
      text: "We craft a creative marketing strategy with online hub for your business, attracting new prospects and positioning you as a trusted industry authority.",
    },
    {
      image: CreativeWorksCollageImg2,
      heading: "Branding",
      text: "At Clever Clicks, our brand marketing team of imaginative creators and strategic minds are committed to shaping remarkable brands that make a lasting impression.",
    },
    {
      image: CreativeWorksCollageImg3,
      heading: "Creative Designing",
      text: "We specialize in merging creative designs with data to tackle intricate communication challenges, setting us apart as a distinctive branding agency in Dubai.",
    },
    {
      image: CreativeWorksCollageImg4,
      heading: "Social Media Management",
      text: "While posting is a common practice, strategic posting requires a specialized skill set. Our expertise lies in crafting robust social media marketing strategy tailored to your goals and flawlessly executing them.",
    },
    {
      image: CreativeWorksCollageImg5,
      heading: "Search Engine Optimization",
      text: "As the leading SEO Company in Dubai, Clever Clicks offers an ethical, results-driven SEO service, utilizing cutting-edge tools, marketing strategy, and trends to boost your visibility in search engines for targeted keywords.",
    },
    {
      image: CreativeWorksCollageImg6,
      heading: "Performance Marketing",
      text: "Beyond the standard performance marketing agency, Clever Clicks embodies a growth-oriented brand. Our team of seasoned experts is committed to optimizing conversion rates.",
    },
  ];

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count = count + 1;
      setSelectedImageIndex((lasIndex) => lasIndex + 1);
      scrollRight();

      if (count > imagesData.length - 1) {
        setTimeout(() => {
          setSelectedImageIndex(0);
          if (collageRef.current) {
            collageRef.current.scrollLeft = 0;
            count = 0;
          }
        }, 500);
      }
    }, animationInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  //   const scrollLeft = () => {
  //     if (collageRef.current && selectedImageIndex > 0) {
  //       setIsAnimation(true);
  //       setTimeout(() => {
  //         setSelectedImageIndex(selectedImageIndex - 1);
  //         collageRef.current.scrollLeft -= 250;
  //         setIsAnimation(false);
  //       }, 250);
  //     }
  //   };
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);

    setAnimationInterval(5000);

    setTimeout(() => {
      setAnimationInterval(3000);
    }, 5000);
  };
  const scrollRight = () => {
    if (
      collageRef.current &&
      selectedImageIndex < collageRef.current.childElementCount - 1
    ) {
      setIsAnimation(true);
      setTimeout(() => {
        // setSelectedImageIndex(selectedImageIndex + 1);
        if (collageRef.current) {
          collageRef.current.scrollLeft += 250;
        }
        setIsAnimation(false);
      }, 250);
    }
  };

  return (
    <div className="creative-works-section">
      <div className="creative-works-top">
        <div>
          <h3>Interested in Learning More? </h3>
          <span className="app-yellow-text"></span>
        </div>

        <button className="app-yellow-buttons">View All Work</button>
      </div>
      <div className="creative-works-main">
        <div className="creative-works-main-left">
          <img src={HomeCreativeWorksMainLeftImg} alt="Creative Works" />
          <div className={` ${isAnimation === true ? "fade-out" : "fade-in"}`}>
            {selectedImageIndex < imagesData.length && (
              <>
                <h4>{imagesData[selectedImageIndex].heading}</h4>
                <p>{imagesData[selectedImageIndex].text}</p>
              </>
            )}
          </div>

          {/* <div className="creative-works-main-left-buttons">
            <button onClick={scrollLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="24"
                viewBox="0 0 101 24"
                fill="none"
              >
                <path
                  d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM101 13.5H2V10.5H101V13.5Z"
                  fill="#464646"
                />
              </svg>
            </button>
            <button onClick={scrollRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="24"
                viewBox="0 0 101 24"
                fill="none"
              >
                <path
                  d="M100.061 13.0607C100.646 12.4749 100.646 11.5251 100.061 10.9393L90.5147 1.3934C89.9289 0.807611 88.9792 0.807611 88.3934 1.3934C87.8076 1.97919 87.8076 2.92893 88.3934 3.51472L96.8787 12L88.3934 20.4853C87.8076 21.0711 87.8076 22.0208 88.3934 22.6066C88.9792 23.1924 89.9289 23.1924 90.5147 22.6066L100.061 13.0607ZM0 13.5H99V10.5H0V13.5Z"
                  fill="black"
                />
              </svg>
            </button>
          </div> */}
        </div>
        <div className="creative-works-main-right">
          <div className="creative-works-main-right-bg-layer">
            <img src={CreativeWorksMainBgImg} alt="Bg" />
          </div>
          <div className="creative-works-main-collage" ref={collageRef}>
            {/* <img src={CreativeWorksCollageImg1} alt="collage 1" />
            <img src={CreativeWorksCollageImg2} alt="collage 2" />
            <img src={CreativeWorksCollageImg1} alt="collage 1" /> */}
            {imagesData.map((data, index) => (
              <img
                onClick={() => {
                  handleImageClick(index);
                }}
                key={index}
                src={data.image}
                alt={`collage ${index + 1}`}
                className={`${
                  index === selectedImageIndex ? "slected-image" : "none"
                }`}
                // style={{
                //   border:
                //     index === selectedImageIndex ? "2px solid yellow" : "none",
                // }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeWorksSection;

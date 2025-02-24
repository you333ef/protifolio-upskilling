import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import "./home.module.css";
import { FaDownload } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { IoBagCheck } from "react-icons/io5";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const slidesData = [
    {
      id: 2,
      ok: false,
      title: "I am",
      subtitle: "a Designer",
      icon: <IoBagCheck />,
      linkText: "VIEW PORTFOLIO",
    },
    {
      id: 1,
      ok: true,
      title: "Hi!",
      subtitle: "I'm Jackson",
      icon: <FaDownload />,
      linkText: "DOWNLOAD CV",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    fade: true, // fade بيشتغل بس مع slide واحد
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    swipe: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: "unslick",
      },
    ],
  };

  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // لو الشاشة صغيرة، نفلتر الـ slides ونجيب العنصر اللي فيه id === 1
  const mobileSlide = slidesData.find((slide) => slide.id === 1);

  return (
    <div className={styles.HDOOD}>
      {isMobile ? (
        // عرض العنصر اللي مطلوب (id:1) بشكل static من غير Slider
        <section key={mobileSlide.id} className={`${styles.home} ${styles["slide-2"]}`}>
          <div className={styles.content}>
            <h2>{mobileSlide.title}</h2>
            <h2>{mobileSlide.subtitle}</h2>
            <p>
              100% HTML5 Bootstrap templates  <br />
              <span>By <a href="#">Colorlib.com</a></span>
            </p>
            <button className={styles.download_btn}>
              {mobileSlide.linkText} {mobileSlide.icon}
            </button>
          </div>
        </section>
      ) : (
        // على الشاشات الكبيرة يشتغل الـ Slider بشكل طبيعي
        <Slider {...settings} className={styles.slider}>
          {slidesData.map((slide, index) => (
            <section
              key={slide.id}
              className={`${styles.home} ${styles[`slide-${index + 1}`]}`}
            >
              <div className={styles.content}>
                <h2>{slide.title}</h2>
                <h2>{slide.subtitle}</h2>
                <p>
                  100% HTML5 Bootstrap templates Made <br />
                  <span>By <a href="#">Colorlib.com</a></span>
                </p>
                <button className={styles.download_btn}>
                  {slide.linkText} {slide.icon}
                </button>
              </div>
            </section>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Home;

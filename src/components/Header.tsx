import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import HeaderImage from "../../public/header.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowIcon from "./ArrowIcon.tsx";
import SocialMediaIcons from "./SocialMediaIcons";

const socialMediaUrls = {
  twitter: "www.twitter.com/lupecozzolino",
  instagram: "www.instagram.com/lupecozzolino",
  youtube: "www.youtube.com/lupecozzolino",
  tiktok: "www.tiktok.com/lupecozzolino",
};

const Header = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
      AOS.refresh();
    }, 2500);
  }, []);

  
  return (
    <div className={styles.container}>
      <div className={styles.smooth}></div>
      <div className={styles.content}>
        <div>
          <p
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className={styles.text__greeting}
          >
            HI! I'M
          </p>
          <h1
            data-aos="fade-up"
            data-aos-duration="1800"
            className={styles.text__name}
          >
            LUPE COZZOLINO
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className={styles.text__job}
          >
            A CONTENT CREATOR
          </p>
          <p data-aos="fade-up" data-aos-duration="2200">
            Campañas - Editorial - Viajes - Ketupe - Colaboraciones con marcas -
            Tiktoks - Entrevistas
          </p>
          <SocialMediaIcons {...socialMediaUrls} />
        </div>
      </div>
      <div className={styles.container__image}>
        <Image
          className={styles.image}
          src={HeaderImage}
          fill
          alt="header image"
        />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="0"
        className={styles.arrowIcon}
      >
        <ArrowIcon />
      </div>
    </div>
  );
};

export default Header;

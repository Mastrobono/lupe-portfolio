import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/header.module.scss";
import HeaderImage from "../../public/header.jpg";
import ArrowIcon from "./icons/ArrowIcon";
import SocialMediaIcons from "./icons/SocialMediaIcons";
import PolaroidGallery from "./galleries/PolaroidGallery";
import React from "react";

const socialMediaUrls = {
  instagram: "https://www.instagram.com/lupecozzolino",
  youtube: "https://www.youtube.com/lupecozzolino",
  tiktok: "https://www.tiktok.com/lupecozzolino",
};

const Header = () => {
  return (
    <div className={styles.page__container}>
      <div className={styles.container}>
        <div className={styles.smooth}></div>
        <div className={styles.box}>
          <div className={styles.content}>
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              className={styles.text__greeting}
            >
              HI! I'M
            </p>
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className={styles.text__name}
            >
              LUPE COZZOLINO
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              className={styles.text__job}
            >
              A CONTENT CREATOR
            </p>
            <p data-aos="fade-right" data-aos-duration="1500">
              Campañas - Editorial - Viajes - Ketupe - Colaboraciones con marcas
              - Tiktoks - Entrevistas
            </p>
            <SocialMediaIcons socialMediaLinks={socialMediaUrls} />
            <PolaroidGallery /> 
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
        <ArrowIcon />
      </div>
    </div>
  );
};

export default Header;

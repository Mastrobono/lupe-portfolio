import styles from "@/styles/gallery.module.scss";
import Gallery from "../Gallery";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import img_0 from "../../../public/assets/images/dynamic/miami_0.jpeg"
import img_1 from "../../../public/assets/images/dynamic/miami_1.jpeg"
// import required modules
import { EffectCube, Pagination } from "swiper";

import CardsGallery from "./CardsGallery";

const TravelGallery = () => {

  return (
    <div className={styles.gallery__container} style={{
      backgroundColor: "#edf5f8"
    }}>
      <div className={styles.album__container}>
        <div
          className={styles.text__container}
          data-aos={"fade-right"}
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className={styles.section__title} style={{ alignSelf: "end" }} >TRAVELS</h1>
        </div>

        <div className={styles.gallery__container__cards}>
          <CardsGallery albumId="miami_bg" />
          <div className={styles.img__wrapper}>
            <img src={img_0.src} className={styles.img} />
            <img src={img_1.src} className={styles.img} />
            <h2 className={styles.section__subtitle}>MIAMI BEACH</h2>
          </div>
        </div>
      </div>
      <Gallery
        album={{ id: "corrientes", layout: "masonry" }}
        section={{
          title: "corrientes",
          titlePosition: "end",
          aosEffect: "fade-left",
          backgroundColor: "#edf5f8"
        }}
      />
    </div>
  );
};

export default TravelGallery;

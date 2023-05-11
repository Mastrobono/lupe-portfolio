import styles from "@/styles/gallery.module.scss";
import Gallery from "./Gallery";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import img_0 from "../../../public/assets/images/dynamic/miami_0.jpeg";
import img_1 from "../../../public/assets/images/dynamic/miami_1.jpeg";
// import required modules
import { EffectCube, Pagination } from "swiper";

import HeadlineGallery from "./HeadlineGallery";
import CardsGallery from "./CardsGallery";
import YouTube, { YouTubeProps } from "react-youtube";
import getPhotos from "@/hooks/useGetPhotos";
import getVideos from "@/hooks/useGetVideos";

const TravelGallery = () => {
  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      controls: 1,
    },
    title: "test",
  };
  const albumMiamiVideos = getVideos("miami");
  const albumMiamiCards = getPhotos("miami_bg");

  const albumCorrientes = getPhotos("corrientes");

  return (
    <div
      className={styles.gallery__container}
      style={{
        backgroundColor: "#edf5f8",
      }}
    >
      <div className={styles.album__container}>
        <div
          className={styles.text__container}
          data-aos={"fade-right"}
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className={styles.section__title} style={{ alignSelf: "end" }}>
            TRAVELS
          </h1>
          <h2 className={styles.section__subtitle} style={{ alignSelf: "end" }}>
            Miami Beach, US
          </h2>
        </div>

        <div className={styles.gallery__container__travels}>
          <div className={styles.wrapper__cards}>
            {<CardsGallery album={albumMiamiCards} />}
          </div>
          <div className={styles.wrapper__img}>
            <img src={img_0.src} className={styles.img} />
            <img src={img_1.src} className={styles.img} />
          </div>
          <div className={styles.wrapper__video}>
            <Gallery
              album={albumMiamiVideos}
              section={{
                backgroundColor: "#edf5f8",
                layout: "masonry",
              }}
            />
          </div>
        </div>
      </div>
      <Gallery
        album={albumCorrientes}
        section={{
          Headline: <HeadlineGallery title="Travels" subtitle="Corrientes" />,
          backgroundColor: "#edf5f8",
          layout: "masonry",
        }}
      />
    </div>
  );
};

export default TravelGallery;

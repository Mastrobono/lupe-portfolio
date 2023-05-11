import styles from "@/styles/gallery.module.scss";
import Gallery from "./Gallery";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards, EffectCube, Pagination } from "swiper";

interface Props {
  album: Array<string>
}
const CardsGallery = ({album}: Props) => {

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[EffectCards, Pagination, Autoplay]}
      className="swiper-cards"
    >
      {album.map((photo) => {
        return (
          <SwiperSlide>
            <img src={photo.src} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CardsGallery;

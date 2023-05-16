import styles from "@/styles/gallery.module.scss";
import pageStyles from "@/styles/page.module.scss";
import Gallery from "./Gallery";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//import data
import { videos } from "@/data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import required modules

import CardsGallery from "./CardsGallery";
import useGetPhotos from "@/hooks/useGetPhotos";
import useGetVideos from "@/hooks/useGetVideos";
import HeadlineGallery from "./HeadlineGallery";
import RenderYoutubeVideos from "./YoutubeVideos";
interface section {
  Headline?: JSX.Element;
  backgroundColor: string;
  layout: "masonry" | "columns" | "rows";
}

import useGetAosOpt from "@/hooks/useGetAosOpt";


const FilaGallery = ({ section }: { section: section }) => {
  const albumFilaCards = [
    useGetPhotos("fila").slice(6, 9),
    useGetPhotos("fila").slice(3, 6),
    useGetPhotos("fila").slice(0, 3),
  ];
  const albumFilaVideo = useGetVideos("fila")[0].src;

  const aosOpts = [useGetAosOpt('fade-down'), useGetAosOpt('fade-up')]

  return (
    <div
      className={`${styles.gallery__container}`}
      style={{
        backgroundColor: section?.backgroundColor,
      }}
    >
      <div className={`${styles.album__container}`}>
        <HeadlineGallery title="Fila" subtitle="" aosAnimation={"fade-left"} style={{alignSelf: 'start', color:'#000'}} />

        <div
          className={`${styles.gallery__container__cards} ${styles["gallery__container__cards--fila"]}`}
        >
          <div className={styles.wrapper}>
            {albumFilaCards.map((album, index) => (
              <div key={`filaCard-${index}`} className={`${styles.wrapper__cards}`} {...aosOpts[0]}>
                <CardsGallery album={album} section={{ imageFit: "cover" }} />
              </div>
            ))}
            <div
              className={`${styles.wrapper__video}`}
              {...aosOpts[1]}
            >
              {RenderYoutubeVideos(albumFilaVideo)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilaGallery;

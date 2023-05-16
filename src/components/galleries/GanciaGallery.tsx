import styles from "@/styles/gallery.module.scss";
import pageStyles from "@/styles/page.module.scss";
import Gallery from "./Gallery";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import required modules

import useGetAosOpt from "@/hooks/useGetAosOpt";

import CardsGallery from "./CardsGallery";
import useGetPhotos from "@/hooks/useGetPhotos";
import useGetVideos from "@/hooks/useGetVideos";
import HeadlineGallery from "./HeadlineGallery";
import RenderYoutubeVideos from "./YoutubeVideos";
import NextJsImage from "@/utilities/NextJsImage";
interface section {
  Headline?: JSX.Element;
  backgroundColor: string;
  layout: "masonry" | "columns" | "rows";
}

const GanciaGallery = ({ section }: { section: section }) => {
  const albumCards = useGetPhotos("gancia");
  const albumProfileCards = albumCards.splice(0, 3);
  const albumVideo = useGetVideos("gancia");

  const aosOpts = [useGetAosOpt('fade-right'), useGetAosOpt('fade-right'), useGetAosOpt('fade-right')]
 

  return (
    <div className={pageStyles.page__container}>
      <div
        className={`${styles.gallery__container}`}
        style={{
          backgroundColor: section?.backgroundColor,
        }}
      >
        <div className={`${styles.album__container}`}>
          <HeadlineGallery title="Gancia" subtitle="" aosAnimation="fade-left" style={{alignSelf: 'start', color:'#000'}}/>

          <div
            className={`${styles.gallery__container__cards} ${styles["gallery__container__cards--gancia"]}`}
          >
            <div className={styles.wrapper}>
              <div className={`${styles.wrapper__cards}`} {...aosOpts[0]}>
                <CardsGallery
                  album={albumProfileCards}
                  section={{ imageFit: "cover" }}
                />
              </div>
              <div className={`${styles.wrapper__video}`} {...aosOpts[1]}>
                {RenderYoutubeVideos(albumVideo)}
              </div>
              <div className={styles["wrapper__cards--full"]} {...aosOpts[2]}>
                <CardsGallery
                  album={albumCards}
                  section={{ imageFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanciaGallery;

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
import Image from "next/image";

import HeadlineGallery from "./HeadlineGallery";
import CardsGallery from "./CardsGallery";
import YouTube, { YouTubeProps } from "react-youtube";
import useGetPhotos from "@/hooks/useGetPhotos";
import useGetVideos from "@/hooks/useGetVideos";
import NextJsImage from "@/utilities/NextJsImage";
import generalStyles from "@/styles/index.module.scss";
import useGetAosOpt from "@/hooks/useGetAosOpt";
interface section {
  Headline?: JSX.Element;
  backgroundColor: string;
  layout: "masonry" | "columns" | "rows";
}

const TravelGallery = ({ section }: { section: section }) => {
  const albumMiamiProfileCards = useGetPhotos("miami");
  const albumMiamiBgCards = useGetPhotos("miami_bg");
  const albumMiamiVideos = useGetVideos("miami");
  const albumCorrientes = useGetPhotos("corrientes");

  const aosOpt = useGetAosOpt("fade-left");
  return (
    <div
      className={styles.page__container}
      style={{
        backgroundColor: section?.backgroundColor,
      }}
    >
      <div className={`${styles.gallery__container}`}>
        <div className={`${styles.album__container}`}>
          <HeadlineGallery
            title="Travels"
            subtitle="Miami Beach, US"
            aosAnimation="fade-left"
          />

          <div className={styles["gallery__container__cards--travels"]}>
            <div style={{ width: "65%" }} {...useGetAosOpt("fade-right")}>
              {
                <CardsGallery
                  album={albumMiamiBgCards}
                  section={{ imageFit: "cover" }}
                />
              }
            </div>
            <div style={{ width: "25%" }} {...useGetAosOpt("fade-left")}>
              {
                <CardsGallery
                  album={albumMiamiProfileCards}
                  section={{ imageFit: "cover" }}
                 
                />
              }
            </div>
          </div>
        </div>
        <Gallery
          album={albumMiamiVideos}
          section={{
            backgroundColor: "#edf5f8",
            layout: "masonry",
            columns: 3,
            aosOpt:{...useGetAosOpt("fade-up")}
          }}
          
        />
      </div>
      <Gallery
        album={albumCorrientes}
        section={{
          Headline: (
            <HeadlineGallery
              title="Travels"
              subtitle="Corrientes"
              aosAnimation="fade-right"
            />
          ),
          backgroundColor: "#edf5f8",
          layout: "masonry",
          columns: 4,
          aosOpt:{...useGetAosOpt("fade-left")}
        }}
      />
    </div>
  );
};

export default TravelGallery;

import styles from "@/styles/gallery.module.scss";
import pageStyles from "@/styles/page.module.scss";
import Gallery from "./Gallery";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import required modules

import useGetPhotos from "@/hooks/useGetPhotos";

import useGetAosOpt from "@/hooks/useGetAosOpt";
interface section {
  Headline?: JSX.Element;
  backgroundColor: string;
  layout: "masonry" | "columns" | "rows";
}

const KetupeGallery = ({ section }: { section: section }) => {
  const albumPhotos = useGetPhotos("ketupe");
  const albumHeaderPhotoSrc = albumPhotos[5].src;

  const aosOpts = [
    useGetAosOpt("fade-up"),
    useGetAosOpt("fade-right"),
    useGetAosOpt("fade-right"),
  ];

  return (
    <div className={pageStyles.page__container} style={{backgroundColor: '#1d1e1e'}}>
      <div
        className={`${styles.gallery__container}`}
        style={{
          backgroundColor: "#1d1e1e",
        }}
      >
        <div className={`${styles.album__container}`}>
          {section.Headline}

          <div
            className={`${styles.gallery__container__cards} ${styles["gallery__container__cards--ketupe"]}`}
          >
            <div className={styles.wrapper}>
              <div className={`${styles.wrapper__cards}`}>
                <Image
                  fill
                  src={albumHeaderPhotoSrc}
                  alt="Main Image Ketupe"
                  className={styles.cards__content}
                  {...aosOpts[0]}
                  loading="lazy"
                />
              </div>
              <div className={styles["wrapper__cards--full"]}>
                <Gallery
                  album={albumPhotos}
                  section={{
                    backgroundColor: "#edf5f81c",
                    layout: "masonry",
                    columns: 3,
                    opacity: 0.8,
                    aosOpt: { ...aosOpts[1] },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KetupeGallery;

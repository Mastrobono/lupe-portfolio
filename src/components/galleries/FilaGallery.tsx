import styles from "@/styles/gallery.module.scss";

import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import required modules

import SwiperCardsGallery from "../SwiperCardsGallery";
import useGetPhotos from "@/hooks/useGetPhotos";
import useGetVideos from "@/hooks/useGetVideos";
import HeadlineGallery from "../HeadlineGallery";
import RenderYoutubeVideos from "../RenderYoutubeVideos";

import useGetAosOpt from "@/hooks/useGetAosOpt";
import { sectionAttributes } from "@/types";

const FilaGallery = ({ section }: { section: sectionAttributes }) => {

  //Get photos ordered as i want in 3 rows
  const albumFilaCards = [
    useGetPhotos("fila").slice(6, 9),
    useGetPhotos("fila").slice(3, 6),
    useGetPhotos("fila").slice(0, 3),
  ];

  //Select
  const albumFilaVideo = useGetVideos("fila")[0];

  const aosOpts = [useGetAosOpt('fade-down'), useGetAosOpt('fade-up')]

  return (
    <div
      className={`${styles.gallery__container}`}
      style={{
        backgroundColor: section?.backgroundColor,
      }}
    >
      <div className={`${styles.album__container}`}>
        <HeadlineGallery title="Fila" subtitle="" aosOpt={useGetAosOpt('fade-left')} style={{ alignSelf: 'start', color: '#000' }} />

        <div
          className={`${styles.gallery__container__cards} ${styles["gallery__container__cards--fila"]}`}
        >
          <div className={styles.wrapper}>
            {albumFilaCards.map((album, index) => (
              <div key={`filaCard-${index}`} className={`${styles.wrapper__cards}`} {...aosOpts[0]}>
                <SwiperCardsGallery album={album} section={{ imageFit: "cover" }} />
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

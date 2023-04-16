import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import UseAnimations from "react-useanimations";
import maximizeMinimize from "react-useanimations/lib/maximizeMinimize";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "@/styles/gallery.module.scss";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import Image from "next/image";
import getPhotos from "@/utilities/getPhotos";

const GalleryPolaroid = ({albumId}: {albumId:string}) => {
  const [photos, setPhotos] = useState();
  useEffect(() => setPhotos(getPhotos(albumId)), [albumId]);

  const Slides = ($photos) => {
    return $photos?.map((photo, index) => (
      <SwiperSlide key={`polaroid-img-${index}`}>
        <div className="polaroid__border">
          <Image
            className={styles.polaroid}
            src={photo}
            width={200}
            height={200}
            alt="polaroid image"
          ></Image>
          <div className="polaroid__expand">
            <UseAnimations
              className={styles.expandIcon}
              animation={maximizeMinimize}
              strokeColor="#fff"
              fillColor="#fff"
              size={48}
              onClick={() => {
                console.log("open photo");
              }}
            />
          </div>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.swiper__container}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <Swiper
          className="polaroid__swiper"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3.5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          initialSlide={1}
          modules={[Autoplay, EffectCoverflow]}
        >
          {Slides(photos)}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryPolaroid;

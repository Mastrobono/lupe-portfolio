import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import UseAnimations from "react-useanimations";
import maximizeMinimize from "react-useanimations/lib/maximizeMinimize";
/*
import ketupe_0 from "../../public/assets/ketupe_0.jpeg";
import ketupe_1 from "../../public/assets/ketupe_1.jpeg";
import ketupe_2 from "../../public/assets/ketupe_2.jpeg";
import ketupe_3 from "../../public/assets/ketupe_3.jpeg";
import ketupe_4 from "../../public/assets/ketupe_4.jpg";
import ketupe_5 from "../../public/assets/ketupe_5.jpg";
import ketupe_6 from "../../public/assets/ketupe_6.jpg";
import ketupe_7 from "../../public/assets/ketupe_7.jpg";
import ketupe_8 from "../../public/assets/ketupe_8.jpg";
import ketupe_9 from "../../public/assets/ketupe_9.jpg";
*/

import polaroid_0 from "../../public/assets/polaroid_0.jpg";
import polaroid_1 from "../../public/assets/polaroid_1.jpeg";
import polaroid_2 from "../../public/assets/polaroid_2.jpeg";
import polaroid_3 from "../../public/assets/polaroid_3.jpeg";
import polaroid_4 from "../../public/assets/polaroid_4.jpeg";
import ReactPlayer from "react-player/youtube";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "@/styles/gallery.module.scss";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import Image from "next/image";

const PolaroidGallery = () => {
  /* const ketupeImages = [
    ketupe_0,
    ketupe_1,
    ketupe_2,
    ketupe_3,
    ketupe_4,
    ketupe_5,
    ketupe_6,
    ketupe_7,
    ketupe_8,
    ketupe_9,
  ];
  */

  const images = [polaroid_0, polaroid_1, polaroid_2, polaroid_3, polaroid_4];

  const Slides = () => {
    return images.map((image, index) => (
      <SwiperSlide key={`ketupe-img-${index}`}>
        <div className="polaroid__border">
          <Image
            className={styles.polaroid}
            src={image}
            width={200}
            height={200}
            alt="ketupe image"
          ></Image>
          <div className="polaroid__expand">
            <UseAnimations
              className={styles.expandIcon}
              animation={maximizeMinimize}
              strokeColor="#fff"
              fillColor="#fff"
              size={48}
              onClick={() => {
                console.log("open image");
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
        data-aos-duration="1800"
      >
        <Swiper
        className="polaroid__swiper"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
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
          pagination={true}
          modules={[Autoplay, EffectCoverflow]}
        >
          {Slides()}
        </Swiper>
      </div>
    </div>
  );
};

export default PolaroidGallery;

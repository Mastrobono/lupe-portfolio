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
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import NextJsImage from "../NextJsImage";

const GalleryPolaroid = ({ albumId }: { albumId: string }) => {
  const [photos, setPhotos] = useState<SlideImage[]>([]);
  const [ligthboxIndex, setLigthboxIndex] = useState<number>(-1);
  useEffect(() => setPhotos(getPhotos(albumId)), [albumId]);

  <Lightbox
    open={ligthboxIndex >= 0}
    index={ligthboxIndex}
    close={() => setLigthboxIndex(-1)}
    slides={photos}
    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
    render={{ slide: NextJsImage }}
  />


  const Slides = ($photos: SlideImage[]) => {
    return $photos?.map((photo, index) => (
      <SwiperSlide key={`polaroid-img-${index}`}>
        <div className="polaroid__border" onClick={() => setLigthboxIndex(index)}>
          <Image
            className={styles.polaroid}
            src={photo.src}
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
        <Lightbox
          open={ligthboxIndex >= 0}
          index={ligthboxIndex}
          close={() => setLigthboxIndex(-1)}
          slides={photos}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          render={{ slide: NextJsImage }}
        />
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

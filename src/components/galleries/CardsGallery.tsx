import styles from "@/styles/gallery.module.scss";
import Gallery from "./Gallery";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards, EffectCube, Pagination } from "swiper";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import NextJsImage from "@/utilities/NextJsImage";

interface Props {
  album: SlideImage[];
  section: section;
}

interface section {
  imageFit: "cover" | "contain";
}

const CardsGallery = ({ album, section }: Props) => {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Pagination, Autoplay]}
      className="swiper-cards"
    >
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={album}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        render={{ slide: NextJsImage }}
      />
      {album.map((photo, index) => {
        return (
          <SwiperSlide key={`swiperSlide-${index}`}>
            <Image
              src={photo}
              className={styles.img}
              alt={"card photographie"}
              fill
              sizes="100vw"
              style={{ objectFit: section.imageFit }}
              onClick={() => setLightboxIndex(index)}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CardsGallery;

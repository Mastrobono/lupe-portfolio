import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "@/styles/gallery.module.scss";
import { EffectCoverflow, Autoplay } from "swiper";
import Image from "next/image";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import NextJsImage from "../../utilities/NextJsImage";
import useGetPhotos from "@/hooks/useGetPhotos";
import RenderMaximizeMinimizeIcon from "../MazimizeMinimizeIcon";
import useCheckMobileScreen from "@/hooks/useCheckMobileScreen";
//Swiper component, recives photos, lightBox State handler and MaximizeMinimize icon
const SwiperGallery = ({
  photos,
  onOpenLightboxHandler,
  RenderMaximizeMinimizeIcon,
}: {
  photos: SlideImage[];
  onOpenLightboxHandler: (index: number) => void;
  RenderMaximizeMinimizeIcon: () => JSX.Element;
}) => {
  const isMobileScreen = useCheckMobileScreen();
  const Slides = photos?.map((photo, index) => (
    <SwiperSlide key={`polaroid-img-${index}`}>
      <div
        className="polaroid__border"
        onClick={() =>
          setTimeout(() => {
            onOpenLightboxHandler(index);
          }, 500)
        }
      >
        <Image
          className={styles.polaroid}
          src={photo.src}
          width={200}
          height={200}
          alt="polaroid image"
          loading="lazy"
        ></Image>
        <div className="polaroid__expand">
          <RenderMaximizeMinimizeIcon />
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      className="polaroid__swiper"
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={isMobileScreen ? 1 : 3.5} //3.5 desktop, 1 mobile
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
      {Slides}
    </Swiper>
  );
};

const PolaroidGallery = () => {
  //Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  //Get Photos
  const photos = useGetPhotos("polaroid")

  //Lightbox state handler
  const onOpenLightboxHandler = (lightboxIndex: number) =>
    setLightboxIndex(lightboxIndex);


  return (
    <div className={styles.container}>
      <div
        className={styles.swiper__container}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => {
            onOpenLightboxHandler(-1);
          }}
          slides={photos}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          render={{ slide: NextJsImage }}
        />
        <SwiperGallery
          photos={photos}
          onOpenLightboxHandler={onOpenLightboxHandler}
          RenderMaximizeMinimizeIcon={() => RenderMaximizeMinimizeIcon(lightboxIndex)}
        />
      </div>
    </div>
  );
};

export default PolaroidGallery;

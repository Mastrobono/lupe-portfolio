import styles from "@/styles/gallery.module.scss";
import Gallery from "../Gallery";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards, EffectCube, Pagination } from "swiper";
import { SlideImage } from "yet-another-react-lightbox/*";
import getPhotos from "@/utilities/getPhotos";

const CubeGallery = ({albumId, imageTitle} : {albumId: string, imageTitle?: string}) => {
    const [photos, setPhotos] = useState<SlideImage[]>([]);
    useEffect(() => {
        setPhotos(getPhotos(albumId, imageTitle));
    }, []);
    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            modules={[EffectCards, Pagination, Autoplay]}
            className="swiper-cards"
        >
            {photos.map(photo => {
                { console.log('photo', photo) }

                return (
                    <SwiperSlide>
                        <img src={photo.src} />
                        <p>{imageTitle}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default CubeGallery;

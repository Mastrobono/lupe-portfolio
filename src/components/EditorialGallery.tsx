import React, { useCallback, useRef, useState } from "react";
import PhotoAlbum, { RenderPhoto } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "@/styles/gallery.module.scss";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import NextJsImage from "../components/NextJsImage";

import editorial_0 from "../../public/assets/editorial_0.jpeg";
import editorial_1 from "../../public/assets/editorial_1.jpg";
import editorial_2 from "../../public/assets/editorial_2.jpg";
import editorial_3 from "../../public/assets/editorial_3.jpg";
import editorial_4 from "../../public/assets/editorial_4.jpg";
import editorial_5 from "../../public/assets/editorial_5.jpg";
import editorial_6 from "../../public/assets/editorial_6.jpg";
import editorial_7 from "../../public/assets/editorial_7.jpg";
import editorial_8 from "../../public/assets/editorial_8.jpg";
import editorial_9 from "../../public/assets/editorial_9.jpg";

const EditorialGallery = () => {
  const [index, setIndex] = useState(-1);
  const photos = [
    editorial_6,
    editorial_7,
    editorial_8,
    editorial_9,
    editorial_0,
    editorial_1,
    editorial_2,
    editorial_3,
    editorial_4,
    editorial_5,
  ];

  const RenderCustomPhoto: RenderPhoto = useCallback(
    ({ imageProps: { alt, style, ...restImageProps } }) => {
      return (
        <div
          data-aos={photos.map(attributes => {return attributes.src}).indexOf(restImageProps.src) ? 'fade-down-left' : 'fade-up-right'}
          data-aos-duration="2000"
          data-offset="-100px"
        >
          <img
            alt={alt}
            style={{ ...style, width: "100%", padding: 0 }}
            {...restImageProps}
          />
        </div>
      );
    },
    []
  );

  

  return (
    <div className={styles.page__container}>
      <div className={styles.editorial__container}>
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={[editorial_0, editorial_1, editorial_2]}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          render={{ slide: NextJsImage }}
        />

        <div
          className={styles.text__container}
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className={styles.section__title}>EDITORIAL</h1>
        </div>

        <div
          className={styles.album__container}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <PhotoAlbum
            photos={photos.map((photo) => {
              return {
                src: photo.src,
                width: photo.width,
                height: photo.height,
              };
            })}
            layout="columns"
            spacing={24}
            padding={0}
            columns={4}
            onClick={({ index }) => setIndex(index)}
            renderPhoto={RenderCustomPhoto}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorialGallery;

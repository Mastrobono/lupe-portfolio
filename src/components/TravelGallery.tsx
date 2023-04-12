import React, { useRef, useState } from "react";
import PhotoAlbum from "react-photo-album";
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
  const images = [
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

  return (
    <div className={`page__container`}>
      <div style={{ color: "#000" }}>
        <div>
          <p className={styles.text__greeting}>HI! I'M</p>
        </div>
      </div>
      <div className={styles.editorial__container}>
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={[editorial_0, editorial_1, editorial_2]}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          render={{ slide: NextJsImage }}
        />

        <div className={styles.album__container}>
          <PhotoAlbum
            photos={images.map((image) => {
              return {
                src: image.src,
                width: image.width,
                height: image.height,
              };
            })}
            layout="columns"
            spacing={24}
            padding={0}
            columns={4}
            onClick={({ index }) => setIndex(index)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorialGallery;

import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { ImageProps } from "next/image";
import getPhotos from "@/utilities/getPhotos";

interface props {
  album: album;
  section?: section;
}

interface album {
  id: string;
  layout: "masonry" | "columns" | "rows";
}
interface section {
  title: string;
  position: "top" | "left" | "bottom" | "right";
  aosEffect: string;
}

const Gallery = ({ album, section }: props) => {
  const [photos, setPhotos] = useState<Array<ImageProps>[]>([]);
  const [ligthboxIndex, setLigthboxIndex] = useState(-1);

  useEffect(() => {
    setPhotos(getPhotos(album.id));
  });

  const RenderCustomPhoto: RenderPhoto = useCallback(
    ({ imageProps: { alt, style, ...restImageProps } }) => {
      return (
        <div>
          <img
            alt={alt}
            style={{ ...style, width: "100%", padding: 0 }}
            {...restImageProps}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-offset="-300px"
          />
        </div>
      );
    },
    []
  );

  return (
    <div className={styles.page__container}>
      <div className={styles.gallery__container}>
        <Lightbox
          open={ligthboxIndex >= 0}
          index={ligthboxIndex}
          close={() => setLigthboxIndex(-1)}
          slides={photos}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          render={{ slide: NextJsImage }}
        />
        {section && (
          <div
            className={styles.text__container}
            data-aos={section.aosEffect}
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h1 className={styles.section__title}>{section.title}</h1>
          </div>
        )}
        <div className={styles.album__container}>
          <div className={styles.album__content}>
            <PhotoAlbum
              photos={photos.map((photos) => {
                return {
                  src: photos.src,
                  width: photos.width,
                  height: photos.height,
                };
              })}
              columns={(containerWidth) => {
                if (containerWidth < 400) return 2;
                if (containerWidth < 800) return 3;
                return 4;
            }}
              layout={album.layout}
              spacing={24}
              padding={0}
              onClick={({ index }) => setLigthboxIndex(index)}
              renderPhoto={RenderCustomPhoto}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

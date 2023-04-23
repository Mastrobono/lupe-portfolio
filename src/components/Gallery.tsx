import React, { useCallback, useEffect, useRef, useState } from "react";
import PhotoAlbum, { RenderPhoto } from "react-photo-album";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "@/styles/gallery.module.scss";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import NextJsImage from "./NextJsImage";
import getPhotos from "@/utilities/getPhotos";

interface props {
  album: album;
  section?: section;
}

interface album {
  id: string;
  layout: "masonry" | "columns" | "rows";
  customRender?: any;
}
interface section {
  title?: string;
  titlePosition?: "start" | "center" | "end";
  aosEffect?: string;
  backgroundColor: string;
}

const Gallery = ({ album, section }: props) => {
  const [photos, setPhotos] = useState<SlideImage[]>([]);
  const [ligthboxIndex, setLigthboxIndex] = useState<number>(-1);
  useEffect(() => {
    const isCustomRender = album.customRender && true;
    setPhotos(getPhotos(album.id, isCustomRender));
    console.log(photos, 'aa')
  }, []);

  const RenderCustomPhoto: RenderPhoto = useCallback(
    ({ imageProps: { alt, style, title, src, ...restImageProps } }) => {
      if (src == 'customRender') {
        return (<div>
          {album.customRender}
        </div>)
      } else {
        return (
          <div>
            <img
              alt={alt}
              style={{ ...style, width: "100%", padding: 0 }}
              src={src}
              title={title}
              {...restImageProps}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
              data-aos-offset="-300px"
            />
          </div>
        );
      }

    },
    [
    ]
  );

  return (

    <div className={styles.gallery__container} style={{ backgroundColor: section?.backgroundColor ? "#edf5f8" : "#000" }}>
      <Lightbox
        open={ligthboxIndex >= 0}
        index={ligthboxIndex}
        close={() => setLigthboxIndex(-1)}
        slides={photos}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        render={{ slide: NextJsImage }}
      />

      <div className={styles.album__container}>
        {section && (
          <div
            className={styles.text__container}
            data-aos={section.aosEffect}
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h1 className={styles.section__title} style={{ alignSelf: section.titlePosition }}>{section.title}</h1>
          </div>
        )}
        <div className={styles.album__content}>
          <PhotoAlbum
            photos={photos.map((photos: any) => {
              return {
                src: photos.src,
                width: photos.width,
                height: photos.height,
                title: photos.title
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
  );
};

export default Gallery;

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
import NextJsImage from "@/utilities/NextJsImage";
import Image from "next/image";
import "globals";

import RenderYoutubeVideos from "./YoutubeVideos";
import isImage from "@/utilities/isImage";
import RenderMaximizeMinimizeIcon from "../MazimizeMinimizeIcon";
interface props {
  album: album;
  section: section;
}

type album = Array<Array<string>>;
interface section {
  Headline?: JSX.Element;
  backgroundColor: string;
  layout: "masonry" | "columns" | "rows";
  columns: number;
  opacity?: number;
  aosOpt?: any;
}

const Gallery = ({ album, section }: props) => {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  const RenderCustom: RenderPhoto = useCallback(
    ({
      imageProps: {
        onClick,
        width,
        height,
        alt,
        style,
        title,
        src,
        ...restImageProps
      },
    }) => {
      return isImage(src) ? (
        <div className="album__photo" onClick={onClick} {...section?.aosOpt}>
          <img
            style={{ ...style, width: "100%", padding: 0 }}
            src={src}
            {...restImageProps}
            alt={alt}
          />
          <div className="icon--expand">
            {RenderMaximizeMinimizeIcon(lightboxIndex)}
          </div>
        </div>
      ) : (
        <div
          className="album__photo"
          {...section?.aosOpt}
          style={{ width: "100%", height: "400px" }}
        >
          {RenderYoutubeVideos(src)}
        </div>
      );
    },
    []
  );

  return (
    <div
      className={`${styles.gallery__container}`}
      style={{
        backgroundColor: section?.backgroundColor,
        opacity: section?.opacity,
      }}
    >
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        //@ts-ignore
        slides={album}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        render={{ slide: NextJsImage }}
      />

      <div className={styles.album__container}>
        {section && section.Headline && section.Headline}
        <div className={styles.album__content}>
          <PhotoAlbum
            photos={album.map((photos: any, index) => ({
              src: photos.src,
              width: photos.width,
              height: photos.height,
              title: photos.index,
              onClick: () =>
                setTimeout(() => {
                  setLightboxIndex(index);
                }, 500),
            }))}
            columns={(containerWidth) => {
              if (containerWidth < 600) return 2;
              if (containerWidth < 700) return 3;
              return section.columns;
            }}
            layout={section.layout}
            spacing={24}
            padding={0}
            onClick={({ index }) => setLightboxIndex(index)}
            //@ts-ignore
            renderPhoto={RenderCustom}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

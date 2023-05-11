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
import getPhotos from "@/hooks/useGetPhotos";
import YouTubePlayer from "react-player/youtube";
import getVideos from "@/hooks/useGetVideos";
import YouTube, { YouTubeProps } from "react-youtube";
import RenderYoutubeVideos from "./YoutubeVideos";
import { albumType } from "@/data/data";
import isImage from "@/utilities/isImage";
interface props {
  album: album;
  section: section;
}

type album = Array<Array<string>>;
interface section {
  Headline?: JSX.Element;
  backgroundColor: string;
  layout: "masonry" | "columns" | "rows";
}

const Gallery = ({ album, section }: props) => {
  const [ligthboxIndex, setLigthboxIndex] = useState<number>(-1);

  const RenderCustom: RenderPhoto = useCallback(
    ({ imageProps: { alt, style, title, src, ...restImageProps } }) => {
      return isImage(src) ? (
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
      ) : (
        RenderYoutubeVideos(src)
      );
    },
    []
  );

  return (
    <div
      className={styles.gallery__container}
      style={{ backgroundColor: section?.backgroundColor ? "#edf5f8" : "#000" }}
    >
      <Lightbox
        open={ligthboxIndex >= 0}
        index={ligthboxIndex}
        close={() => setLigthboxIndex(-1)}
        slides={album}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        render={{ slide: NextJsImage }}
      />

      <div className={styles.album__container}>
        {section && section.Headline && section.Headline}
        <div className={styles.album__content}>
          <PhotoAlbum
            photos={album.map((photos: any) => ({
              src: photos.src,
              width: photos.width,
              height: photos.height,
              title: photos.title,
            }))}
            columns={(containerWidth) => {
              if (containerWidth < 400) return 2;
              if (containerWidth < 800) return 3;
              return 4;
            }}
            layout={section.layout}
            spacing={24}
            padding={0}
            onClick={({ index }) => setLigthboxIndex(index)}
            renderPhoto={RenderCustom}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

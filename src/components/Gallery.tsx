import React, { useCallback, useState } from "react";

//Import react-photo-album
import PhotoAlbum, { RenderPhoto, Photo } from "react-photo-album";

//Import lightbox stuff
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

//Import styles
import styles from "@/styles/gallery.module.scss";

//Import utilities
import NextJsImage from "@/utilities/NextJsImage";
import isImage from "@/utilities/isImage";

import Image from "next/image";
import "globals";

//Import components
import RenderYoutubeVideos from "./RenderYoutubeVideos";
import RenderMaximizeMinimizeIcon from "./icons/MazimizeMinimizeIcon";
import { SlideImage } from "yet-another-react-lightbox";
import { sectionAttributes } from "@/types";

type album = Array<SlideImage>;

interface props {
  album: album;
  section: sectionAttributes;
}

const Gallery = ({ album, section }: props) => {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  const RenderCustom: RenderPhoto<Photo> = useCallback(
    ({ imageProps: { onClick, alt, title, src, sizes } }) => {
      return isImage(src) ? (
        <div className="album__photo" onClick={onClick} {...section?.aosOpt}>
          <Image
            fill
            src={src}
            {...{ alt, title, sizes, onClick }}
            className="album__photo img"
            loading="lazy"
          />
          <div className="icon--expand">
            {RenderMaximizeMinimizeIcon(lightboxIndex)}
          </div>
        </div>
      ) : (
        <div
          className="album__photo"
          style={{ width: "100%", height: "400px" }}
          {...section?.aosOpt}
        >
          {RenderYoutubeVideos(src)}
        </div>
      );
    },
    [lightboxIndex, section?.aosOpt]
  );

  const albumParsed: Photo[] = album.map((photos: any, index: any) => ({
    src: photos.src,
    width: photos.width || 300,
    height: photos.height || 300,
    title: photos.index,
    onClick: () =>
      setTimeout(() => {
        setLightboxIndex(index);
      }, 500),
  }));


  const getResponsiveColumns = (containerWidth: number) => {
    if (containerWidth < 600) return 2;
    if (containerWidth < 700) return 3;
    return section.columns || 4;
  };

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
        slides={album}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        render={{ slide: NextJsImage }}
      />

      <div className={styles.album__container}>
        {section && section.Headline && section.Headline}
        <div className={styles.album__content}>
          <PhotoAlbum
            photos={albumParsed}
            columns={(containerWidth) => getResponsiveColumns(containerWidth)}
            layout={section.layout || "masonry"}
            spacing={24}
            padding={0}
            onClick={({ index }) => setLightboxIndex(index)}
            renderPhoto={RenderCustom}
            sizes={{ size: "100vw" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
import React from "react";

//Import Styles
import styles from "@/styles/gallery.module.scss";
import pageStyles from "@/styles/page.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import required modules

import useGetAosOpt from "@/hooks/useGetAosOpt";

//Import hooks
import useGetPhotos from "@/hooks/useGetPhotos";
import useGetVideos from "@/hooks/useGetVideos";

//Import components
import SwiperCardsGallery from "../SwiperCardsGallery";
import RenderYoutubeVideos from "../RenderYoutubeVideos";

interface section {
  Headline?: JSX.Element;
  backgroundColor: string;
  layout: "masonry" | "columns" | "rows";
}

const GanciaGallery = ({ section }: { section: section }) => {
  const albumCards = useGetPhotos("gancia");
  const albumProfileCards = albumCards.splice(0, 3);
  const albumVideo = useGetVideos("gancia")[0];

  const aosOpts = [useGetAosOpt('fade-right'), useGetAosOpt('fade-right'), useGetAosOpt('fade-right')]


  return (
    <div className={pageStyles.page__container}>
      <div
        className={`${styles.gallery__container}`}
        style={{
          backgroundColor: section?.backgroundColor,
        }}
      >
        <div className={`${styles.album__container}`}>
          {section.Headline}

          <div
            className={`${styles.gallery__container__cards} ${styles["gallery__container__cards--gancia"]}`}
          >
            <div className={styles.wrapper}>
              <div className={`${styles.wrapper__cards}`} {...aosOpts[0]}>
                <SwiperCardsGallery
                  album={albumProfileCards}
                  section={{ imageFit: "cover" }}
                />
              </div>
              <div className={`${styles.wrapper__video}`} {...aosOpts[1]}>
                {RenderYoutubeVideos(albumVideo)}
              </div>
              <div className={styles["wrapper__cards--full"]} {...aosOpts[2]}>
                <SwiperCardsGallery
                  album={albumCards}
                  section={{ imageFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanciaGallery;

import React from "react";

// Import Swiper
import styles from "@/styles/gallery.module.scss";
import Gallery from "../Gallery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

//Import hooks
import useGetPhotos from "@/hooks/useGetPhotos";
import useGetVideos from "@/hooks/useGetVideos";
import useGetAosOpt from "@/hooks/useGetAosOpt";

//Import custom components
import HeadlineGallery from "../HeadlineGallery";
import SwiperCardsGallery from "../SwiperCardsGallery";

interface section {
  Headline?: JSX.Element;
  backgroundColor: string;
  layout: "masonry" | "columns" | "rows";
}

const TravelGallery = ({ section }: { section: section }) => {
  const albumMiamiProfileCards = useGetPhotos("miami");
  const albumMiamiBgCards = useGetPhotos("miami_bg");
  const albumMiamiVideos = useGetVideos("miami");

  console.log('album videos', albumMiamiVideos)

  const aosOpts = [useGetAosOpt("fade-right"), useGetAosOpt("fade-left")];

  return (
    <div className={`${styles.gallery__container}`} style={{ backgroundColor: section.backgroundColor }}>
      <div className={`${styles.album__container}`}>
        <HeadlineGallery
          title="Travels"
          subtitle="Miami Beach, US"
          aosOpt={useGetAosOpt("fade-right")}
          style={{ alignSelf: "end", color: "#000" }}
        />

        <div className={styles["gallery__container__cards--travels"]}>
          <div className={styles["cards__content"]} {...aosOpts[0]}>
            {
              <SwiperCardsGallery
                album={albumMiamiBgCards}
                section={{ imageFit: "cover" }}
              />
            }
          </div>
          <div className={styles["cards__content"]} {...aosOpts[1]}>
            {
              <SwiperCardsGallery
                album={albumMiamiProfileCards}
                section={{ imageFit: "cover" }}
              />
            }
          </div>
        </div>
      </div>
      <Gallery
        album={albumMiamiVideos}
        section={{
          backgroundColor: section.backgroundColor,
          layout: "masonry",
          columns: 3,
          aosOpt: { ...useGetAosOpt("fade-up") },
        }}
      />
    </div>
  );
};

export default TravelGallery;

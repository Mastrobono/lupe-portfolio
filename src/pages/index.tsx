//Import styles
import styles from "@/styles/page.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

//Aos scroll
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

// Import components
import Head from "next/head";
import Header from "@/components/Header";
import HeadlineGallery from "@/components/galleries/HeadlineGallery";
import Gallery from "@/components/galleries/Gallery";
import TravelGallery from "@/components/galleries/TravelGallery";
import useGetPhotos from "@/hooks/useGetPhotos";
import useGetVideos from "@/hooks/useGetVideos";
import { get } from "http";
import FilaGallery from "@/components/galleries/FilaGallery";
import GanciaGallery from "@/components/galleries/GanciaGallery";
import KetupeGallery from "@/components/galleries/KetupeGallery";
import useGetAosOpt from "@/hooks/useGetAosOpt";
import TikTokProfile from "@/components/TikTokProfile";

export default function Home() {
  useEffect(() => {
    setTimeout(() => AOS.init(), 2800);
  }, []);

  const albums = {
    editorial: useGetPhotos("editorial"),
    gancia: useGetVideos("gancia").concat(useGetPhotos("gancia")),
    ketupe: useGetPhotos("ketupe"),
    brandsProductions: useGetPhotos("marcas"),
    corrientes: useGetPhotos("corrientes"),
    brandsContent: useGetVideos("mostaza")
      .concat(useGetVideos("pantene"))
      .concat(useGetVideos("quilmesRock"))
      .concat(useGetVideos("sedalLollapalooza"))
      .concat(useGetVideos("contenidoMarcas")),
    tiktok: useGetVideos("tiktokActuacion")
      .concat(useGetVideos("tiktokBaile"))
      .concat(useGetVideos("tiktokLifestyle")),
  };

  const aosOpts = [
    useGetAosOpt("fade-left"),
    useGetAosOpt("fade-right"),
    useGetAosOpt("fade-left"),
    useGetAosOpt("fade-left"),
  ];

  return (
    <>
      <Head>
        <title>Lupe Cozzolino</title>
        <meta name="description" content="Lupe Cozzolino Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.app__container}>
        <Header></Header>
        <div className={`${styles.page__container}`}>
          <Gallery
            album={albums.editorial}
            section={{
              Headline: (
                <HeadlineGallery
                  title="Editorial Productions"
                  aosAnimation={"fade-right"}
                  style={{ alignSelf: "end", color: "#000" }}
                />
              ),
              backgroundColor: "#edf5f8",
              layout: "masonry",
              columns: 4,
              aosOpt: { ...aosOpts[0] },
            }}
          />
        </div>
        <div className={`${styles.page__container__full}`}>
          <TravelGallery
            section={{
              Headline: (
                <HeadlineGallery
                  title="Editorial Productions"
                  aosAnimation={"fade-left"}
                  style={{ alignSelf: "end", color: "#000" }}
                />
              ),
              backgroundColor: "#e5ecf8",
              layout: "masonry",
            }}
          />
        </div>
        <div className={`${styles.page__container}`}>
          <Gallery
            album={albums.corrientes}
            section={{
              Headline: (
                <HeadlineGallery
                  title="Travels"
                  subtitle="Corrientes"
                  aosAnimation="fade-right"
                  style={{ alignSelf: "start", color: "#000" }}
                />
              ),
              backgroundColor: "#edf5f8",
              layout: "masonry",
              columns: 4,
              aosOpt: { ...useGetAosOpt("fade-right") },
            }}
          />
        </div>

        <div className={`${styles.page__container__full}`}>
          <Gallery
            album={albums.brandsProductions}
            section={{
              Headline: (
                <HeadlineGallery
                  title="Brands Productions"
                  aosAnimation={"fade-left"}
                  style={{ alignSelf: "end", color: "#fff" }}
                />
              ),
              backgroundColor: "#1a1b1b",
              layout: "masonry",
              columns: 4,
              aosOpt: { ...aosOpts[1] },
            }}
          />
        </div>
        <div
          className={`${styles.page__container} ${styles["page__container--full"]}`}
        >
          <FilaGallery
            section={{
              Headline: (
                <HeadlineGallery
                  title="Fila"
                  aosAnimation={"fade-left"}
                  style={{ alignSelf: "start", color: "#000" }}
                />
              ),
              backgroundColor: "#edf5f8",
              layout: "masonry",
            }}
          />
        </div>

        <GanciaGallery
          section={{
            Headline: (
              <HeadlineGallery
                title="Gancia"
                aosAnimation={"fade-left"}
                style={{ alignSelf: "end", color: "#000" }}
              />
            ),
            backgroundColor: "#edf5f8",
            layout: "masonry",
          }}
        />

        <div
          className={`${styles.page__container} ${styles["page__container--full"]}`}
        >
          <Gallery
            album={albums.brandsContent}
            section={{
              Headline: (
                <HeadlineGallery
                  title="Brands Content"
                  aosAnimation={"fade-right"}
                  style={{ alignSelf: "start", color: "#000" }}
                />
              ),
              backgroundColor: "#edf5f8",
              layout: "masonry",
              columns: 5,
              aosOpt: { ...aosOpts[2] },
            }}
          />
        </div>

        <KetupeGallery
          section={{
            Headline: (
              <HeadlineGallery
                title="Ketupe"
                aosAnimation={"fade-down"}
                style={{ alignSelf: "center", color: "#fff" }}
              />
            ),
            backgroundColor: "#edf5f8",
            layout: "masonry",
          }}
        />

      </main>
    </>
  );
}

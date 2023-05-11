//Import styles
import styles from "@/styles/index.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

//Aos scroll
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

// Import components
import Head from "next/head";
import Header from "@/components/Header";
import HeadlineGallery from "@/components/galleries/HeadlineGallery";
import Gallery from "@/components/galleries/Gallery";
import TravelGallery from "@/components/galleries/TravelGallery";
import getPhotos from "@/hooks/useGetPhotos";
import getVideos from "@/hooks/useGetVideos";
import { get } from "http";

export default function Home() {
  useEffect(() => {
    setTimeout(() => AOS.init(), 2800);
  }, []);

  const albums = {
    editorial: getPhotos("editorial"),
    fila: getVideos("fila"),
    gancia: getVideos("gancia").concat(getPhotos("gancia")),
    ketupe: getPhotos('ketupe')
  };

  console.log("hero", albums.gancia);
  return (
    <>
      <Head>
        <title>Lupe Cozzolino</title>
        <meta name="description" content="Lupe Cozzolino Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header></Header>
        <div className={styles.page__container__full}>
          <Gallery
            album={albums.editorial}
            section={{
              Headline: <HeadlineGallery title="Editorial Productions" />,
              backgroundColor: "#edf5f8",
              layout: "masonry",
            }}
          />
        </div>
        <div className={styles.page__container}>
          <TravelGallery />
        </div>
        <div className={styles.page__container__full}>
          <Gallery
            album={albums.fila}
            section={{
              Headline: <HeadlineGallery title="Fila" />,
              backgroundColor: "#edf5f8",
              layout: "masonry",
            }}
          />
        </div>

        <div className={styles.page__container}>
          <Gallery
            album={albums.gancia}
            section={{
              Headline: <HeadlineGallery title="Gancia" />,
              backgroundColor: "#edf5f8",
              layout: "masonry",
            }}
          />
        </div>
        <div className={styles.page__container__full}>
          <Gallery
            album={albums.ketupe}
            section={{
              Headline: <HeadlineGallery title="Ketupe" />,
              backgroundColor: "#edf5f8",
              layout: "masonry",
            }}
          />
        </div>
      </main>
    </>
  );
}

/*
TODO:

Me falta:
Contenido para marcaS:
    Fila , fotos + videos
    Gancia, fotos + videos
    Mostaza, video
    pANTENE, video
    Quilmes, Video
    Sedal, Video
    Contenido par marcas Video
Prodduciones para marcas : fotos
Ketupe: Fotos
Tiktoks: 3 tipos


*/

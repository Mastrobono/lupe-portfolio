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

export default function Home() {
  useEffect(() => {
    setTimeout(() => AOS.init(), 2800);
  }, []);

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
            album={{ id: "editorial", layout: "masonry" }}
            section={{
              Headline: <HeadlineGallery title="Editorial Productions"/>,
              backgroundColor: "#edf5f8",
            }}
          />
        </div>
        <div className={styles.page__container}>
          <TravelGallery />
        </div>
      </main>
    </>
  );
}

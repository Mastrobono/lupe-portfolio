import Header from "@/components/Header";
import Head from "next/head";
import styles from "@/styles/index.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Gallery from "@/components/Gallery";
import GalleryTravel from "@/components/galleries/GalleryTravel";

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
              title: "EDITORIAL PRODUCTIONS",
              titlePosition: "start",
              aosEffect: "fade-up",
              backgroundColor: "#edf5f8"
            }}
          />
        </div>
        <div className={styles.page__container__full}>
          <GalleryTravel />
        </div>
      </main>
    </>
  );
}

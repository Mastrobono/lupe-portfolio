import Header from "@/components/Header";
import Head from "next/head";
import styles from "@/styles/index.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Gallery from "@/components/Gallery";
import GalleryTravel from "@/components/GalleryTravel";

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
        <Gallery
          album={{ id: "editorial", layout: "masonry" }}
          section={{
            title: "EDITORIAL",
            position: "left",
            aosEffect: "fade-left",
          }}
        />
        <GalleryTravel />
      </main>
    </>
  );
}

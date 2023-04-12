import Header from "@/components/Header";
import Gallery from "@/components/PolaroidGallery";
import Head from "next/head";
import styles from "@/styles/index.module.scss";
import PolaroidGallery from "@/components/PolaroidGallery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import maximizeMinimize from "react-useanimations/lib/maximizeMinimize";
import EditorialGallery from "@/components/EditorialGallery";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
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
        <EditorialGallery/>
      </main>
    </>
  );
}

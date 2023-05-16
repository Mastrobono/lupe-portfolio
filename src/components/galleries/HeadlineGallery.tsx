import React from "react";
import styles from "@/styles/gallery.module.scss";

const HeadlineGallery = ({
  title,
  subtitle,
  aosAnimation,
}: {
  title?: string;
  subtitle?: string;
  aosAnimation: string;
}) => {
  const aosOpt = {
    "data-aos": aosAnimation,
    "data-aos-easing": "linear",
    "data-aos-duration": "1000",
    "data-aos-offset": "-300px",
  };
  return (
    <div className={styles.text__container} {...aosOpt}>
      <h1 className={styles.section__title} style={{ alignSelf: "end" }}>
        {title}
      </h1>
      <h2 className={styles.section__subtitle} style={{ alignSelf: "end" }}>
        {subtitle}
      </h2>
    </div>
  );
};

export default HeadlineGallery;

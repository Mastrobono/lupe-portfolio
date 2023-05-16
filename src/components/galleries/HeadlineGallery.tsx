import React, { CSSProperties } from "react";
import styles from "@/styles/gallery.module.scss";

const HeadlineGallery = ({
  title,
  subtitle,
  aosAnimation,
  style,
}: {
  title?: string;
  subtitle?: string;
  aosAnimation: string;
  style: CSSProperties;
}) => {
  const aosOpt = {
    "data-aos": aosAnimation,
    "data-aos-easing": "linear",
    "data-aos-duration": "1000",
    "data-aos-offset": "-300px",
  };
  return (
    <div className={styles.text__container} {...aosOpt}>
      <h1 className={styles.section__title} style={style}>
        {title}
      </h1>
      {subtitle && (
        <h2 className={styles.section__subtitle} style={style}>
          {subtitle}
        </h2>
      )}
    </div>
  );
};

export default HeadlineGallery;

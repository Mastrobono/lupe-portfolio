import React, { CSSProperties } from "react";
import styles from "@/styles/gallery.module.scss";
import { AOSAttributes } from "@/types";

const HeadlineGallery = ({
  title,
  subtitle,
  aosOpt,
  style,
}: {
  title?: string;
  subtitle?: string;
  aosOpt: AOSAttributes;
  style: CSSProperties;
}) => {
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

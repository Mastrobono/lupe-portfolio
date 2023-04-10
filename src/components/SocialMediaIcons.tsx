import styles from "./socialMediaIcons.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useState, useEffect } from "react";

interface props {
  socialMediasLinks: Array<socialMediaType>;
}

type socialMediaType = {
  [N in "youtube" | "instagram" | "tiktok"]?: string;
}

interface socialMedia {
  url: string, isAnimated: boolean, icon: IconDefinition
}

const SocialMediaIcons = (socialMediaLinks: props) => {
  console.log(socialMediaLinks)
  const [activeAnimation, setActiveAnimation] = useState(0);

  setInterval(() => {
    setActiveAnimation(activeAnimation < Object.keys(socialMediaLinks).length - 1 ? activeAnimation + 1 : 0)
  }, 3000)

  const SocialMediaIcon = ({ url, icon, isAnimated }: socialMedia) => {
    return (
      <FontAwesomeIcon
        icon={icon}
        className={`${styles.icon3d} ${isAnimated ? styles.animated : ""}`}
        onClick={() => window.location = url}
      />
    );
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className={styles.container}
    >

      {
        Object.keys(socialMediaLinks).map((key: string) => {
          const icon = key == "instagram" ? faInstagram : key == 'youtube' ? faYoutube : faTiktok;
          const isAnimated = Object.keys(socialMediaLinks)[activeAnimation] == key;
          return (
            key && <SocialMediaIcon url={socialMediaLinks[key]} icon={icon} isAnimated={isAnimated} />

          )
        })
      }
    </div>
  );
};

export default SocialMediaIcons;

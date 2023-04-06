import styles from "./socialMediaIcons.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useRef, useState, useEffect } from "react";
interface props {
  twitter: string;
  instagram: string;
  tiktok: string;
  youtube: string;
}

interface socialMedia {
  icon: IconDefinition;
  url: string;
  intervalAnimation: number;
}

const SocialMediaIcons = ({ twitter, instagram, tiktok, youtube }: props) => {
  const [activeAnimation, setActiveAnimation] = useState(0);

  const SocialMediaIcon = ({ icon, url, intervalAnimation }: socialMedia) => {
    const [isAnimated, setIsAnimated] = useState<boolean>(false);

    useEffect(() => {
      setInterval(() => {
        console.log(intervalAnimation);
        setIsAnimated(true);
        setTimeout(() => {
          setIsAnimated(false);
        }, 2000);
      }, intervalAnimation);
    }, []);
    return (
      <FontAwesomeIcon
        icon={icon}
        className={`${styles.icon3d} ${isAnimated ? styles.animated : ""}`}
      >
        <a href={url} target="_blank" rel="noopener noreferrer"></a>
      </FontAwesomeIcon>
    );
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className={styles.container}
    >
      {twitter && (
        <SocialMediaIcon
          icon={faTwitter}
          url={twitter}
          activeAnimation={2000}
        />
      )}
      {instagram && (
        <SocialMediaIcon
          icon={faInstagram}
          url={instagram}
          intervalAnimation={4000}
        />
      )}
      {youtube && (
        <SocialMediaIcon
          icon={faYoutube}
          url={youtube}
          intervalAnimation={6000}
        />
      )}
      {tiktok && (
        <SocialMediaIcon
          icon={faTiktok}
          url={tiktok}
          intervalAnimation={8000}
        />
      )}
    </div>
  );
};

export default SocialMediaIcons;

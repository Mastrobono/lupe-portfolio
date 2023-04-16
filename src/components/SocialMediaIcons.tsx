import styles from "@/styles/socialMediaIcons.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";

interface props {
  socialMediasLinks: Array<socialMediaType>;
}

type socialMediaType = {
  [N in "youtube" | "instagram" | "tiktok"]?: string;
};

interface socialMedia {
  socialMediaKey: string;
  url: string;
  isAnimated: boolean;
}

const SocialMediaIcons = (socialMediaLinks: props) => {
  const socialMediaLinksArr = Object.keys(socialMediaLinks);

  const SocialMediaIcon = ({
    socialMediaKey,
    url,
  }: socialMedia) => {
    const icon =
      socialMediaKey == "instagram"
        ? faInstagram
        : socialMediaKey == "youtube"
        ? faYoutube
        : socialMediaKey == "tiktok"
        ? faTiktok
        : faInstagram;
    return (
      <FontAwesomeIcon
        key={socialMediaKey}
        icon={icon}
        className={`${styles.icon3d} ${socialMediaKey}`}
        onClick={() => ((window as Window).location = url)}
      />
    );
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      className={styles.container}
    >
      {socialMediaLinksArr.map((socialMediaKey: string) => {
        return (
          socialMediaKey && (
            <SocialMediaIcon
              socialMediaKey={socialMediaKey}
              url={socialMediaLinks[socialMediaKey]}
            />
          )
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;

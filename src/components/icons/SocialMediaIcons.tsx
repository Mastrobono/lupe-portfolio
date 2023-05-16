import styles from "@/styles/socialMediaIcons.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTiktok,
  faSnapchatGhost,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { ObjectType } from "typescript";


type socialMediaType = {
  [N in "youtube" | "instagram" | "tiktok"]?: string;
};

interface socialMedia {
  socialMediaKey: string;
  url: string;
}

const SocialMediaIcons = ({ socialMediaLinks }: { socialMediaLinks: socialMediaType }) => {
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
            : faSnapchatGhost;
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
      {socialMediaLinksArr.map((socialMediaKey: string, index) => {
        return (
          socialMediaKey && (
            <SocialMediaIcon
            key={`icon-${index}`}
              socialMediaKey={socialMediaKey}
              url={socialMediaLinks[socialMediaKey as keyof socialMediaType] as string}
            />
          )
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;

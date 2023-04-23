import styles from "@/styles/socialMediaIcons.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTiktok,
  faTwitter,
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

const SocialMediaIcons = (socialMediaLinks: Array<socialMediaType>) => {
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
              url={socialMediaLinks[socialMediaKey as keyof Array<socialMediaType>] as string}
            />
          )
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;

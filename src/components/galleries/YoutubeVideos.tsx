import YouTube, { YouTubeProps } from "react-youtube";
import styles from "@/styles/gallery.module.scss";

const RenderYoutubeVideos = (src: string) => {
  const opts: YouTubeProps["opts"] = {
    height: "300",
    width: "300",
    playerVars: {
      controls: 1,
    },
    title: "test",
  };
  return <YouTube videoId={src} opts={opts} />;
};

export default RenderYoutubeVideos;

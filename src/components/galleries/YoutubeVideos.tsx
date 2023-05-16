import YouTube, { YouTubeProps } from "react-youtube";

const RenderYoutubeVideos = (src: string) => {
  const opts: YouTubeProps["opts"] = {
    width:'100%',
    height:'100%',
    playerVars: {
      controls: 1,
    },
    title: "test",
    
  };
  return <YouTube videoId={src} style={{width:"100%", height:"100%"}} opts={opts} />;
};

export default RenderYoutubeVideos;

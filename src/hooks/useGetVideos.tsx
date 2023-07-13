import { videosUrl } from "@/data/data";

type videosPerAlbumLinks = keyof typeof videosUrl;

function getVideos(albumId: string) {
  const videosId = [
    albumId as videosPerAlbumLinks,
  ] as Array<videosPerAlbumLinks>;
  //@ts-ignore
  return videosUrl[videosId].map((video) => {
    return {
      src: video,
      width: "300",
      height: "300",
    };
  });
}
export default getVideos;

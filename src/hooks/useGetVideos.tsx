import { videos } from "@/data/data";

type videosPerAlbumLinks = keyof typeof videos;

function getVideos(albumId: string) {
  const videosId = [
    albumId as videosPerAlbumLinks,
  ] as Array<videosPerAlbumLinks>;
  return videos[videosId].map((video) => {
    return {
      src: video,
      width: "300",
      height: "300",
    };
  });
}
export default getVideos;

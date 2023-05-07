import { videosPerAlbumLinks } from "@/enums/videos";

type videosPerAlbumLinks = keyof typeof videosPerAlbumLinks;

function getVideos(albumId: string) {
  return Object.keys(
    videosPerAlbumLinks[albumId as videosPerAlbumLinks]
  ) as Array<videosPerAlbumLinks>;
}
export default getVideos;

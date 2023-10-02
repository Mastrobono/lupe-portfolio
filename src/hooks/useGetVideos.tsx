import { videosUrl } from "@/data/data";

type videosPerAlbumLinks = keyof typeof videosUrl;

function useGetVideos(albumId: string) {
  const videosId = [
    albumId as videosPerAlbumLinks,
  ] as Array<videosPerAlbumLinks>;
  //@ts-ignore
  return videosUrl[videosId].map((video) => {
    return {
      src: video
    };
  });
}
export default useGetVideos;

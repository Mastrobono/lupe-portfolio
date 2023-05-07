import { photosPerAlbumLenght } from "@/enums/photos";

function getPhotos(albumId: string, imageTitle?: string) {
  const newPhotos = [];

  for (
    let photoIndex = 0;
    photoIndex <
    photosPerAlbumLenght[albumId as keyof typeof photosPerAlbumLenght];
    photoIndex++
  ) {
    newPhotos.push(
      require(`../../public/assets/images/dynamic/${albumId}_${photoIndex}.jpeg`)
        .default
    );
    newPhotos[photoIndex].title =
      imageTitle || albumId[0].toUpperCase() + albumId.slice(1);
  }
  return newPhotos;
}

export default getPhotos;

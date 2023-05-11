import { photos } from "@/data/data";

function getPhotos(albumId: string) {
  const newPhotos = [];
  for (
    let photoIndex = 0;
    photoIndex < photos[albumId as keyof typeof photos];
    photoIndex++
  ) {
    newPhotos.push(
      require(`../../public/assets/images/dynamic/${albumId}_${photoIndex}.jpeg`)
        .default
    );
    newPhotos[photoIndex].title = albumId[0].toUpperCase() + albumId.slice(1);
    newPhotos[photoIndex].isPhoto = true;
  }
  return newPhotos;
}

export default getPhotos;

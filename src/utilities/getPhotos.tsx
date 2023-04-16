import { albumPhotosLength } from "@/enums/enums";

const getPhotos = (albumId: string) => {
  const newPhotos = [];
  for (
    let photoIndex = 0;
    photoIndex < albumPhotosLength[albumId];
    photoIndex++
  ) {
    newPhotos.push(
      require(`../../public/assets/images/dynamic/${albumId}_${photoIndex}.jpeg`)
        .default
    );
  }
  return newPhotos;
};

export default getPhotos;

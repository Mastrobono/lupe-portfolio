import { photosQuantity } from "@/data/data";

function getPhotos(albumId: string) {
  const newPhotos = [];
  for (
    let photoIndex = 0;
    photoIndex < photosQuantity[albumId as keyof typeof photosQuantity];
    photoIndex++
  ) {
    try {
      newPhotos.push(
        require(`../../public/assets/images/dynamic/${albumId}_${photoIndex}.jpeg`)
          .default
      );
      newPhotos[photoIndex].title = albumId[0].toUpperCase() + albumId.slice(1);
    } catch (err) {
      //console.log("err", err);
    }
  }
  return newPhotos;
}

export default getPhotos;

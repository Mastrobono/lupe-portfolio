import { albumPhotosLength } from "@/enums/enums";

const getPhotos = (albumId: string, imageTitle?: string, isCustomRender?: boolean) => {
  const newPhotos = isCustomRender ? [{ title: '', width: 700, height: 700, src: 'customRender' }] : [];

  for (
    let photoIndex = 0;
    photoIndex < albumPhotosLength[albumId as keyof typeof albumPhotosLength];
    photoIndex++
  ) {
    newPhotos.push(
      require(`../../public/assets/images/dynamic/${albumId}_${photoIndex}.jpeg`)
        .default
    );
    newPhotos[photoIndex].title =  imageTitle || albumId[0].toUpperCase() + albumId.slice(1);
  }
  return newPhotos;
};

export default getPhotos;

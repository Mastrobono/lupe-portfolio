const isImage = (src: string) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(src);
};

export default isImage;
import useGetPhotos from "./useGetPhotos";
import useGetVideos from "./useGetVideos";

function useGetAlbums() {
    const albums = {
        editorial: useGetPhotos("editorial"),
        gancia: useGetVideos("gancia").concat(useGetPhotos("gancia")),
        ketupe: useGetPhotos("ketupe"),
        brandsProductions: useGetPhotos("marcas"),
        corrientes: useGetPhotos("corrientes"),
        brandsContent: useGetVideos("mostaza")
            .concat(useGetVideos("pantene"))
            .concat(useGetVideos("quilmesRock"))
            .concat(useGetVideos("sedalLollapalooza"))
            .concat(useGetVideos("contenidoMarcas")),
        tiktok: useGetVideos("tiktokActuacion")
            .concat(useGetVideos("tiktokBaile"))
            .concat(useGetVideos("tiktokLifestyle")),
    };
    return albums
}

export default useGetAlbums;
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { mainSlice } from "../../store/reducers/MainSlice";
import { getPhotos } from "../../services/image.service";

const PhotoGallery = () => {
  const { photos } = useAppSelector((state) => state.mainReducer);
  const { addPhoto } = mainSlice.actions;
  const dispatch = useAppDispatch();

  const photosFetch = useCallback(async () => {
    const listPhotos = await getPhotos(1, 10);
    console.log(listPhotos);
    dispatch(addPhoto(listPhotos));
  }, [addPhoto, dispatch]);

  useEffect(() => {
    photosFetch();
  }, [photosFetch]);

  return (
    <div>
      {photos.map((item) => (
        <img key={item.id} src={item.urls.regular} alt={item.alt_description} />
      ))}
    </div>
  );
};

export default PhotoGallery;

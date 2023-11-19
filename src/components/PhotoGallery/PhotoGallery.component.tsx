import { useCallback, useEffect } from "react";
import { Image } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook";
import { mainSlice } from "../../store/reducers/MainSlice.reducer";
import { getPhotos } from "../../services/image.service";
import Comments from "../Comments/Comments.component";
import { addMockComments } from "../../utils/comments.utils";
import { DataType } from "../../models/PhotoGallery.model";
import { PAGE, PHOTOS_ON_PAGE } from "../../models/constants.model";

const PhotoGallery = () => {
  const { photos } = useAppSelector((state) => state.mainReducer);
  const { addPhoto } = mainSlice.actions;
  const dispatch = useAppDispatch();

  const photosFetch = useCallback(async () => {
    const listPhotos: DataType[] = await getPhotos(PAGE, PHOTOS_ON_PAGE);
    const photosWithMockComments = listPhotos.map((item: DataType) =>
      addMockComments(item)
    );
    dispatch(addPhoto(photosWithMockComments));
  }, [addPhoto, dispatch]);

  useEffect(() => {
    photosFetch();
  }, [photosFetch]);

  return (
    <div className="grid grid-cols-3 gap-2">
      {photos.map((item) => (
        <Image
          width={200}
          key={item.id}
          src={item.urls.regular}
          alt={item.alt_description}
          preview={{
            imageRender: () => (
              <div className="bg-white flex flex-col items-center max-w-[70%] max-h-[80%] overflow-y-auto">
                <img
                  className="h-96 w-full object-contain"
                  src={item.urls.regular}
                  alt={item.alt_description}
                />
                <Comments pictureData={item} />
              </div>
            ),
            toolbarRender: () => null,
          }}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;

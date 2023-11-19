import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/User.model";
import { AddCommentType, DataType, DeleteCommentType } from "../../models/PhotoGallery.model";
import { USERS } from "../../models/constants.model";

interface MainState {
  users: IUser[];
  currentUser: string | null;
  isAuth: boolean;
  photos: DataType[];
  error: string;
}

const initialState: MainState = {
  users: USERS,
  currentUser: null,
  isAuth: false,
  photos: [],
  error: "",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    login(state: MainState, action: PayloadAction<IUser>) {
      state.currentUser = action.payload.id;
      state.isAuth = true;
      state.users = [...state.users, action.payload];
    },
    loginError(state: MainState, action: PayloadAction<string>){
      state.error = action.payload;
    },
    addPhoto(state: MainState, action: PayloadAction<DataType[]>) {
      state.photos = action.payload;
    },
    addComment(state: MainState, action: PayloadAction<AddCommentType>) {
      state.photos = state.photos.map((item) =>
        item.id === action.payload.photoId
          ? { ...item, comments: item.comments.concat(action.payload.comment) }
          : item
      );
    },
    deleteComment(state: MainState, action: PayloadAction<DeleteCommentType>){
      state.photos = state.photos.map((item) =>
        item.id === action.payload.photoId
          ? {...item, comments: item.comments.filter(({id}) => id !== action.payload.commentId)}
          : item
      );
    },
  },
});

export default mainSlice.reducer;

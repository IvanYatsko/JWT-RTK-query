import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/User";
import { DataType } from "../../models/PhotoGallery";

interface MainState {
  users: IUser[];
  photos: DataType[];
  error: string;
}

const initialState: MainState = {
  users: [
    {
      username: "Ivan",
      password: "12345",
      id: "79bf80ce-cb05-468b-9362-9fd95f244e07",
    },
    {
      username: "Vlad",
      password: "01234",
      id: "7319a8fa-7b60-40ed-9096-a4da0093e51a",
    },
  ],
  photos: [],
  error: "",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.users = [...state.users, action.payload];
    },
    addPhoto(state, action: PayloadAction<DataType[]>) {
      state.photos = action.payload;
    },
  },
});

export default mainSlice.reducer;

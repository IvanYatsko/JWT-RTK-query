import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
  users: IUser[];
  error: string;
}

const initialState: UserState = {
  users: [],
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

  },
});

export default userSlice.reducer;

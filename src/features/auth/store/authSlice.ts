import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types/user.types";

interface AuthState {
  token: string | null;
  user: IUser | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  token: null,
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ token: string; user?: IUser }>,
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user ?? null;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  last_login: string;
  date_joined: string;
}

export interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

export const { login } = authSlice.actions;

export const selectToken = (state: { auth: AuthState }) => state.auth.token;

export default authSlice.reducer;

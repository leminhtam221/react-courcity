import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import jwtDecode from "jwt-decode";
import storageKey from "constant/storage-key";

export const register = createAsyncThunk("user/register", async (userData) => {
  const data = await userApi.register(userData);
  const token = data.data.accessToken;
  const decode = jwtDecode(token);
  const id = decode.sub;
  const user = await userApi.getUser(id);

  const newUser = { ...user.data };
  delete newUser.createdAt;
  delete newUser.password;

  const newData = {
    accessToken: data.data.accessToken,
    user: newUser,
  };
  localStorage.setItem(storageKey.TOKEN, token);
  localStorage.setItem(storageKey.USER, JSON.stringify(newUser));
  return newData;
});

export const login = createAsyncThunk("user/register", async (userData) => {
  const data = await userApi.login(userData);
  const token = data.data.accessToken;
  const decode = jwtDecode(token);
  const id = decode.sub;
  const user = await userApi.getUser(id);

  const newUser = { ...user.data };
  delete newUser.createdAt;
  delete newUser.password;

  const newData = {
    accessToken: data.data.accessToken,
    user: newUser,
  };
  localStorage.setItem(storageKey.TOKEN, token);
  localStorage.setItem(storageKey.USER, JSON.stringify(newUser));
  return newData;
});

const initialState = {
  user: JSON.parse(localStorage.getItem(storageKey.USER)) || {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem(storageKey.TOKEN);
      localStorage.removeItem(storageKey.USER);
      state.user = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

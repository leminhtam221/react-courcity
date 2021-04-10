import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "redux/paginationSlice";
import userReducer from "redux/userSlice";

const rootReducer = {
  pagination: paginationReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

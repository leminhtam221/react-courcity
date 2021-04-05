import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "redux/paginationSlice";

const rootReducer = {
  pagination: paginationReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

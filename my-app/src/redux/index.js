import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./features/loaderSlice";
import authSlice from "./features/authSlice"
import newsSlice from "./features/newsSlice";


const store = configureStore({
  reducer: {
    loaderStore: loaderSlice,
    newsStore: newsSlice,
    auth: authSlice,
  },
});

export default store;

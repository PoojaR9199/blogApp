import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
const store = configureStore({
  reducer: {
    //TODO : do the post slice
    auth: authSlice,
  },
});

export default store;

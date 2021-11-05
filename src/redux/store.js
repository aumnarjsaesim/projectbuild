import { configureStore } from "@reduxjs/toolkit";
import buildDetailReducer from "./buildDetailSlice";

export const store = configureStore({
  reducer: {
    buildDetail: buildDetailReducer
  }
});

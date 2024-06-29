import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/test-counter-slice/slicer";

/**
 * You should Add more new reducers here
 */

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

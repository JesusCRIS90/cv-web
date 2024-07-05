import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/test-counter-slice/slicer";
import sectionsReducer from "../slices/section-controller-slice/slicer";

/**
 * You should Add more new reducers here
 */

const store = configureStore({
  reducer: {
    counter: counterReducer,
    sections: sectionsReducer,
  },
});

export default store;

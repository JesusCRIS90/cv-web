import { createSlice } from "@reduxjs/toolkit";
import { initStateFcn, IControllerSectionState } from "./initialState";
import { updateCurrentSection } from "./actions";

const initialState: IControllerSectionState = initStateFcn();

export const sectionsSlicer = createSlice({
  name: "sections",
  initialState,
  reducers: {
    updateCurrentSection,
  },
});

export const { updateCurrentSection: AUpdateCurrentSection } =
  sectionsSlicer.actions;
export default sectionsSlicer.reducer;

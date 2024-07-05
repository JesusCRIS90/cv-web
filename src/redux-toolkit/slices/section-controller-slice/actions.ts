import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IControllerSectionState } from "./initialState";

type State = IControllerSectionState;

export const updateCurrentSection: CaseReducer<State, PayloadAction<string>> = (
  state,
  action
) => {
  state.sections.forEach((section) => {
    if (section.id === action.payload) {
      section.isActive = true;
    } else {
      section.isActive = false;
    }
  });
};

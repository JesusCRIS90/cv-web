import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IControllerSectionState } from "./initialState";

type State = IControllerSectionState;

export const onClickUpdate: CaseReducer<State, PayloadAction<string>> = (
  state,
  action
) => {};

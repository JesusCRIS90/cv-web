import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ICounterState } from "./initialState";

type State = ICounterState;

export const increment: CaseReducer<State, PayloadAction<number>> = (
  state,
  action
) => {
  state.value += action.payload;
  state.clicks += 1;
};

export const decrement: CaseReducer<State, PayloadAction<number>> = (
  state,
  action
) => {
  state.value -= action.payload;
  state.clicks += 1;
};

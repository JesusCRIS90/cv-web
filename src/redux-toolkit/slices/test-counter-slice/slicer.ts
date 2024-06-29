import { createSlice } from "@reduxjs/toolkit";
import { ICounterState, initStateFcn } from "./initialState";
import { increment, decrement } from "./actions";

const initialState: ICounterState = initStateFcn();

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment,
    decrement,
  },
});

export const { increment: ActIncrement, decrement: ActDecrement } =
  counterSlice.actions;
export default counterSlice.reducer;

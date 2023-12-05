import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter:10,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1
    },
    decrement: (state) => {
      state.counter = state.counter - 1
    },
    updateCounter: (state, action) => {
      state.counter = action.payload
    }
  },
  
})
export const { increment, decrement, updateCounter } = counterSlice.actions
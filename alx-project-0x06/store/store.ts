import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value + 1;
    },
    decrement: (state) => {
      state.value > 0 ? (state.value -= 1) : 0;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
  },
});

export const { increment, decrement } = CounterSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

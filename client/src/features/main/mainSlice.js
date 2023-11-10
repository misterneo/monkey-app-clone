import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  started: false,
  loading: false,
  waitingForMatch: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setStarted: (state, action) => {
      state.started = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setWaitingForMatch: (state, action) => {
      state.waitingForMatch = action.payload;
    },
  },
});

export const { setStarted, setLoading, setWaitingForMatch } = mainSlice.actions;

export default mainSlice.reducer;

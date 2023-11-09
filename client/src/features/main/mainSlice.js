import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  started: false,
  loading: false,
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
  },
});

export const { setStarted, setLoading } = mainSlice.actions;

export default mainSlice.reducer;

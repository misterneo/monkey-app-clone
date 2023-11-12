import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  started: false,
  loading: false,
  waitingForMatch: false,
  error: null,
  ready: false,
  onlineUsersCount: 1,
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
    setReady: (state, action) => {
      state.ready = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setOnlineUsersCount: (state, action) => {
      state.onlineUsersCount = action.payload;
    },
  },
});

export const {
  setStarted,
  setLoading,
  setWaitingForMatch,
  setReady,
  setError,
  setOnlineUsersCount,
} = mainSlice.actions;

export default mainSlice.reducer;

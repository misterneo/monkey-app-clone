import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

export const messagingSlice = createSlice({
  name: "messaging",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages = [action.payload, ...state.messages];
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = messagingSlice.actions;

export default messagingSlice.reducer;

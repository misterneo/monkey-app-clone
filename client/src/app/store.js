import { configureStore } from "@reduxjs/toolkit";
import messagingReducer from "@/features/messaging/messagingSlice";
import mainReducer from "@/features/main/mainSlice";

export const store = configureStore({
  reducer: {
    messaging: messagingReducer,
    main: mainReducer,
  },
});

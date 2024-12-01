import { configureStore } from "@reduxjs/toolkit";
import supportSlice from "@/services/features/support/supportSlice";

export const store = configureStore({
  reducer: {
    support: supportSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

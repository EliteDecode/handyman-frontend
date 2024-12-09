import { configureStore } from "@reduxjs/toolkit";
import supportSlice from "@/services/features/support/supportSlice";
import customerAuthSlice from "@/services/features/auth/CustomerAuthSlice";

export const store = configureStore({
  reducer: {
    support: supportSlice,
    customerAuth: customerAuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

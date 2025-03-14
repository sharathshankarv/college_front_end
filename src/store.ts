import { configureStore } from "@reduxjs/toolkit";
import { api } from "./redux/api";
import authReducer from "./redux/slices/authSlice"; // Import auth slice

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer, // Auth state
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// ✅ Define RootState Type
export type RootState = ReturnType<typeof store.getState>;

// ✅ Define AppDispatch Type
export type AppDispatch = typeof store.dispatch;

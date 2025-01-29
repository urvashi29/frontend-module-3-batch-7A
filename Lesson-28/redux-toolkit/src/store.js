import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { userApi } from "./slices/UserApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware);
  },
});

setupListeners(store.dispatch);

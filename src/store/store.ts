import { PreloadedStateShapeFromReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import rootReducer from "store/reducers";

/* Create store (thunk is by default it's middleware in redux-toolkit */
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export const setupStore = (
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>
) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  });
};

/* Export types */
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppStore = ReturnType<typeof setupStore>;
export type TestAppDispatch = AppStore["dispatch"];

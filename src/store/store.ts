// store.js
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/root-reducer"; // 你的根Reducer

// 中间件
let middleware: any = [thunk];
const isDevelopment = process.env.NODE_ENV === "development";
if (isDevelopment) {
  middleware.push(logger);
}

// 创建 store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

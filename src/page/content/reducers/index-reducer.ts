// // counterSlice.js
// import { combineReducers } from "redux";
// Reducers Create
import { createSlice } from "@reduxjs/toolkit";
// State
import contentState from "../state/index-state";
// Action Dispatch
import contentAction from "../action/index-action";

const counterSlice = createSlice({
  name: "content",
  initialState: contentState,
  reducers: contentAction,
});
// // Reducers 合并
// const rootReducer = combineReducers({
//   content: counterSlice.reducer,
//   // 可以添加其他的Reducer
// });

export const { saveData } = counterSlice.actions;
export default counterSlice.reducer;

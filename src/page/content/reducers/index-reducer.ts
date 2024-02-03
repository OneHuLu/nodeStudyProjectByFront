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
export const { saveData } = counterSlice.actions;
export default counterSlice.reducer;

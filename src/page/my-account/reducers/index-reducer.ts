// Reducers Create
import { createSlice } from "@reduxjs/toolkit";
// State
import accountDetailsState from "../state/index-state";
// Action Dispatch
import accountDetailsAction from "../action/index-action";

const accountDetailsSlice = createSlice({
  name: "my-account",
  initialState: accountDetailsState,
  reducers: accountDetailsAction,
});

export default accountDetailsSlice.reducer;

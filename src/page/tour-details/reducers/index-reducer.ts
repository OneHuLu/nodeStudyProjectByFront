// Reducers Create
import { createSlice } from "@reduxjs/toolkit";
// State
import tourDetailsState from "../state/index-state";
// Action Dispatch
import tourDetailsAction from "../action/index-action";

const tourDetailsSlice = createSlice({
  name: "tour-details",
  initialState: tourDetailsState,
  reducers: tourDetailsAction,
});

// export const { saveData } = tourDetailsSlice.actions;
export default tourDetailsSlice.reducer;

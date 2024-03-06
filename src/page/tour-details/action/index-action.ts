const tourDetailsAction = {
  setTourDetailList: (state: any, action: { payload: any }) => {
    state.tourDetails = action.payload;
  },
  setTourDetailsLoading: (state: any, action: { payload: boolean }) => {
    state.tourListLoading = action.payload;
  },
};
export default tourDetailsAction;

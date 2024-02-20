const contentAction = {
  setLoading: (state: any, action: { payload: boolean }) => {
    state.tourListLoading = action.payload;
  },
  setTourList: (state: any, action: { payload: any }) => {
    state.tourList = action.payload;
  },
};
export default contentAction;

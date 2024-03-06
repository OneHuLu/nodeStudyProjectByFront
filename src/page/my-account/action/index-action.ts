const accountDetailsAction = {
  saveData: (state: any, action: any) => {
    const {
      payload: { key, value },
    } = action;
    state[key] = value;
  },
};
export default accountDetailsAction;

const currentTaskReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_CURRENT_TASK":
      return state;
    case "UPDATE_CURRENT_TASK":
      return action.payload;
    default:
      return state;
  }
};

export default currentTaskReducer;

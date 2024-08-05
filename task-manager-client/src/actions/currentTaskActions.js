export const getCurrentTask = () => async (dispatch) => {
  dispatch({ type: "GET_CURRENT_TASK" });
};

export const updateCurrentTask = (updates) => async (dispatch) => {
  dispatch({ type: "UPDATE_CURRENT_TASK", payload: updates });
};

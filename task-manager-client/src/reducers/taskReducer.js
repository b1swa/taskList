const taskReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return action.payload;
    case "CREATE_TASK":
      return [...state, action.payload];
    case "UPDATE_TASK":
      return state.map((task) =>
        task._id === action.payload._id ? action.payload : task,
      );
    case "DELETE_TASK":
      return state.filter((task) => task._id !== action.payload);
    default:
      return state;
  }
};

export default taskReducer;

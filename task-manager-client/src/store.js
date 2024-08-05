import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import taskReducer from "./reducers/taskReducer";
import currentTaskReducer from "./reducers/currentTaskReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  currentTask: currentTaskReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

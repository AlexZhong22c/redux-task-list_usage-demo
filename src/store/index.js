import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";
import taskReducer from "./modules/task";

const store = createStore(
  combineReducers({ task: taskReducer }),
  applyMiddleware(reduxLogger, reduxThunk)
);

export default store;
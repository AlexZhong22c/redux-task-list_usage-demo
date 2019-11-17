import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";
import userReducer from "./modules/user";
import taskReducer from "./modules/task";

const store = createStore(
  combineReducers({ user: userReducer, task: taskReducer }),
  applyMiddleware(reduxLogger, reduxThunk)
);

export default store;
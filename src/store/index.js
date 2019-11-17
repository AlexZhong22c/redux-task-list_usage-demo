import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";
import userReducer from "./modules/user";
import taskReducer from "./modules/task";
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga";

// 创建saga中间件并注册
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers({ user: userReducer, task: taskReducer }),
  applyMiddleware(reduxLogger, reduxThunk, sagaMiddleware)
);
// mySaga就是我定义的任务清单
sagaMiddleware.run(mySaga);

export default store;
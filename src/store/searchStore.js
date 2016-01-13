/*
 *   created by liangshaofeng on 2016年1月12日
 *   测试环境下的store
 */

import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "../reducers/rootReducer.js";
import {devTools, persistState} from "redux-devtools";
import thunkMiddleware from "redux-thunk";

var createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

var store = createStoreWithMiddleware(rootReducer);

module.exports = store;
/*
 *   created by liangshaofeng on 2016年1月12日
 *   组合reducers
 */

import {combineReducers} from "redux";
import number from "./number.js";
import selectedReddit from "./selectedReddit.js";
import postsByReddit from "./postsByReddit.js";

// 组合reducers
var rootReducer = combineReducers({
  postsByReddit,
  selectedReddit,
  number
});

module.exports = rootReducer;

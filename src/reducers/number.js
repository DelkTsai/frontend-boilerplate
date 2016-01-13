/**
 * Created by liangshaofeng on 15/11/27.
 * 数字对应的reducer
 */

var ActionTypes = require("../constants/ActionTypes");

function search(state, action) {
  if (!state) {
    state = 0;
  }
  switch (action.type) {
    case ActionTypes.ADD_TAG:
      return state + 1;

    default:
      return state;
  }
}

module.exports = search;

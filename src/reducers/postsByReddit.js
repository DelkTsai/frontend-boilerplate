/**
 * Created by Mac on 15/11/27.
 */

var ActionTypes = require("../constants/ActionTypes");

function posts(state, action) {
  if (!state) {
    state = {
      isFetching: false,
      didInvalidate: false,
      items: []
    };
  }
  switch (action.type) {
    case ActionTypes.INVALIDATE_REDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case ActionTypes.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case ActionTypes.RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

// 定义请求数据
function postsByReddit(state, action) {
  if (!state) {
    state = {};
  }
  switch (action.type) {
    case ActionTypes.INVALIDATE_REDDIT:
    case ActionTypes.RECEIVE_POSTS:
    case ActionTypes.REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action)
      });
    default:
      return state;
  }
}

module.exports = postsByReddit;


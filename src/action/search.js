import fetch from "isomorphic-fetch"
import types from "../constants/ActionTypes.js";
import {actionCreator} from "redux-action-utils";

exports.selectReddit = actionCreator(types.SELECT_REDDIT, "reddit");

// 点击刷新按钮
exports.invalidateReddit = function (reddit) {
  return {
    type: types.INVALIDATE_REDDIT,
    reddit: reddit
  };
};

/**
 * 根据文章类型发出请求
 * @param reddit {string} 文章的类别 reactjs/frontend
 * @returns {{type: null, reddit: *}}
 */
exports.requestPosts = function (reddit) {
  return {
    type: types.REQUEST_POSTS,
    reddit: reddit
  };
};

/**
 * 接收文章数据
 * @param reddit {string} 文章的类别 reactjs/frontend
 * @param json {Object} 请求返回的文章数据
 * @returns {{type: null, reddit: *, posts: *, receivedAt: number}}
 */
exports.receivePosts = function (reddit, json) {
  return {
    type: types.RECEIVE_POSTS,
    reddit: reddit,
    posts: json.data.children.map(function (child) {
      return child.data;
    }),
    receivedAt: Date.now()
  };
};

/**
 * 根据文章类别请求接收数据全过程
 * @param reddit {string} 文章的类别 reactjs/frontend
 * @returns {Function}
 */
exports.fetchPosts = function (reddit) {
  return function (dispatch) {
    dispatch(exports.requestPosts(reddit));
    return fetch("http://www.reddit.com/r/" + reddit + ".json")
      .then(response => response.json())
      .then(json =>
        dispatch(exports.receivePosts(reddit, json))
    );
  };
};


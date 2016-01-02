var fetch = require("isomorphic-fetch");

var types = require("../constants/ActionTypes");

var {actionCreator}= require("redux-action-utils");


//exports.addTag = function (state) {
//  return {
//    type: types.ADD_TAG,
//    state: state
//  }
//};


// 选择下拉框
//exports.selectReddit = function (reddit) {
//  return {
//    type: types.SELECT_REDDIT,
//    reddit: reddit
//  }
//};

// 上面的两个函数可以通过actionCreator精简为下面两行代码
exports.addTag = actionCreator(types.ADD_TAG, "state");
exports.selectReddit = actionCreator(types.SELECT_REDDIT, "reddit");

// 点击刷新按钮
exports.invalidateReddit = function (reddit) {
  return {
    type: types.INVALIDATE_REDDIT,
    reddit: reddit
  };
};

// 发送ajax请求
exports.requestPosts = function (reddit) {
  return {
    type: types.REQUEST_POSTS,
    reddit: reddit
  };
};

// 请求返回数据
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

// fetch
// 来看一下我们写的第一个 thunk action creator！
// 虽然内部操作不同，你可以像其它 action creator 一样使用它：
// store.dispatch(fetchPosts("reactjs"));

exports.fetchPosts = function (reddit) {

  // Thunk middleware 知道如何处理函数。
  // 这里把 dispatch 方法通过参数的形式参给函数，
  // 以此来让它自己也能 dispatch action。

  return function (dispatch) {

    // 首次 dispatch：更新应用的 state 来通知
    // API 请求发起了。

    dispatch(exports.requestPosts(reddit));

    // thunk middleware 调用的函数可以有返回值，
    // 它会被当作 dispatch 方法的返回值传递。

    // 这个案例中，我们返回一个等待处理的 promise。
    // 这并不是 redux middleware 所必须的，但是我们的一个约定。


    return fetch("http://www.reddit.com/r/" + reddit + ".json")
        .then(response => response.json())
        .then(json =>

          // 可以多次 dispatch！
          // 这里，使用 API 请求结果来更新应用的 state。

            dispatch(exports.receivePosts(reddit, json))
    );

    // 在实际应用中，还需要
    // 捕获网络请求的异常。
  };
};


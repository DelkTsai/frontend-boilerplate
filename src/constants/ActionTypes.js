// 添加注释
// 点击添加按钮
//exports.ADD_TAG = 'ADD_TAG';
//
//// 选择下拉框
//exports.SELECT_REDDIT = 'SELECT_REDDIT';
//
//// 点击刷新按钮
//exports.INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';
//
//// 发送ajax请求
//exports.REQUEST_POSTS = 'REQUEST_POSTS';
//
//// 请求返回数据
//exports.RECEIVE_POSTS = 'RECEIVE_POSTS';


// ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️下面的写法更简洁


var keyMirror = require("keymirror");

module.exports = keyMirror({
  ADD_TAG: null,
  SELECT_REDDIT: null,
  INVALIDATE_REDDIT: null,
  REQUEST_POSTS: null,
  RECEIVE_POSTS: null

});

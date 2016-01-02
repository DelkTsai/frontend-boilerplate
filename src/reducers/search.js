// 引入合并reducers的函数
var combineReducers = require("redux").combineReducers;


// 每个state是每个reducer对应的那一部分数据

var search = require("./add");

var selectedReddit = require("./selectedReddit");

var postsByReddit = require("./postsByReddit");

// 组合reducers
// 这里就是定义store结构的真正地方。。。哈哈哈，我太聪明了！！这都被我发现！:-D
var rootReducer = combineReducers({
  postsByReddit,
  selectedReddit,
  search
});

// 上面的语句翻译为ES5是这样的
//var rootReducer = combineReducers({
//  postsByReddit: postsByReddit,
//  selectedReddit: selectedReddit,
//  search: search
//});

// 其实也可以写成这个样子
//var rootReducer = function(state, action) {
//  return {
//    postsByReddit: postsByReddit(state.postsByReddit, action),
//    selectedReddit: selectedReddit(state.selectedReddit, action)
//    search: search(state.search, action)
//  };
//}

module.exports = rootReducer;

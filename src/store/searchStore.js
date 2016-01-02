var createStore = require("redux").createStore;
var rootReducer = require("../reducers/search");

// 从右到左来组合多个函数。
//这是函数式编程中的方法，为了方便，被放到了 Redux 里。 当需要把多个 store 增强器 依次执行的时候，需要用到它。
var compose = require("redux").compose;

// Redux DevTools
var devTools = require("redux-devtools").devTools;
var persistState = require("redux-devtools").persistState;

// redux 中间件
var thunkMiddleware = require("redux-thunk");
var applyMiddleware = require("redux").applyMiddleware;


//var createStoreWithMiddleware = applyMiddleware(
//    thunkMiddleware // 允许我们 dispatch() 函数
//)(createStore);


var createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

var store = createStoreWithMiddleware(rootReducer);

module.exports = store;
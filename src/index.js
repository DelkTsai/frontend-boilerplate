var React = require("react");
var Provider = require("react-redux").Provider;
var store = require("./store/searchStore");


// 路由控制
//var history = require("history").createHistory();
var router = require("./router");


React.render(
    <Provider store={store}>
      {router}
    </Provider>,
    document.getElementById("root")
);
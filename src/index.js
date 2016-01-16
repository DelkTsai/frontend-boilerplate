import React from "react";
import {Provider} from "react-redux";
import store from "./store/store.js";
import router from "./router.js";

React.render(
    <Provider store={store}>
      {router}
    </Provider>,
    document.getElementById("root")
);
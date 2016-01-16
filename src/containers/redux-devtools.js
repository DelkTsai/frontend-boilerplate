/**
 * Created by liangshaofeng on 16/1/16.
 * 分离出redux-devtools
 */

import React from "react";
import store from "../store/store.js";
import {DevTools, DebugPanel, LogMonitor} from "redux-devtools/lib/react";
import Config from "../config.js";

const ReduxDevtools = React.createClass({
  render: function () {

    // 倘若不是测试环境，则不现实测试工具
    if (Config.env !== "dev") {
      return null;
    }

    return (
      <DebugPanel top right bottom>
        <DevTools store={store}
                  monitor={LogMonitor}
                  visibleOnLoad={true}/>
      </DebugPanel>
    );

  }
});

module.exports = ReduxDevtools;
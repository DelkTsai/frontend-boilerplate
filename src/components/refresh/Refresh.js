/*
 *   created by liangshaofeng on 2016年1月12日
 *   刷新组件(点击重新请求文章数据）
 */

import React from "react";
import style from "./refresh.scss";

var Refresh = React.createClass({

  handleRefresh: function (e) {
    e.preventDefault();

    this.props.refresh(this.props.reddit);
  },

  render: function () {
    return (
      <a href="javascript:;" className={style.refresh}
         onClick={this.handleRefresh}>
        刷新
      </a>
    );
  }
});

module.exports = Refresh;
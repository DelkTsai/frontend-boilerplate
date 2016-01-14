/**
 * Created by youngwind on 16/1/14.
 * 演示延时加载的组件
 */

import React from "react";
import LazyLoad from "react-lazy-load";

const Table = React.createClass({

  render: function () {
    return (
      <div>
        <h1>我是延时加载出来的</h1>
        <LazyLoad>
          <img src="http://pic2.ooopic.com/01/03/51/25b1OOOPIC19.jpg" alt=""/>
        </LazyLoad>
        <LazyLoad>
          <img src="http://img.taopic.com/uploads/allimg/130501/240451-13050106450911.jpg" alt=""/>
        </LazyLoad>
        <LazyLoad>
          <img src="http://pic.nipic.com/2007-11-09/200711912453162_2.jpg" alt=""/>
        </LazyLoad>

        <h1>我是延时加载出来的</h1>
      </div>
    );
  }
});

module.exports = Table;

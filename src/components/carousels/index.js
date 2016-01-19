/**
 * Created by youngwind on 16/1/19.
 * 图片组件
 */

/*eslint-disable no-console */

import React from "react";
import {Carousel} from "antd";
import style from "./index.scss";

const Carousels = React.createClass({

  onChange: function (current) {
    console.log(current);
  },

  render: function () {
    return (
      <div>
        <Carousel effect="fade" autoplay="true" afterChange={this.onChange}>
          <div className={style.title}>
            <h3>1</h3>
          </div>
          <div className={style.title}>
            <h3>2</h3>
          </div>
          <div className={style.title}>
            <h3>3</h3>
          </div>
          <div className={style.title}>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
});

module.exports = Carousels;

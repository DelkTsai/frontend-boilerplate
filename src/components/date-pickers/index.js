/**
 * Created by youngwind on 16/1/17.
 */

/*eslint-disable no-console */

import React from "react";
import {DatePicker} from "antd";

const DatePickers = React.createClass({

  onChange: function (value) {
    console.log(value);
  },

  render: function () {
    return (
      <div>
        <DatePicker onChange={this.onChange}/>
        <DatePicker disabledDate={this.disabledStartDate}
                    placeholder="开始日期"
                    onChange={this.onChange.bind(this, "startValue")}/>
        <DatePicker disabledDate={this.disabledEndDate}
                    placeholder="结束日期"
                    onChange={this.onChange.bind(this, "endValue")}/>
      </div>
    );
  }
});

module.exports = DatePickers;

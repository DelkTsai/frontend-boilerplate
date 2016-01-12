/*
 *   created by liangshaofeng on 2016年1月12日
 *   筛选文章
 */

import React from "react";

var Picker = React.createClass({

  render: function () {
    var value = this.props.value;
    var onChange = this.props.onChange;
    var options = this.props.options;

    return (
      <select onChange={e => onChange(e.target.value)}
              value={value}>
        {options.map(option =>
          <option value={option} key={option}>
            {option}
          </option>)
        }
      </select>
    );
  }
});

module.exports = Picker;




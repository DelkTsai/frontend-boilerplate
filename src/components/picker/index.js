/*
 *   created by liangshaofeng on 2016年1月12日
 *   筛选文章
 */

import React from "react";

const Picker = React.createClass({

  render: function () {
    let value = this.props.value;
    let onChange = this.props.onChange;
    let options = this.props.options;

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




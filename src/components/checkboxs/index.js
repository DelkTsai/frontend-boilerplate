/**
 * Created by youngwind on 16/1/17.
 * 复选框（组）
 */

/*eslint-disable no-console */

import React from "react";
import { Checkbox } from "antd";
const CheckboxGroup = Checkbox.Group;

const CheckBoxs = React.createClass({

  /**
   * 输出单个复选框的是否选中
   * @param e {object} 事件对象
   */
  onChange: function (e) {
    console.log(`checked = ${e.target.checked}`);
  },

  /**
   * 输入复选框组的值
   * @param checkedValues {array} 复选框组的值
   */
  outputCheckboxGroups: function (checkedValues) {
    console.log(`checked = ${checkedValues}`);
  },

  render: function () {
    return (
      <div>
        <label>
          <Checkbox defaultChecked={false} onChange={this.onChange}/>
          Checkbox
        </label>
        <CheckboxGroup options={["Apple", "Pear", "Orange"]} defaultValue={["Apple"]}
                       onChange={this.outputCheckboxGroups}/>
      </div>
    );
  }
});

module.exports = CheckBoxs;
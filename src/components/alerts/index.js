/**
 * Created by youngwind on 16/1/19.
 * 警告提示
 */

import React from "react";
import {Alert} from "antd";

const Alerts = React.createClass({

  render: function () {
    return (
      <div>
        <Alert message="成功提示的文案" type="success" showIcon closable/>
        <Alert message="消息提示的文案" type="info" showIcon closable/>
        <Alert message="警告提示的文案" type="warn" showIcon/>
        <Alert message="错误提示的文案" type="error" showIcon/>
        <Alert message="成功提示的文案"
               description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
               type="success"
               showIcon/>
        <Alert message="消息提示的文案"
               description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
               type="info"
               showIcon/>
        <Alert
          message="警告提示的文案"
          description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"
          type="warn"
          showIcon/>
        <Alert
          message="错误提示的文案"
          description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
          type="error"
          showIcon closable/>
      </div>
    );
  }
});

module.exports = Alerts;

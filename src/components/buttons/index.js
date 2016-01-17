/**
 * Created by youngwind on 16/1/17.
 * 各种按钮组
 */


import React from "react";
import {Button, Icon} from "antd";
const ButtonGroup = Button.Group;


const Buttons = React.createClass({

  render: function () {
    return (
      <div>
        <Button type="primary">我是主要按钮</Button>
        <Button>我是次级按钮</Button>
        <Button type="ghost">幽灵按钮</Button>
        <Button type="dashed">虚线按钮</Button>

        <Button type="primary" size="large">大号按钮</Button>
        <Button type="primary">中号按钮(默认)</Button>
        <Button type="primary" size="small" loading={true}>小号加载中按钮</Button>

        <Button type="ghost" shape="circle-outline">
          <Icon type="search"/>
        </Button>

        <Button type="ghost" size="large">
          <Icon type="search"/>
          搜索大按钮
        </Button>
        <ButtonGroup>
          <Button type="primary">确定</Button>
          <Button type="primary">取消</Button>
        </ButtonGroup>
      </div>
    );
  }
});

module.exports = Buttons;

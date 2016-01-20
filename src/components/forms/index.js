/**
 * Created by youngwind on 16/1/20.
 * 表单组件
 */


import React from "react";
import {Row, Col, Input} from "antd";
const InputGroup = Input.Group;

const Forms = React.createClass({

  render:function(){
    return(
      <div>
        <Row>
          <InputGroup>
            <Col span="6">
              <Input id="largeInput" size="large" placeholder="大尺寸" />
            </Col>
            <Col span="6">
              <Input id="defaultInput" placeholder="默认尺寸" />
            </Col>
            <Col span="6">
              <Input id="smallInput" placeholder="小尺寸" size="small" />
            </Col>
          </InputGroup>
        </Row>
      </div>
    );
  }
});

module.exports = Forms;
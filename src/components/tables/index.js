/**
 * Created by youngwind on 16/1/19.
 * 表格组件
 */

/*eslint-disable no-console */

import React from "react";
import {Table} from "antd";

const dataSource = [{
  key: "1",
  name: "胡彦斌",
  age: 32,
  address: "西湖区湖底公园1号"
}, {
  key: "2",
  name: "胡彦祖",
  age: 42,
  address: "西湖区湖底公园1号"
}];

const columns = [{
  title: "姓名",
  dataIndex: "name",
  key: "name"
}, {
  title: "年龄",
  dataIndex: "age",
  key: "age"
}, {
  title: "住址",
  dataIndex: "address",
  key: "address"
}];


const columns2 = [{
  title: "姓名",
  dataIndex: "name",
  render: function(text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: "年龄",
  dataIndex: "age"
}, {
  title: "住址",
  dataIndex: "address"
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: "李大嘴" + i,
    age: 32,
    address: "西湖区湖底公园" + i + "号"
  });
}

const pagination = {
  total: data.length,
  current: 1,
  showSizeChanger: true,
  onShowSizeChange: function(current, pageSize) {
    console.log("Current: ", current, "; PageSize: ", pageSize);
  },
  onChange: function(current) {
    console.log("Current: ", current);
  }
};

// 通过 rowSelection 对象表明需要行选择
const rowSelection = {
  onChange(selectedRowKeys) {
    console.log("selectedRowKeys changed: " + selectedRowKeys);
  },
  onSelect: function(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: function(selected, selectedRows) {
    console.log(selected, selectedRows);
  }
};

const Tables = React.createClass({

  render: function () {
    return (
      <div>
        <Table dataSource={dataSource} columns={columns}/>
        <Table dataSource={data} columns={columns2} rowSelection={rowSelection}  pagination={pagination} />
      </div>
    );
  }
});

module.exports = Tables;

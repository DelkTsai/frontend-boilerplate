var React = require("react");
require("./index.scss");

var View = React.createClass({

  propTypes: {
    state: React.PropTypes.number  // 这里写属性的定义
  },

  render: function () {
    return (
      <h1>{this.props.state}</h1>
    );
  }
});

module.exports = View;

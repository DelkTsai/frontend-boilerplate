var React = require("react");

require("./refresh.scss");

var Refresh = React.createClass({

  handleRefresh: function (e) {
    e.preventDefault();

    this.props.refresh(this.props.reddit);
  },

  render: function () {
    return (
      <a href="#"
         onClick={this.handleRefresh}>
        Refresh
      </a>
    );
  }
});

module.exports = Refresh;
var React = require("react");
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;
import actions from "../action/rootActions.js";


var Search = React.createClass({

  render: function () {
    return (
      <div className="add">
        <h1>我是searchcopy</h1>
      </div>

    );
  }
});

function select(state) {

  return {
    search: state.search,
    actions: actions,
    selectedReddit: state.selectedReddit,
    posts: state.postsByReddit[state.selectedReddit],
    isFetching: state.isFetching,
    lastUpdated: state.lastUpdated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

module.exports = connect(select, mapDispatchToProps)(Search);





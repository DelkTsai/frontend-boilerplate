var React = require("react");
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;

import ReduxDevtools from "./redux-devtools.js";

import actions from "../action/rootActions.js";


var Search = React.createClass({

  render: function () {
    return (
      <div>
        <ReduxDevtools />
        {this.props.children}
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





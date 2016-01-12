var React = require("react");
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;

import actions from "../action/rootActions.js";

//var AddButton = require("addbutton");





var Search = React.createClass({

  componentDidMount:function(){
    //console.log($(window).width());
    //console.log($.cookie)
  },

  render: function () {
    return (
        <div className="add">

          <h1>我是indexindex</h1>
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





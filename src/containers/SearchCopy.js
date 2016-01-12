var React = require("react");
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;
import actions from "../action/rootActions.js";

//var AddButton = require("addbutton");
var View = require("../components/view/View");


// 添加文章列表
var Picker = require("../components/picker/Picker");
var Posts = require("../components/posts/Posts");
var Refresh = require("../components/refresh/Refresh");


// 添

var Search = React.createClass({

  render: function () {
    var actions = this.props.actions;
    var selectedReddit = this.props.selectedReddit;
    var posts = this.props.posts;
    var search = this.props.search;

    return (
      <div className="add">
        <h1>我是searchcopy</h1>
        <View state={search}/>

        <Picker value={selectedReddit}
                onChange={actions.selectReddit}
                options={[ "reactjs", "frontend" ]}/>
        <Refresh reddit={selectedReddit} refresh={actions.fetchPosts}/>
        <Posts posts={posts}/>
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





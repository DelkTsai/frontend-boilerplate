var React = require("react");
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;
var SearchActions = require("../action/search");

//var AddButton = require("addbutton");
var View = require("../components/view/View");

var store = require("../store/searchStore");

// 添加文章列表
var Picker = require("../components/picker/Picker");
var Posts = require("../components/posts/Posts");
var Refresh = require("../components/refresh/Refresh");


//<AddButton addSearch={actions.addTag}/>
//<View state={search}/>

// React components for Redux DevTools
var DevTools = require("redux-devtools/lib/react").DevTools;
var DebugPanel = require("redux-devtools/lib/react").DebugPanel;
var LogMonitor = require("redux-devtools/lib/react").LogMonitor;

// 添

var Search = React.createClass({

  render: function () {
    var actions = this.props.actions;
    var selectedReddit = this.props.selectedReddit;
    var posts = this.props.posts;
    var search = this.props.search;

    return (
      <div className="add">
        <h1>我是search</h1>
        <View state={search}/>

        <Picker value={selectedReddit}
                onChange={actions.selectReddit}
                options={[ "reactjs", "frontend" ]}/>
        <Refresh reddit={selectedReddit} refresh={actions.fetchPosts}/>
        <Posts posts={posts}/>
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor}
                    visibleOnLoad={true}/>
        </DebugPanel>
      </div>

    );
  }
});

function select(state) {

  return {
    search: state.search,
    actions: SearchActions,
    selectedReddit: state.selectedReddit,
    posts: state.postsByReddit[state.selectedReddit],
    isFetching: state.isFetching,
    lastUpdated: state.lastUpdated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SearchActions, dispatch)
  };
}

module.exports = connect(select, mapDispatchToProps)(Search);





var React = require("react");
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;
import actions from "../action/rootActions.js";

//var AddButton = require("addbutton");
var View = require("../components/view/View");

var store = require("../store/searchStore");

var Picker = require("../components/picker/Picker");
var Posts = require("../components/posts/Posts");
var Refresh = require("../components/refresh/Refresh");
var Table = require("../components/table/Table");


// React components for Redux DevTools
var DevTools = require("redux-devtools/lib/react").DevTools;
var DebugPanel = require("redux-devtools/lib/react").DebugPanel;
var LogMonitor = require("redux-devtools/lib/react").LogMonitor;


var Search = React.createClass({

  render: function () {
    var postActions = this.props.postActions;
    var selectedReddit = this.props.selectedReddit;
    var posts = this.props.posts;
    var search = this.props.search;


    return (
      <div className="add">
        <h1>我是search</h1>
        <View state={search}/>

        <Picker value={selectedReddit}
                onChange={postActions.selectReddit}
                options={[ "reactjs", "frontend" ]}/>
        <Refresh reddit={selectedReddit} refresh={postActions.fetchPosts}/>
        <Posts posts={posts}/>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>

        <p>1</p>
        <Table/>
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
    //actions: post,
    selectedReddit: state.selectedReddit,
    posts: state.postsByReddit[state.selectedReddit],
    isFetching: state.isFetching,
    lastUpdated: state.lastUpdated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(actions.post, dispatch),
    numberActions: bindActionCreators(actions.number, dispatch)
  };
}

module.exports = connect(select, mapDispatchToProps)(Search);





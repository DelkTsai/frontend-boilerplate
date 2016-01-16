import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import actions from "../action/rootActions.js";

import View from "../components/view";
import Picker from "../components/picker";
import Posts from "../components/posts";
import Refresh from "../components/refresh";
import Table from "../components/table";
import LazyLoad from "react-lazy-load";


const Search = React.createClass({

  render: function () {
    var postActions = this.props.postActions;
    var selectedReddit = this.props.selectedReddit;
    var posts = this.props.posts;
    var search = this.props.search;


    return (
      <div className="add">
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
        <LazyLoad>
          <Table/>
        </LazyLoad>

      </div>

    );
  }
});

function select(state) {

  return {
    search: state.search,
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





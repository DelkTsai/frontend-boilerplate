import React from "react";

const Posts = React.createClass({

  propTypes: {
    posts: React.PropTypes.object
  },

  render: function () {

    // 添加容错处理
    if (!this.props.posts) {
      return null;
    }

    return (
      <ul>
        {this.props.posts.items.map((post, i) =>
            <li key={i}>{post.id}</li>
        )}
      </ul>
    );
  }
});

module.exports = Posts;

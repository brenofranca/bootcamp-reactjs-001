import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from '../PostHeader';

import './style.scss';

const Post = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <div key={post.id} className="postItem">
        <div>
          <PostHeader post={post} />
        </div>
        <div className="postContent">{post.content}</div>
      </div>
    ))}
  </div>
);

Post.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Post;

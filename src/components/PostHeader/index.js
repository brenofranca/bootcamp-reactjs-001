import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const PostHeader = ({ post }) => (
  <div className="post-header">
    <img className="avatar" src={post.avatar} alt={post.author} />
    <div>
      <div className="author">{post.author}</div>
      <div className="time">{post.created_at}</div>
    </div>
  </div>
);

PostHeader.propTypes = {
  post: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostHeader;

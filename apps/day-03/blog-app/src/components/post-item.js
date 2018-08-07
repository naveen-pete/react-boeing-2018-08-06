import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div className="card bg-light mb-3">
      <div className="card-header">
        <h5>{post.title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{post.body}</p>
        <p className="card-text">Author: <em>{post.author}</em></p>
        <p className="card-text">Category: <em>{post.category}</em></p>
      </div>
    </div>
  );
};

export default PostItem;

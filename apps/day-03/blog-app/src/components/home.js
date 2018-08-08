import React from 'react';

const Home = (props) => {
  return (
    <div className="col-md-12">
      <h2 className="display-4">Blog App Home</h2>

      <button className="btn btn-info mr-2" onClick={() => { props.history.push('/posts') }}>Go to Posts</button>
      <button className="btn btn-success" onClick={() => { props.history.push('/posts/new') }}>Go to New Post</button>
    </div>
  );
};

export default Home;

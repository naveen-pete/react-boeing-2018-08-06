import React from 'react';
import Categories from './categories';

const App = () => {
  return (
    <div className="container">
      <h1>Blog App</h1>
      <div className="row">
        <div className="col-md-4">
          <h3>Categories</h3>
          <Categories />
        </div>

        <div className="col-md-8">
          <h3>Posts</h3>
        </div>
      </div>
    </div>
  )
};

export default App;
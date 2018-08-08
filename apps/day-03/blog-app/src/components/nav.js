import React from 'react';

const Nav = () => {
  return (
    <div className="col-md-12">
      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Posts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">New Post</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

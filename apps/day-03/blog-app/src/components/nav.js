import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="col-md-12">
      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName='active' className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/posts" activeClassName='active' className="nav-link ">Posts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/posts/new" activeClassName='active' className="nav-link ">New Post</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

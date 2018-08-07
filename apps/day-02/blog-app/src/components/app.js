import React, { Component } from 'react';
import Categories from './categories';
import Posts from './posts';
import { getPosts } from '../api/blog-api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      selectedCategory: ''
    };

    this.handleSelectCategory = this.handleSelectCategory.bind(this);
  }

  componentDidMount() {
    getPosts().then((posts) => {
      this.setState({ posts });
    })
  }

  handleSelectCategory(selectedCategory) {
    this.setState({ selectedCategory });
  }

  render() {
    return (
      <div className="container">
        <h1>Blog App</h1>
        <div className="row">
          <div className="col-md-8">
            <h3>Posts</h3>
            <Posts category={this.state.selectedCategory} posts={this.state.posts} />
          </div>

          <div className="col-md-4">
            <h3>Categories</h3>
            <Categories selectCategory={this.handleSelectCategory} />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
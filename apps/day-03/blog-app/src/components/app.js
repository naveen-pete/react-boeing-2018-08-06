import React, { Component } from 'react';
import Nav from './nav';
import Home from './home';
import Categories from './categories';
import Posts from './posts';
import PostForm from './post-form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedCategory: 'all'
    };

    this.handleSelectCategory = this.handleSelectCategory.bind(this);
  }

  handleSelectCategory(selectedCategory) {
    this.setState({ selectedCategory });
  }

  render() {
    const category = this.state.selectedCategory;
    return (
      <div className="container">
        <h1>Blog App</h1>
        <div className="row">
          <Nav />
        </div>
        <div className="row">
          <Home />
          <Categories selectCategory={this.handleSelectCategory} />
          <Posts category={category} />
          <PostForm />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Categories from './categories';
import Posts from './posts';

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

          <div className="col-md-4">
            <h3>Categories</h3>
            <Categories selectCategory={this.handleSelectCategory} />
          </div>

          <div className="col-md-8">
            <h3>Posts</h3>
            <h5>(Category: {category})</h5>
            <Posts category={category} />
          </div>

        </div>
      </div>
    );
  }
}

export default App;

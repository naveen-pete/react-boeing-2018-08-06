import React, { Component } from 'react';
import * as BlogApi from '../api/blog-api';

class Categories extends Component {
  // state = {
  //   categories: []
  // }

  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selectedCategory: 'all'
    };
  }

  componentDidMount() {
    BlogApi.getCategories()
      .then((categories) => {
        categories = [ { code: 'all', name: 'All'}, ...categories ];
        this.setState({ categories });
      });
  }

  handleClick(selectedCategory) {
    this.props.selectCategory(selectedCategory);
    this.setState({ selectedCategory });
  }

  addActive(categoryCode) {
    return this.state.selectedCategory === categoryCode ? 'active' : '';
  }

  render() {
    const items = this.state.categories.map(c => {
      return (
        <li onClick={() => this.handleClick(c.code)} 
          className={`list-group-item list-group-item-action ${this.addActive(c.code)}`}
          key={c.code}>
          {c.name}
        </li>
      );
    });

    return (
      <div className="col-md-4">
        <h3>Categories</h3>
        <ul className="list-group">
          {items}
        </ul>
      </div>
    );
  }
}

export default Categories;

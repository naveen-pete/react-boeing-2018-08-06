import React, { Component } from 'react';
import * as BlogApi from '../api/blog-api';


class Categories extends Component {
  // state = {
  //   categories: []
  // }

  constructor() {
    super();

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    BlogApi.getCategories()
      .then((categories) => {
        this.setState({ categories });
      });
  }

  render() {
    const items = this.state.categories.map(c => {
        return <li onClick={() => { this.props.selectCategory(c.code) }} 
          className="list-group-item" value={c.code} key={c.code}>{c.name}</li>
      });
    return (
      <ul className="list-group">
        {items}
      </ul>
    );
  }
} 

export default Categories;

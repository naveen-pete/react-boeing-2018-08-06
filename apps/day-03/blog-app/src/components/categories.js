import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../redux/actions';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: 'all'
    };
  }

  componentDidMount() {
    this.props.dispatchCategories();
  }

  handleClick(selectedCategory) {
    this.props.selectCategory(selectedCategory);
    this.setState({ selectedCategory });
  }

  addActive(categoryCode) {
    return this.state.selectedCategory === categoryCode ? 'active' : '';
  }

  render() {
    const items = this.props.categories.map(c => {
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

const mapStateToProps = ({ categories }) => ({
  categories
});

const mapDispatchToProps = dispatch => ({
  dispatchCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

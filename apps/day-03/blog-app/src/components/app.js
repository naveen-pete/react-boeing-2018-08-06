import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
          <Route exact path="/posts/new" component={PostForm} />
          <Route exact path="/posts" render={(props) => {
            return(
              <React.Fragment>
                <Categories {...props} selectCategory={this.handleSelectCategory} />
                <Posts {...props} category={category} />
              </React.Fragment>
            ); 
          }} />
          <Route exact path="/" component={Home} />
        </div>
      </div>
    );
  }
}

export default App;

// http://localhost:3000/  - Home
// http://localhost:3000/posts  - Posts & Categories
// http://localhost:3000/posts/new - Post 
{/*  */}

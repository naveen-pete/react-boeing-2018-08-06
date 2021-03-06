import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getCategories, addPost } from '../redux/actions';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      author: '',
      category: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const post = { ...this.state };

    console.log(post);

    this.props.addPost(post)
      .then(() => {
        this.props.history.push('/posts?save=success');
      }).catch(() => {
        console.log('Failed: New post did not get created.');
      });
  }

  render() {
    return (
      <div className="col-md-12">
        <h3 className="mr-3">Post Form</h3>
  
        <div className="card  bg-light">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input value={this.state.title} onChange={this.handleChange} 
                  type="text" className="form-control" id="title" name="title" 
                  placeholder="Enter title" />
              </div>
              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea value={this.state.body} onChange={this.handleChange} 
                  className="form-control" id="body" name="body" 
                  placeholder="Enter body" rows="3" cols="30"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input value={this.state.author} onChange={this.handleChange} 
                  type="text" className="form-control" id="author" name="author" 
                  placeholder="Enter author" />
              </div>
              <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    required
                    className="form-control"
                    id="category"
                    name="category"
                    value={this.state.category}
                    onChange={this.handleChange}
                  >
                  <option value=""></option>
                  {this.props.categories.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
  
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
  
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post)),
  getCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);

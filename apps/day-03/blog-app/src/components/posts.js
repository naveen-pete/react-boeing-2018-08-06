import React, {Component} from 'react';
import { connect } from 'react-redux';

import PostItem from './post-item';
import AppAlert from './app-alert';
import { getPosts } from '../redux/actions';

class Posts extends Component {
  componentDidMount() {
    this.props.dispatchPosts();
  }

  render() {
    const { category, posts } = this.props;
    const filteredPosts = category === 'all' 
            ? [...posts] 
            : posts.filter(p => p.category === category);
    const result =  filteredPosts.length > 0 
        ? filteredPosts.map(p => <PostItem key={p.id} post={p} />)
        : <AppAlert message='No posts for the selected category!' type='error'  />

    return (
      <div className="col-md-8">
        <h3 className="mr-3">Posts</h3>
        <h5>(Category: {category})</h5>
        {result}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
});

const mapDispatchToProps = (dispatch) => ({
  dispatchPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

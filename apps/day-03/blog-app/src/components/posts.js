import React, {Component} from 'react';

import PostItem from './post-item';
import AppAlert from './app-alert';
import { getPosts } from '../api/blog-api';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    getPosts().then((posts) => {
      this.setState({ posts });
    })
  }

  render() {
    const { posts } = this.state;
    const { category } = this.props;
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

export default Posts;

import React, {Component} from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts, category } = this.props;
    const filteredPosts = posts.filter(p => p.category === category);

    return (
      filteredPosts.map(p => (
        <div key={p.id} className="card bg-light mb-3">
          <h4 className="card-title">
            {p.title}
          </h4>
          <div className="card-body">
            <p className="card-text">{p.body}</p>
            <p className="card-text">{p.author}</p>
            <p className="card-text">{p.category}</p>
          </div>
        </div>
        )
      )
    );
  }
}

export default Posts;

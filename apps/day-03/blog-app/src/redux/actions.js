import * as BlogApi from '../api/blog-api';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';

export const getCategories = () => {
  return (dispatch) => {
    return BlogApi.getCategories()
      .then(payload => dispatch({ 
        type: GET_CATEGORIES, 
        payload 
      }));
  };
};

export const getPosts = () => {
  return (dispatch) => {
    return BlogApi.getPosts()
      .then(payload => dispatch({ 
        type: GET_POSTS, 
        payload
      }));
  };
};

export const addPost = (post) => {
  return (dispatch) => {
    return BlogApi.addPost(post)
      .then(payload => dispatch({ 
        type: ADD_POST, 
        payload
      }));
  };
};

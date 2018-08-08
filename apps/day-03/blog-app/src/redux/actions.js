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
  // call to the get posts

  return {
    type: GET_POSTS,
    payload: []
  }
};

export const addPosts = (post) => {
  // call to add post

  return {
    type: ADD_POST,
    payload: post
  }
};

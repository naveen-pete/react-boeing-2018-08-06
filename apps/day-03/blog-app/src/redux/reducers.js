import { combineReducers } from 'redux';

import * as ActionTypes from './actions';

const posts = (state = [], action) => {
  switch(action.type) {
    case ActionTypes.GET_POSTS:
      return [...action.payload];

    case ActionTypes.ADD_POST:
      return [...state, action.payload];

    // case ActionTypes.UPDATE_POST:
    //   return [...state, action.payload];

    default:
      return state;
  }
};

const categories = (state = [], action) => {
  switch(action.type) {
    case ActionTypes.GET_CATEGORIES:
      return [{code: 'all', name: 'All'}, ...action.payload];

    default:
      return state;
  }
};

const appReducer = combineReducers({
  posts,
  categories 
});

export default appReducer;

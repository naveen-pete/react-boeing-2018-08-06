const baseUrl = 'http://localhost:3001';

export const getCategories = () => {
  return fetch(`${baseUrl}/categories`).then(response => response.json());
};

export const getPosts = () => {
  return fetch(`${baseUrl}/posts`).then(response => response.json());
};
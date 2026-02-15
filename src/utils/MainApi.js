const AUTH_BASE_URL = 'https://news-explorer-backend-production.up.railway.app';

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Error: ${res.status}`));
};

export const register = (name, email, password) => fetch(`${AUTH_BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, email, password }),
}).then(handleResponse);

export const login = (email, password) => fetch(`${AUTH_BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
}).then(handleResponse);

export const checkToken = (token) => fetch(`${AUTH_BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
}).then(handleResponse);

export const getSavedArticles = (token) => fetch(`${AUTH_BASE_URL}/articles`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
}).then(handleResponse);

export const saveArticle = (token, articleData) => fetch(`${AUTH_BASE_URL}/articles`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(articleData),
}).then(handleResponse);

export const deleteArticle = (token, articleId) => fetch(`${AUTH_BASE_URL}/articles/${articleId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
}).then(handleResponse);

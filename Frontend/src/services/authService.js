import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const signup = (username, email, password) => {
  return axios.post(API_URL + 'signup', { username, email, password });
};

const login = (email, password) => {
  return axios.post(API_URL + 'login', { email, password });
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export default {
  signup,
  login,
  logout,
  getCurrentUser,
};
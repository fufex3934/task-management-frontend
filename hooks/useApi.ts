import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your NestJS backend URL
});

// Attach JWT token from localStorage automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

export { api };
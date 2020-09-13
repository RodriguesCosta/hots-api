import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hots-api.vercel.app/',
});

export default api;

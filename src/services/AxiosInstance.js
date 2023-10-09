import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ecommerce.routemisr.com/api/v1/', // Your API base URL
  timeout: 10000, // Set a timeout for requests (optional)
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default instance;

export const register = (data) => instance.post('/auth/signup', data);
export const login = (data) => instance.post('/auth/signin', data);

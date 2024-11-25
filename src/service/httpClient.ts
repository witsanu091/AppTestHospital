import axios from 'axios';
// import join from "url-join";
import { getToken } from '../stores/storage';

export const httpClient = axios.create({
  baseURL: process.env.BASE_URL_API,
});

httpClient.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
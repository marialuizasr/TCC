'use client';
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data.err)
);

export interface ErrorResponse {
  message: string;
}


export default instance;
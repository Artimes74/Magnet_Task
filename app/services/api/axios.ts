import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'free_user_3F9CAMrEbTfLMnrvo4CnwUk3ZHT',
  },
});

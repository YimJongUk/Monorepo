import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const axiosBasicConfig: AxiosRequestConfig = {
  baseURL: `https://jsonplaceholder.typicode.com/`
  // headers: {
  //   'Content-Type': 'application/json; charset=utf-8',
  //   Authorization: `Basic ${import.meta.env.VITE_APP_KEY}`
  // }
};

const clientRequest = axios.create(axiosBasicConfig);

const createGetRequest = (url: string, body?: object) => clientRequest.get(url, body).then((r) => r.data);

export const getNotice = () => createGetRequest(`todos/1`);

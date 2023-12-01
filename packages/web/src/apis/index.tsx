import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const axiosBasicConfig: AxiosRequestConfig = {
  baseURL: `/dummy`
};

const clientRequest = axios.create(axiosBasicConfig);

const createGetRequest = (url: string, body?: object) => clientRequest.get(url, body).then((r) => r.data);

export const getMenu = () => createGetRequest(`/Dummy.json`);

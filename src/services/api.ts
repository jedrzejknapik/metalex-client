import axiosModule, { AxiosRequestConfig } from "axios";
import { getToken } from "../providers/auth/auth.utils";

const { VITE_API_URL } = import.meta.env;

console.log("api url: ", VITE_API_URL);

const axios = axiosModule.create({
  baseURL: VITE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  async (config) => {
    const newConfig = { ...config };
    try {
      const token = getToken();
      if (token) {
        newConfig.headers.Authorization = token;
      }
    } catch (err) {
      /* empty */
    }

    return newConfig;
  },
  async (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      window.location.href = "/login";
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

const get = async (url: string, config: AxiosRequestConfig = {}) => {
  const response = await axios.get(url, config);
  return response.data;
};

const post = async (
  url: string,
  data: unknown,
  config: AxiosRequestConfig = {}
) => {
  const response = await axios.post(url, data, config);
  return response.data;
};

const put = async <Response>(
  url: string,
  data: unknown,
  config: AxiosRequestConfig = {}
) => {
  const response = await axios.put<Response>(url, data, config);
  return response.data;
};

const deleteResource = async (url: string) => {
  const response = await axios.delete(url);
  return response.data;
};

export const api = {
  get,
  post,
  put,
  deleteResource,
};

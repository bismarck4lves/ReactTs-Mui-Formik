import axios from "axios";
import { definitions } from "utils/environment";
import { normalizeBaseUrl } from "utils/http-utils";

const unprotected = axios.create({
  baseURL: definitions.api_url,
  timeout: 5000,
});

unprotected.interceptors.request.use(
  (config) => {
    config.url = normalizeBaseUrl(`/api/${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

unprotected.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default unprotected;

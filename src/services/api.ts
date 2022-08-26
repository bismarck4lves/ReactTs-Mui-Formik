import axios from "axios";
import { useTokenStorage } from "hooks";
import { definitions } from "utils/environment";
import { normalizeBaseUrl } from "utils/http-utils";


const api = axios.create({
  baseURL: definitions.api_url,
  // timeout: 5000
});

api.interceptors.request.use(
    (config) => {
      const tokenStorage = useTokenStorage()
      const token = tokenStorage.get()
      config.headers["Authorization"] = `Bearer ${token}`;
      config.url = normalizeBaseUrl(`/api/${config.url}`)
      return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear()
      location.reload()
    }
    console.error(error)
    return Promise.reject(error);
  }
);

export default api;

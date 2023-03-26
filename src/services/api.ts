import axios from "axios";

const queryString = require("query-string");

interface ApiProps {
  fullResponse?: boolean;
  contentType?: string;
}
const api = (props?: ApiProps): any => {
  const apiCall = axios.create({
    baseURL: process.env.WEATHER_API_URL,
  });
  apiCall.interceptors.request.use(async (config) => {
    return config;
  });

  apiCall.interceptors.response.use(
    (response: any) => response,
    async (error: any) => {
      const originalConfig = error.config;
      if (axios.isCancel(error)) {
        return Promise.reject(error);
      }

      const { response } = error;

      return Promise.reject(response);
    }
  );
  return apiCall;
};

export { default as to } from "@utils/awaitTo";

export default api;

import { AxiosError } from "axios";

import { Api, AuthenticationValidateKeyError } from "src/core/api/generatedApi";

const { instance, v3: BaseApi } = new Api();

const errorHandler = (error: AxiosError<AuthenticationValidateKeyError>) => {
  throw error;
};

export const initializeHttpInterceptors = () => {
  instance.interceptors.request.use(
    function (config) {
      /* Do something before request is sent */
      config.headers.Authorization = `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`;

      return config;
    },
    function (error: AxiosError<AuthenticationValidateKeyError>) {
      /* Do something with request error */
      errorHandler(error);
      return Promise.reject(error.message);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      /* Any status code that lie within the range of 2xx cause this function to trigger */
      /* Do something with response data */
      return response;
    },
    function (error: AxiosError<AuthenticationValidateKeyError>) {
      /* Any status codes that falls outside the range of 2xx cause this function to trigger */
      /* Do something with response error */

      errorHandler(error);
      return Promise.reject(error.message);
    }
  );
};

export default BaseApi;

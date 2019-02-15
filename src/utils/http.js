import axios from 'axios';

import config from '../config';
import * as authService from '../services/auth';
import * as authConstants from '../constants/auth';
import * as HttpStatus from '../constants/httpStatus';

/**
 * Creating a new http instance.
 */
const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * Initialize the unauthorized response interceptors.
 */
http.interceptors.response.use(
  /**
   * Leave response as it is for a success response.
   *
   * @param {any} response
   */
  response => response,
  /**
   * This interceptor checks if the response had a 401 status code, which means
   * that the access token used for the request has expired. It then refreshes
   * the access token and resends the original request.
   */
  unauthorizedResponseHandlerInterceptor
);

/**
 * Interceptor to catch the unauthorized responses and refresh the access token.
 *
 * @param {any} err
 */
export async function unauthorizedResponseHandlerInterceptor(err) {
  const originalRequest = err.config;
  const code = err.response && err.response.status;

  // If the request is a retry request, simply clear the tokens.
  if (originalRequest['__isRetryRequest']) {
    authService.clearTokens();

    return Promise.reject(err);
  }

  if (code === HttpStatus.UNAUTHORIZED) {
    originalRequest.__isRetryRequest = true;

    try {
      const accessToken = await authService.refreshAccessToken();

      const newRequest = {
        ...originalRequest,
        headers: {
          ...originalRequest.headers,
          [authConstants.AUTHORIZATION_HEADER]: `Bearer ${accessToken}`
        }
      };

      return http.request(newRequest);
    } catch (error) {
      authService.clearTokens();
    }
  }

  return Promise.reject(err);
}

export default http;

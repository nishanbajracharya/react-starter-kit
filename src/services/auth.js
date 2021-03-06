import * as tokens from '../constants/tokens';
import * as storageUtil from '../utils/storage';

/**
 * Refresh the access token using the refresh token.
 */
export function refreshAccessToken() {
  // TODO: Use the current refresh token to get a new access token. Needs API call for this.
  // const refreshToken = storageUtil.get(tokens.REFRESH_TOKEN);
  // Eg:
  // const result = await loginService.refresh();
  // const newAccessToken = result.accessToken;

  const newAccessToken = '';

  saveAccessToken(newAccessToken);

  return newAccessToken;
}

/**
 * Save access token in the local storage.
 *
 * @param {string} accessToken
 */
export function saveAccessToken(accessToken) {
  storageUtil.set(tokens.ACCESS_TOKEN, accessToken);
}

/**
 * Clear the tokens saved in the local storage.
 */
export function clearTokens() {
  storageUtil.remove(tokens.REFRESH_TOKEN);
  storageUtil.remove(tokens.ACCESS_TOKEN);
}

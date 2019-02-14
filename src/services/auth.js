import { getString } from '../utils/string';
import * as tokens from '../constants/tokens';
import * as storageUtil from '../utils/storage';

export function refreshAccessToken() {
  // Use the current refresh token to get a new access token.
  // const refreshToken = storageUtil.get(tokens.REFRESH_TOKEN);
  const newAccessToken = getString();

  saveAccessToken(newAccessToken);

  return newAccessToken;
}

export function saveAccessToken(accessToken) {
  storageUtil.set(tokens.ACCESS_TOKEN, accessToken);
}

export function clearTokens() {
  storageUtil.remove(tokens.REFRESH_TOKEN);
  storageUtil.remove(tokens.ACCESS_TOKEN);
}

import { ACCESS_TOKEN_LENGTH } from '../constants/auth';

/**
 * Generate a random string of given length.
 *
 * @param {number} [length=ACCESS_TOKEN_LENGTH]
 * @returns {string}
 */
export function getString(length = ACCESS_TOKEN_LENGTH) {
  let randomString = '';
  let possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    randomString += possibleCharacters.charAt(Math.floor(Math.random() * possible.length));
  }

  return randomString;
}

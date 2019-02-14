/**
 * Saves a new entry to the localstorage.
 *
 * @param {string} key
 * @param {string} value
 */
export function set(key, value) {
  localStorage.set(key, value);
}

/**
 * Retrieves the value stored under a key in the localstorage.
 *
 * @param {string} key
 * @returns {string}
 */
export function get(key) {
  return localStorage.get(key);
}

/**
 * Removes an item from the localstorage for given key.
 *
 * @param {string} key
 */
export function remove(key) {
  localStorage.removeItem(key);
}

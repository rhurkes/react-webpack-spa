// NOTE: strict needed for testing
'use strict'; // eslint-disable-line strict

const cacheTTLMs = 60 * 60 * 1000;  // Unauthenticated API rate limiting is 60 minute window

function supportsLocalStorage() {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (err) {
    return false;
  }
}

const supportsLs = supportsLocalStorage();

/**
 * Caching helper that uses HTML5 localStorage or falls back to an attached object.
 */
const cache = {
  /**
   * Internal check for HTML5 localStorage support.
   * @private
   */
  supportsLocalStorage: supportsLs,
  /**
   * Internal object for caching data when HTML5 localStorage support is not present.
   * @private
   */
  fauxStorage: {},
  get: function cacheGet(key) {
    let parsedResults;
    const storageResults = this.supportsLocalStorage && localStorage[key]
      ? localStorage[key]
      : this.fauxStorage[key];

    try {
      parsedResults = JSON.parse(storageResults);
    } catch (err) {
      // Swallow
    }

    return (parsedResults && parsedResults.last && (Date.now() - parsedResults.last < cacheTTLMs))
      ? parsedResults.data
      : null;
  },
  set: function cacheSet(key, value) {
    const payload = JSON.stringify({
      data: value,
      last: Date.now()
    });

    if (this.supportsLocalStorage) {
      localStorage[key] = payload;
    } else {
      this.fauxStorage[key] = payload;
    }
  }
};

export default cache;

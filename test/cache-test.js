/* eslint-disable prefer-arrow-callback, func-names, import/no-extraneous-dependencies */
import 'babel-polyfill';
import should from 'should';
import cache from '../lib/cache';

const testkey = 'testkey';
const testvalue = 'testvalue';

// Can't easily test browser API here
cache.supportsLocalStorage = false;

describe('cache service', function () {
  it('should store values without throwing', function () {
    should.doesNotThrow(() => {
      cache.set(testkey, testvalue);
    });
  });

  it('should return values', function () {
    const results = cache.get(testkey);
    results.should.equal(testvalue);
  });
});

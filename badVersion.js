/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

// test API
let isBadVersion = (num) => (num >= 4 ? true : false);

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
let solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let start = 1;
    let end = n;

    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      if (isBadVersion(mid)) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};

module.exports = { solution, isBadVersion };

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let set = new Set();
  let answer = 0;
  s1.split('').map(item => set.add(item));

  for (let symbol of set) {
    let local1 = 0;
    let local2 = 0;

    for (let i = 0; i < s1.length; i++) {
      if (s1[i] == symbol) {
        local1++
      }
    }

    for (let i = 0; i < s2.length; i++) {
      if (s2[i] == symbol) {
        local2++
      }
    }

    answer += Math.min(local1, local2);
  }

  return answer;
}

module.exports = {
  getCommonCharacterCount
};

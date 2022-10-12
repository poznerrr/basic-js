const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let mar = str.split('');
  let symbol;
  let count = 0;
  let answer = '';
  for (let i = 0; i < mar.length; i++) {
    if (mar[i] === symbol) {
      count++;
    } else {
      if (count == 1) {

        answer = answer + symbol;
      }
      else if (count > 1) {

        answer = answer + count + symbol;
      }
      symbol = mar[i];
      count = 1;
    }
  }
  if (count == 1) {

    answer = answer + symbol;
  }
  else if (count > 1) {

    answer = answer + count + symbol;
  }
  return answer;
}

module.exports = {
  encodeLine
};

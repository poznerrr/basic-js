const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let myArr = n.toString().split('');
  let max = 0;
  let tmpArr = [];
  for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr.length; j++) {
      if (j != i) {
        tmpArr.push(myArr[j]);
      }
    }
    if (max < Number.parseInt(tmpArr.join(''))) {
      max = Number.parseInt(tmpArr.join(''))
    }
    tmpArr = [];
  }
  return max;
}

module.exports = {
  deleteDigit
};

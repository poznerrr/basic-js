const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  else if (arr.length == 0) {
    return [];
  }
  const controls = ["--discard-next", "--discard-prev", "--double-next ", "--double-prev"];
  let newArr = [];
  let z = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") {
      i++
      newArr[z] = null;
      z++;
    } else if (arr[i] == "--double-next") {
      i++;
      newArr[z] = arr[i];
      i--;
      z++
    } else if (arr[i] == "--double-prev") {
      newArr[z] = newArr[z - 1];
      z++;
    } else if (arr[i] == "--discard-prev") {
      newArr[z - 1] = null;
    }
    else {
      newArr[z] = arr[i];
      z++;
    }
  }
  let answer = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] != null && newArr[i] != undefined) {
      answer.push(newArr[i]);
    }
  }
  return answer;

}

module.exports = {
  transform
};

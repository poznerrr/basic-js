const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let answer = {};
  for (let i = 0; i < domains.length; i++) {
    let local = domains[i].split('.');
    for (let j = 0; j < local.length; j++) {
      local[j] = '.'.concat(local[j]);
    }
    local = local.reverse();
    let state = '';
    for (let j = 0; j < local.length; j++) {
      state = state.concat(local[j]);
      if (Object.keys(answer).includes(state)) {
        answer[state] += 1;
      } else {
        answer[state] = 1;
      }
    }
  }
  return answer;
}

module.exports = {
  getDNSStats
};

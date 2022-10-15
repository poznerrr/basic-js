const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = (typeof str == "string") ? str : str == null ? 'null' : str.valueOf();
  if (!str) { str = '' }
  let repeatTimes = 0;
  let separator = "+";
  let additionSeparator = "|";
  let addition = '';
  let additionRepeatTimes = '';
  if (options.hasOwnProperty('repeatTimes')) {
    repeatTimes = options.repeatTimes;
  }
  if (options.hasOwnProperty('separator')) {
    separator = options.separator;
  }
  if (options.hasOwnProperty('additionSeparator')) {
    additionSeparator = options.additionSeparator;
  }
  if (options.hasOwnProperty('addition')) {
    addition = options.addition;
  }
  if (options.hasOwnProperty('additionRepeatTimes')) {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  let suffix = addition;
  let suffixFromSuffix = additionSeparator + addition;
  if (additionRepeatTimes > 1) {
    suffix = suffix + suffixFromSuffix.repeat(additionRepeatTimes - 1);
  }
  str = str + suffix;
  suffix = separator + str;
  if (repeatTimes > 1) {
    str = str + suffix.repeat(repeatTimes - 1);
  }

  return str;

}

module.exports = {
  repeater
};

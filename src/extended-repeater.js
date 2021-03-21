const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  console.log(str);
  let adarr =[];
  for (let item=0; item<(options.additionRepeatTimes ? options.additionRepeatTimes : 1); item++){
    adarr[item]=((options.addition!= null && options.addition!=undefined) ? options.addition : options.addition===null ? 'null':'');
  }
  let addition = adarr.join(options.additionSeparator ? options.additionSeparator : '|');
  let arr=[];
  str=(str!==null && str!=undefined ?  str : str===null ? 'null' : '') + addition;
  for (let item = 0; item < (options.repeatTimes ? options.repeatTimes: 1); item++) {
    arr[item] = str;
  }
  return arr.join(options.separator ? options.separator : '+');
};
  
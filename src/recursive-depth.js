const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr ) {
   let deep = 1;
    for (let i of arr) {
      if (Array.isArray(i)){
        deep=deep+this.calculateDepth(i);
      }
   }
   return deep;
  }
};
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr ) {

    var res = 1;
    for(var i = 0; i < arr.length; ++i) {
        if (Array.isArray(arr[i])) {
        var subDepth = this.calculateDepth(arr[i]) + 1;
        if (subDepth > res) {
            res = subDepth;
        }
      }
    }
    return res;
}
/*   let deep = 1;

    for (let i=0; i<arr.length; i++) {
      if (Array.isArray(arr[i])){
        deep=deep+this.calculateDepth(arr[i]);

      }
      
   }
   return deep;
  }*/
};
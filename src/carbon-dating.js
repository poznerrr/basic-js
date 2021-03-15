const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const SAMPLE_ACTIVITY = parseFloat(sampleActivity);
  if (isNaN(SAMPLE_ACTIVITY) || sampleActivity==undefined || SAMPLE_ACTIVITY>=9000 || arguments.length==0 || typeof sampleActivity != "string"){
    return false;
  }
 let k = 0.693 / HALF_LIFE_PERIOD;
 let t = Math.ceil(Math.log(MODERN_ACTIVITY/SAMPLE_ACTIVITY)/k);
 return Number.isInteger(t) && t>0 ? t : false; 
};


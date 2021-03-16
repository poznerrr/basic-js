const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date instanceof Date || date==undefined){
    return 'Unable to determine the time of year!';
  }
  date.valueOf();
  let month = date.getMonth();
  let season='';
  switch (month) {
    case 0:
      season='winter';
      break;
    case 1:
      season='winter';
      break;
    case 11:
        season='winter';
        break;
      
    case 2:
      season = 'spring';
      break;
    case 3:
        season = 'spring';
        break;
    case 4:
          season = 'spring';
          break;
    case 5:
      season ='summer';
      break;
      case 6:
        season ='summer';
        break;
        case 7:
      season ='summer';
      break;
    case 8:
      season='fall';
      break;

      case 9:
        season='fall';
        break;
        case 10:
          season='fall';
          break;
        default:
          season='null';
          break;
  }
  return season;
};

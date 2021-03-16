const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let cod=[];
  if (!Array.isArray(members)){
    return false;
  }
  for (let member of members){
    if (typeof member == 'string'){

      cod.push((member.toUpperCase().trim().split(''))[0]);
    }
  }
  return cod.sort().join('');
  // remove line with error and write your code here
};

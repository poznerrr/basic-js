const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(! (typeof arr)== Array )
  {throw 'Error';}
  let resArr = [];
  let itemDel=0;
  let dbl = 0;
  let discard =0;
  for (let item of arr){
    if(item == '--discard-next') {
      discard = 1;
      itemDel=0;
    }  else 
    if ( item == '--discard-prev') {
      if (resArr.length>0 && itemDel == 0){
      resArr.pop()
      }
      itemDel=1;
    } else
    if (item == '--double-next') {
      dbl=1;
      itemDel=0;
      discard=0;
    } else
    if (item == '--double-prev') {
      if (resArr.length > 0 && itemDel == 0) {
      resArr.push(resArr[resArr.length-1]);
      }
      itemDel=0;
      discard=0;
      dbl=0;
    } else  if (dbl == 1) {
      if(itemDel==0) {
      dbl=0;
      resArr.push(item);
      resArr.push(item);
      } else
      itemDel=0;
    
    } else if (discard==1) {
      discard=0;
      itemDel=1;
    } 
    else {resArr.push(item); itemDel=0;}
  }
  return resArr;
  
};

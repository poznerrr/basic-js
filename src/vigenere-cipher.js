const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
 
  constructor(param) {
   this.param=param;
  }
  encrypt(message, key) {
    let KEYS = {
      'A': 0,
      'B': 1,
      'C': 2,
      'D': 3,
      'E': 4,
      'F': 5,
      'G': 6,
      'H': 7,
      'I': 8,
      'J': 9,
      'K': 10,
      'L': 11,
      'M': 12,
      'N': 13,
      'O': 14,
      'P': 15,
      'Q': 16,
      'R': 17,
      'S': 18,
      'T': 19,
      'U': 20, 
      'V': 21, 
      'W': 22,
      'X': 23,
      'Y': 24,
      'Z': 25
    }
    let UNKEYS = {
      0:'A',
      1:'B',
      2:'C',
      3:'D',
      4:'E',
      5:'F',
      6:'G',
      7:'H',
      8:'I',
      9:'J',
      10:'K',
      11:'L',
      12:'M',
      13:'N',
      14:'O',
      15:'P',
      16:'Q',
      17:'R',
      18:'S',
      19:'T',
      20:'U', 
      21:'V', 
      22:'W',
      23:'X',
      24:'Y',
      25:'Z'

    }
  

    if (message==undefined || key== undefined){
      throw "Error"
    }

      let pass= message.toUpperCase().split('');
      
      key = key.toUpperCase().repeat(20).split('');
    
      let answer =[];
      let zero=0;
      for (let i=0; i< pass.length; i++) {
        if (KEYS.hasOwnProperty(pass[i]))
        {
          answer.push((KEYS[pass[i]] + KEYS[key[zero]])>25 ? (KEYS[pass[i]] + KEYS[key[zero]]) - 26 : (KEYS[pass[i]] + KEYS[key[zero]]) );
          zero++;
        }
        else {
          answer.push(pass[i]);
        }
      }
      for (let i=0; i<answer.length; i++) {
        if (typeof answer[i] == 'number') {
          if(answer[i]>25) {
            answer[i]-=25;
          }
          answer[i]=UNKEYS[answer[i]];
        }
      }
     if (this.param==true || this.param==undefined) {
     
     return answer.join('');
    } else {
     
      let reverse=[]
      // console.log ('dencrypte true')
     for (let item of answer) {
       reverse.unshift(item);
   }
   return reverse.join('');

    }
    }
  
   

  decrypt(encryptedMessage, key) {
 
    let KEYS = {
      'A': 0,
      'B': 1,
      'C': 2,
      'D': 3,
      'E': 4,
      'F': 5,
      'G': 6,
      'H': 7,
      'I': 8,
      'J': 9,
      'K': 10,
      'L': 11,
      'M': 12,
      'N': 13,
      'O': 14,
      'P': 15,
      'Q': 16,
      'R': 17,
      'S': 18,
      'T': 19,
      'U': 20, 
      'V': 21, 
      'W': 22,
      'X': 23,
      'Y': 24,
      'Z': 25
    }

    let UNKEYS = {
      0:'A',
      1:'B',
      2:'C',
      3:'D',
      4:'E',
      5:'F',
      6:'G',
      7:'H',
      8:'I',
      9:'J',
      10:'K',
      11:'L',
      12:'M',
      13:'N',
      14:'O',
      15:'P',
      16:'Q',
      17:'R',
      18:'S',
      19:'T',
      20:'U', 
      21:'V', 
      22:'W',
      23:'X',
      24:'Y',
      25:'Z'

    }
  

    if (encryptedMessage==undefined || key== undefined){
      throw "Error"
    }
    
    let pass= encryptedMessage.toUpperCase().split('');
    let repeater =Math.ceil( encryptedMessage.length / key.length);
    key = key.toUpperCase().repeat(20).split('');
    let answer =[];
    let zero=0;
    for (let i=0; i< pass.length; i++) {
      if (KEYS.hasOwnProperty(pass[i])){

      answer.push(UNKEYS[(KEYS[pass[i]] - KEYS[key[zero]]) >=0 ? (KEYS[pass[i]] - KEYS[key[zero]]) : (KEYS[pass[i]] - KEYS[key[zero]]) + 26 ]);
      zero++;
    }
      else {
        answer.push(pass[i]);
      }
    }
    
    if(this.param==true || this.param==undefined){
     // console.log ('dencrypte true')
   return answer.join('');
    }
    else {
      let reverse=[]
     // console.log ('dencrypte true')
    for (let item of answer) {
      reverse.unshift(item);
  }
  return reverse.join('');
}
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;

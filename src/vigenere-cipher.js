const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(param) {
    if (param==true) {
      this.param=true
    } else {
      this.param=false;
    }
  }
  encrypt(message, key) {
    if (message==undefined || key== undefined){
      throw "Error"
    } if (this.param) {
      console.log ('encrypte true')
      return message.split('').reverse().join('');
    } else {
      console.log ('encrypte false')
      return message.split('').reverse().join('');
    }
    }
      
  decrypt(encryptedMessage, key) {
    if (encryptedMessage==undefined || key== undefined){
      throw "Error"
    } if(this.param){
      console.log ('dencrypte true')
    return encryptedMessage.split('').reverse();}
    else {
      console.log ('dencrypte true')
      return encryptedMessage.split('').reverse().join('');
    }
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    if (isDirect) {
      this.isDirect = true;
    }
  }
  encrypt(message, code) {
    if (message == undefined || code == undefined) {
      throw Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    code = code.toUpperCase();
    while (code.length < message.length) {
      code = code + code;
    }
    let answer = [];
    let codeCount = 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        answer.push(message[i]);
      }
      else {
        let symbol = (message.charCodeAt(i) + code.charCodeAt(codeCount) - 65);
        codeCount += 1;
        symbol > 90 ? symbol -= 26 : symbol;
        answer.push(String.fromCharCode(symbol));
      }
    }
    if (this.isDirect) { return answer.join(''); } else { return answer.reverse().join(''); }
  }

  decrypt(message, code) {
    if (message == undefined || code == undefined) {
      throw Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    code = code.toUpperCase();
    while (message.length > code.length) {
      code += code;
    }
    let answer = [];
    let codeCount = 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        answer.push(message[i]);
      }
      else {
        let symbol = (message.charCodeAt(i) - code.charCodeAt(codeCount) + 65);
        codeCount += 1;
        symbol < 65 ? symbol += 26 : symbol;
        answer.push(String.fromCharCode(symbol));
      }
    }
    if (this.isDirect) { return answer.join(''); } else { return answer.reverse().join(''); }
  }
}


module.exports = {
  VigenereCipheringMachine
};

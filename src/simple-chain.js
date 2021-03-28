const CustomError = require("../extensions/custom-error");

const chainMaker = {
  tmp: [],
  getLength() {
    return this.tmp.length;
  },
  addLink(value) {
   this.tmp.push(value);
   return this ;
   
  },
  removeLink(position) {
    console.log('Position:: ',position);
    if (position==null || !typeof position=='number' || position>this.tmp.length || position<1) {
      this.tmp=[];
      throw new Error;
    }
    this.tmp.splice(position-1,1);
   return this;
    // remove line with error and write your code here
  },
  reverseChain() {
   this.tmp.reverse();
   return this;
    // remove line with error and write your code here
  },
  finishChain() {
    for (let item=0;item<this.tmp.length; item++ ) {
      this.tmp[item] = '( '+this.tmp[item]+' )';
    }
    let answer = this.tmp.join('~~');
    this.tmp=[];
    return answer;
    
  }
  
};

module.exports = chainMaker;

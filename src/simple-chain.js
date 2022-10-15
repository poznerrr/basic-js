const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;

  },
  removeLink(position) {
    if (typeof position == "undefined" || position == null || isNaN(position) || Number.parseInt(position) != position || position > this.arr.length || position < 1) {
      this.arr = [];
      throw Error("You can't remove incorrect link!");
    }
    this.arr.splice((+position - 1), 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let stringer = this.arr.join("~~");
    this.arr = [];
    return stringer;
  }
};

module.exports = {
  chainMaker
};

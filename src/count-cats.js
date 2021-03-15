const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
let summa = 0;
for(let row of matrix) {
  for (let elem of row) {
    if (elem=='^^') {
      summa++;
    }
  }
}
return summa;
};

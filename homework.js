"use strict";

function BinarioADecimal(num) {
  let a = num.toString().split("");
  let decimal = 0;
  for (let i = 0; i < a.length; i++) {
    decimal += a[i] * Math.pow(2, a.length - i - 1);
  }
  return decimal;
}
console.log(BinarioADecimal(11010010));

function DecimalABinario(num) {
  let bin = [];
  while (num != 0) {
    bin.push(num % 2);
    num = Math.floor(num / 2);
  }
  let binario = bin.reverse().join("");
  return binario;
}
console.log(DecimalABinario(21));

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};

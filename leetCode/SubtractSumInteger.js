// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

var subtractProductAndSum = function(n) {
  let numArr = (""+n).split(""),
  // mapping to Number make them integers again
      product = numArr.map(Number).reduce((a, b) => a * b),
      sum = numArr.map(Number).reduce((a, b) => b + a);
  
  return product - sum
};

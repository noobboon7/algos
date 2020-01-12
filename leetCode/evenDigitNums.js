// Given an array nums of integers, return how many of them contain an even number of digits.
var findNumbers = function(nums) {
 let count = 0;
  
  for(let i of nums){
    let num = i.toString(); 

    if (num.length % 2 === 0 ){
      count ++;
    }
  }   
    return count;
};
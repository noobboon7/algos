/////////// description /////////
/**
 *Given a non-negative integer num, return whether it is a palindrome.

Bonus: Can you solve it without using strings?

Example 1
Input

num = 121
Output

true
Example 2
Input

num = 20200202
Output

true
Example 3
Input

num = 44
Output

true
 */


 /////using string concatination /////

 function isIntPal(num) {
  let reversed ='';
  num = num.toString()
  
  for(let i = num.length -1; i >= 0; i--){
    reversed += num[i]
  } 
  return num == reversed 
 }
 
 ///////// using math only ///////
 
 function isIntPal(num) {
  let x = y;
  let rev = 0;
  while (x !== 0) {
      rev = (rev * 10) + (x % 10);
      x = Math.floor(x / 10);
  }
  return rev == y;
 }
/** 
 TL;DR - In essence the while loop does nothing but steal the last digit, and keep adding it to the new one, until the old value is exhausted. It just uses a Number instead of a String to pop out the trailing digit in X and add it to "REV", the variable for our "reversed" number.
 
 IS THIS GOLFING?
 Not especially. I didn't use (num) as the input because I thought it might get confusing, working with two LITERAL integers and a different original variable "num." Choosing "y" for the input was just knee-jerk.
 
 TIME COMPLEXITY
 There's a while loop involved, so it should be linear, not traditionally constant. Completion of the function should take more cycles and therefore more time proportional to the length of the input integer. That said, the upper boundary for a standard Number in JS is low and basic numerical operations in nodeJS are efficient. Practically speaking, the function will likely take equivalent time with the integer 121 as it will 9007199254740991 (the maximum safe integer value for JS) or the maximum representable number in JavaScript, 2 to the 1024th power.
 
 In local testing, f(121) took 0.38 ms to complete, while f(2^1024 - 1) took 0.876.
 
 TL;DR - By coding standards, linear. In practice, linear with a very shallow slope.
*/
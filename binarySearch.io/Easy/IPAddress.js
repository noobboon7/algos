/**
 Given a string s, return whether it's an IPv4 address.

IPv4 addresses must follow the format A.B.C.D, where A, B, C, and D are numbers between 0 and 255. Zero-prefixed numbers, such as 01 and 065, are not allowed, except for 0 itself.

Example 1
Input

// s = "0.0.0.0"
Output

true
Example 2
Input

s = "0.1.2.255"
Output

true
Example 3
Input

s = "0.1.2.256"
Output

false
 */

 function validIP(string) {
 string = string.split('.')  
 
 if (string.length !== 4) return false
 
 return string.every(num => {
  if (num.length >= 2){
   if (num[0] === '0') return false
  } 
  return !num.match(/\D/) && (num >= 0 && num <= 255) 
 }) 
 }
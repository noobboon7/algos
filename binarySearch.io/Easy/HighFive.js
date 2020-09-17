////////// Description//////////////
/*
Given an integer n, return the maximum number 
you can make by inserting 5 anywhere in the number.

Example 1
Input: n = 923
Output: 9523

Example 2
Input: n = -234
Output: -2345

Example 3
Input: n = 1
Output: 51
*/

function highFive(n) {
 // make array of strings from n 
 n = [...n.toString()]
 let insert;

 // find first index larger than 5 in n array
 if(n[0] === '-'){
   
   for(let i = 1; i < n.length; i++){
     if(parseInt(n[i])>5) {
       insert = i
       break
     }
   }
   
   if(insert) n.splice(insert, 0, '5')
   else n.push('5')
   
 }else{
   // if number is less than 5 insert before, if num larger than 5 insert after 
  for(let i = 0; i< n.length ;i++){
    if(parseInt(n[i]) < 5){
      insert = i 
      break 
    }
  }
     
 // insert 5 as a string type
     n.splice(insert, 0, '5')
 }
 
 // turn back into number type
 return parseInt(n.join(''))
}

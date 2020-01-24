/*
Given five positive integers, 
find the minimum and maximum values that can be calculated 
by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated 
long integers.

For example, . Our minimum sum is  and our maximum sum is . We would print

16 24
Function Description

Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

miniMaxSum has the following parameter(s):

arr: an array of  integers
*/

function miniMaxSum(arr) {
  arr.sort((a,b ) => a - b)
  let grp1 = arr.slice(0,4).reduce((a,b) => a + b)
  let grp2 = arr.slice(1,5).reduce((a,b) => a + b)
  console.log(grp1, grp2)

}
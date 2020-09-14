/*
Given a positive integer n, sum all of its digits to get a new number. Repeat this operation until it's less than 10.

Example 1
Input

n = 8835
Output

6
Explanation

8 + 8 + 3 + 5 = 24
2 + 4 = 6
*/ 

const repeatAddition = (n) => {
 if (n <= 10) return n;

 while (n >= 10) {
  n = n.toString();
  n = [...n].reduce((acc, cur) => acc + parseInt(cur), 0);
 }

 return n;
}

console.log(repeatAddition(8835)) //6
console.log(repeatAddition(10435)) // 4
console.log(repeatAddition(88355)) //2
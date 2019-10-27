// description 
// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.


// code 
var isPrime = function(n) {    
    const stop = Math.sqrt(n);
    for (let i = 2; i <= stop; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

var countPrimes = function(n) {
    let count = 0;
    while (n--) {
        if (isPrime(n)) {
            count++;
        }
    }
    return count;
};
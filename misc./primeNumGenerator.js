// create an array of prime numbers, up to a given number

const primeNumberGenerator = (n) => {
	if (n < 2) return [];
	const primeArray = [];
	//generate a list of prime numbers up to n
	for (let i = 2; i <= n; i++) {
		if (isPrime(i)) primeArray.push(i);
	}
	return primeArray;
};

isPrime = (n) => {
	if (n < 2) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;
	const sqrtN = Math.floor(Math.sqrt(n));

	for (let i = 3; i <= sqrtN; i += 2) {
		if (n % i === 0) return false;
	}
	return true;
};

//test primeNumberGenerator with console.logs
console.time('primeNumberGenerator');
console.log(primeNumberGenerator(100));
console.timeEnd('primeNumberGenerator');
// console.log(primeNumberGenerator(1));
// console.log(primeNumberGenerator(31));

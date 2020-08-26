/* 
Description

Mix -nacci sequences using a given pattern p.
Return the first n elements of the mixed sequence.
Rules
The pattern p is given as a list of strings (or array of symbols in Ruby) using the pattern mapping below (e. g. ['fib', 'pad', 'pel'] means take the next fibonacci, then the next padovan, then the next pell number and so on).
When n is 0 or p is empty return an empty list.
If n is more than the length of p repeat the pattern.
Examples
            0  1  2  3  4  
----------+------------------
fibonacci:| 0, 1, 1, 2, 3 ...
padovan:  | 1, 0, 0, 1, 0 ...
pell:     | 0, 1, 2, 5, 12 ...

pattern = ['fib', 'pad', 'pel']
n = 6
#          ['fib',        'pad',      'pel',   'fib',        'pad',      'pel']
# result = [fibonacci(0), padovan(0), pell(0), fibonacci(1), padovan(1), pell(1)]
result = [0, 1, 0, 1, 0, 1]

pattern = ['fib', 'fib', 'pel']
n = 6
#          ['fib', 'fib', 'pel', 'fib', 'fib', 'pel']
# result = [fibonacci(0), fibonacci(1), pell(0), fibonacci(2), fibonacci(3), pell(1)]
result = [0, 1, 0, 1, 2, 1]
Sequences
fibonacci : 0, 1, 1, 2, 3 ...
padovan: 1, 0, 0, 1, 0 ...
jacobsthal: 0, 1, 1, 3, 5 ...
pell: 0, 1, 2, 5, 12 ...
tribonacci: 0, 0, 1, 1, 2 ...
tetranacci: 0, 0, 0, 1, 1 ...
Pattern mapping
'fib' -> fibonacci
'pad' -> padovan
'jac' -> jacobstahl
'pel' -> pell
'tri' -> tribonacci
'tet' -> tetranacci} pattern 
 */


// naive solution
function mixbonacci(pattern, length) {
	if (length === 0 || pattern.length === 0) return [];
	let mapper = {
		fib: [
			0,
			1,
			1,
			2,
			3,
			5,
			8,
			13,
			21,
			34,
			55,
			89,
			144,
			233,
			377,
			610,
			987,
			1597,
			2584,
			4181,
			6765,
			10946,
			17711,
			28657,
			46368,
			75025,
			121393,
			196418,
			317811,
			514229,
			832040,
			1346269,
			2178309,
			3524578,
			5702887,
			9227465,
			14930352,
			24157817,
			39088169,
			63245986,
			102334155,
			165580141,
		],
		pad: [
			1,
			0,
			0,
			1,
			0,
			1,
			1,
			1,
			2,
			2,
			3,
			4,
			5,
			7,
			9,
			12,
			16,
			21,
			28,
			37,
			49,
			65,
			86,
			114,
			151,
			200,
			265,
			351,
			465,
			616,
			816,
			1081,
			1432,
			1897,
			2513,
			3329,
			4410,
			5842,
			7739,
			10252,
			13581,
			17991,
			23833,
			31572,
			41824,
			55405,
			73396,
			97229,
			128801,
			170625,
		],
		pel: [
			0,
			1,
			2,
			5,
			12,
			29,
			70,
			169,
			408,
			985,
			2378,
			5741,
			13860,
			33461,
			80782,
			195025,
			470832,
			1136689,
			2744210,
			6625109,
			15994428,
			38613965,
			93222358,
			225058681,
			543339720,
			1311738121,
			3166815962,
			7645370045,
			18457556052,
			44560482149,
			107578520350,
			259717522849,
			627013566048,
			1513744654945,
			3654502875938,
			8822750406821,
			21300003689580,
			51422757785981,
			124145519261542,
			299713796309065,
			723573111879672,
			1746860020068409,
			4217293152016490,
			10181446324101388,
			24580185800219264,
			59341817924539920,
			143263821649299100,
			345869461223138100,
			835002744095575300,
			2015874949414288600,
			4866752642924153000,
			11749380235262595000,
			28365513113449340000,
			68480406462161270000,
			165326326037771880000,
			399133058537705050000,
			963592443113182000000,
		],
		jac: [
			0,
			1,
			1,
			3,
			5,
			11,
			21,
			43,
			85,
			171,
			341,
			683,
			1365,
			2731,
			5461,
			10923,
			21845,
			43691,
			87381,
			174763,
			349525,
			699051,
			1398101,
			2796203,
			5592405,
			11184811,
			22369621,
			44739243,
			89478485,
			178956971,
			357913941,
			715827883,
			1431655765,
			2863311531,
			5726623061,
			11453246123,
			22906492245,
			45812984491,
			91625968981,
			183251937963,
		],
		tri: [0, 0, 1],
		tet: [
			0,
			0,
			0,
			1,
			1,
			2,
			4,
			8,
			15,
			29,
			56,
			108,
			208,
			401,
			773,
			1490,
			2872,
			5536,
			10671,
			20569,
			39648,
			76424,
			147312,
			283953,
			547337,
			1055026,
			2033628,
			3919944,
			7555935,
			14564533,
			28074040,
			54114452,
			104308960,
			201061985,
			387559437,
			747044834,
			1439975216,
			2775641472,
		],
		fibc: 0,
		padc: 0,
		pelc: 0,
		jacc: 0,
		tric: 0,
		tetc: 0,
	};

	/////////// create a tribonacci sequence //////////////////////////
	let nextNum;
	for (let trib = 3; trib < 150; trib++) {
		nextNum =
			mapper.tri[trib - 1] + mapper.tri[trib - 2] + mapper.tri[trib - 3];
		mapper.tri.push(nextNum);
	}
	/////////////////////////////////////////////////////////////////////

	let result = [],
		pat,
		cur;

	//   console.log('pattern:',pattern)
	for (let i = 0; i < length; i++) {
		pat = pattern[i % pattern.length];
		cur = mapper[`${pat}c`]++;
		//     console.log(pat, result, (i% pattern.length))
		result.push(mapper[pat][cur]);
	}

	//       console.log(result)
	return result;
}
// best practice
/*
function mixbonacci(pattern, n) {
	let Lists = {
		fib: fib(),
		pad: pad(),
		jac: jac(),
		pel: pel(),
		tri: tri(),
		tet: tet(),
	};
	return n > 0 && pattern.length
		? Array.from(
				{ length: n },
				(_, i) => Lists[pattern[i % pattern.length]].next().value,
		  )
		: [];
}

function* fib([a, b] = [0, 1]) {
	while (true) {
		yield a;
		[a, b] = [b, a + b];
	}
}

function* pad([a, b, c] = [1, 0, 0]) {
	while (true) {
		yield a;
		[a, b, c] = [b, c, a + b];
	}
}

function* jac([a, b] = [0, 1]) {
	while (true) {
		yield a;
		[a, b] = [b, a + a + b];
	}
}

function* pel([a, b] = [0, 1]) {
	while (true) {
		yield a;
		[a, b] = [b, a + b + b];
	}
}

function* tri([a, b, c] = [0, 0, 1]) {
	while (true) {
		yield a;
		[a, b, c] = [b, c, a + b + c];
	}
}

function* tet([a, b, c, d] = [0, 0, 0, 1]) {
	while (true) {
		yield a;
		[a, b, c, d] = [b, c, d, a + b + c + d];
	}
}
*/
/*Given two strings a, and b, both representing an integer, add them and return it in the same string representation.

Bonus: can you implement the addition directly, instead of using eval or built-in big integers?
*/

function lazySolution(a, b) {
 let sum = eval(BigInt(a) + BigInt(b))
 return '' + sum
}


/**
///////////////Person with a not so lazy solution////////////
 INTUITION
While I wanted to implement BigInt for my own, it was a little onerous for a warm-up exercise. However, I'm glad I thought of padding binary numbers to the left. an additional 5 characters on the left is just pure speculation, but I could see one or more spill-overs ("carry the 1") when adding "manually" using a string. It really is intuition in this case; I just remembered having to figure out addition on paper in elementary school. If the lengths aren't the same, it requires a little more thinking than a mousepad, so you've got to account for it in code. I was gratified to see one of the test cases pull a "gotcha" if and when the string lengths don't match up or accommodate this case.

Takeaway: sometimes remembering how hard it was as a beginning student can help you think of how to tell a computer to do something.

ALGO
The cut and thrust is preparing both strings for a well-known class in Javascript that handles really large numbers.

Find the length both strings should be. This is the larger of the lengths, plus a little extra for the above reasons.
Force the length by padding to the left with 0's, using str.padStart(). It's really helpful. Just tell it how many characters it must meet, and how to fill it. It comes in handy if you're doing text formatting at all.
C = A + B. About as simple as it gets.
Return it as a human-legible string, with no trailing -n (common in BigInt). In JS, that's as simple as .toString().
COMPLEXITY
To be perfectly honest, I have no idea. 2ms seems pretty small, but text manipulation is lightning-fast in most languages. Without a basis of comparison in jsperf, it could be fine or it could be just a little slow.

NOTES

[x,y] is just a really lazy way to assign two variables in one line. It comes in handy if you're doing iterative stuff like Fibonacci. I don't consider it code golfing, just a way of avoiding two "let" statements when you're just pointing them to elements in an array.
Math.max() comes in handy when you don't want to bother with IF x is larger than y VERSUS IF y is larger than X. just take the larger value, and force both strings to be at least that long (or in this case, a bit longer than that).
The triplet comparison is another trick. if(len !== a.length || len !==b.length) works just fine, but using a === b === c means if any of the three values aren't equal, then the padding happens.
 */

function notAsLazySolution(a,b){
 let len = Math.max(b.length, a.length);
	if (!((len === a.length) === b.length)) {
		let p = [a.padStart(len + 5, "0"), b.padStart(len + 5, "0")];
		[a, b] = [p[0], p[1]];
	}
	let c = BigInt(a) + BigInt(b);
	return c.toString();
}
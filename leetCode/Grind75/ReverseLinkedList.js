/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
	let prev = null,
		cur = head,
		next;
	while (cur) {
		next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
	}
	return prev;
};

// Test sample 
// [1, 2, 3, 4, 5];
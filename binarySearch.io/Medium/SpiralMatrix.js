/**
 * 
Given a 2-d array matrix, return elements in spiral order starting from matrix[0][0].

Constraints

Number of rows in matrix is at most 200.
Number of columns in matrix is at most 200.
Example 1
Input

matrix = [
    [6, 9, 8],
    [1, 8, 0],
    [5, 1, 2],
    [8, 0, 3],
    [1, 6, 4],
    [8, 8, 10]
]
Output

[6, 9, 8, 0, 2, 3, 4, 10, 8, 8, 1, 8, 5, 1, 8, 1, 0, 6]
 */

class Solution {
	solve(matrix) {
		// boundaries of the 2d matrix
		let top = 0,
			bottom = matrix.length - 1,
			left = 0,
			right = matrix[0].length - 1;

		// controls the direction
		let direction = 0,
			result = [];

		while (top <= bottom && left <= right) {
			// left to right
			if (direction === 0) {
				for (let i = left; i <= right; i++) {
					result.push(matrix[top][i]);
				}
				top += 1;
				direction = 1;
			}
			// far right top to bottom
			else if (direction === 1) {
				for (let i = top; i <= bottom; i++) {
					result.push(matrix[i][right]);
				}
				right -= 1;
				direction = 2;
			}
			// bottom right to left
			else if (direction === 2) {
				for (let i = right; i >= left; i--) {
					result.push(matrix[bottom][i]);
				}
				direction = 3;
				bottom -= 1;
			}
			// bottom to top
			else if (direction === 3) {
				for (let i = bottom; i >= top; i--) {
					result.push(matrix[i][left]);
				}
				direction = 0;
				left += 1;
			}
		}
		return result;
	}
}

/*
Given an integer square (n by n) matrix, return its transpose. A transpose of a matrix switches the row and column indices. That is, for every r and c, matrix[r][c] = matrix[c][r].

For example, given matrix

[1, 2, 3]
[4, 5, 6]
[7, 8, 9]
it becomes

[1, 4, 7]
[2, 5, 8]
[3, 6, 9]

*/ 

function transposeMatrix(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		let temp;
		for (let j = i; j < matrix.length; j++) {
			temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}

	return matrix;
} 

/*
You are given an m x n binary matrix grid.

A move consists of choosing any row or column and toggling each value in that row or column (i.e., changing all 0's to 1's, and all 1's to 0's).

Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

Return the highest possible score after making any number of moves (including zero moves).

 

Example 1:

Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39

Example 2:

Input: grid = [[0]]
Output: 1

 

Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 20
    grid[i][j] is either 0 or 1.



*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    let m = grid.length;
  let n = grid[0].length; 
  
  let rst = 0;
  for (let j = n - 1, temp = 1; j >= 0; j--, temp *= 2) {
    let count = 0;
    for (let i = 0; i < m; i++) {
      let flip = grid[i][0] === 0; 
      if (flip) grid[i][j] ^= 1;
      count += grid[i][j];
    }
    count = Math.max(count, m - count);
    rst += temp * count;
  }
  
  return rst
}

function flip(row) {
  for (let i = 0; i < row.length; ++i) {
    row[i] ^= 1;
  }
}

function onesColCount(grid, j) {
  let ones = 0;
  for (let i = 0; i < grid.length; ++i) {
    ones += grid[i][j];
  }
  return ones;
}

function flipCol(grid, j) {
  for (let i = 0; i < grid.length; ++i) {
    grid[i][j] ^= 1;
  }
};
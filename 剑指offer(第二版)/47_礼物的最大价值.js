/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let row = grid[0].length, col = grid.length;
    let dp = new Array(col + 1).fill(0).map(() => new Array(row + 1).fill(0));
    for(let i = 1; i <= col; i++){
        for(let j = 1; j <= row; j++){
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        }
    }

    console.log(dp)
};
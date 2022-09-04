/**
 * @param {string[]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let m = matrix.length;
    if (m == 0) return 0;
    let n = matrix[0].length;
    let dp = new Array(m).fill(0).map(v => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                dp[i][j] = (j === 0 ? 0 : dp[i][j - 1]) + 1;
            }
        }
    }
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '0') {
                continue;
            }
            let width = dp[i][j];
            let area = width;
            for (let k = i - 1; k >= 0; k--) {
                width = Math.min(width, dp[k][j]);
                let height = i - k + 1;
                area = Math.max(area, height * width);
            }

            res = Math.max(area, res);
        }
    }

    return res;
};
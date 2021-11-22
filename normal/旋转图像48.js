/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let lL = matrix.length;
    let cL = lL;
    if (lL == 1) {
        return matrix;
    }
    let arr = new Array(lL * cL).fill(false);
    for (let j = 0; j < cL; j++) {
        for (let i = 0; i < lL; i++) {
            let c = cL - i - 1;
            let l = j;
            let t = matrix[l][c];
            let num = i == 0 ? j : (i * lL + j);
            if (arr[num]) {
                continue;
            }
            matrix[l][c] = matrix[i][j];
            arr[l == 0 ? c : (l * lL + c)] = true
            matrix[i][j] = t;
        }
    }
    return matrix;
};
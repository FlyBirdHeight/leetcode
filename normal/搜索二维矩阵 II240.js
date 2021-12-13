/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let rowL = matrix.length;
    let colL = matrix[0].length;
    function find(t, v, l, r, ft, row, col) {
        while (r > l) {
            const mid = l + ((r - l) >> 1) + 1;
            if ((ft == 'col' ? v[mid][col] : v[row][mid]) > t) r = mid - 1;
            else l = mid;
        }
        return l;
    }
    let fc_1 = find(target, matrix, 0, rowL - 1, 'col', 0, 0);
    if (matrix[fc_1][0] == target) {
        return true;
    }
    let fc_2 = find(target, matrix, 0, rowL - 1, 'col', 0, colL - 1);
    if (matrix[fc_2][colL - 1] == target) {
        return true;
    }
    for (let i = fc_2; i <= fc_1; i++) {
        let n = find(target, matrix, 0, colL - 1, 'row', i, 0);
        if (matrix[i][n] == target) {
            return true;
        }
    }

    return false
};
/**
 * @description 思路：
 * 首先先确定哪些行是需要搜索的，先排除比我们搜索的数大的初始行，
 * 然后再去对符合条件的行进行搜索。
 * 即先列后行（先列的话需要先搜索两列，第一列和最后一列，这样能够保证先排除最大最小的不符合的，达到加速的目的）
 */
console.log(searchMatrix([[-5]], -2));
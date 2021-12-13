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

/**
 * @description 实际上就是将这个矩阵看成是一个BST树，然后就是做一个BSt树的模拟。
 * 那么我们可以从根（右上角）开始搜索，如果当前的节点不等于目标值，可以按照树的搜索顺序进行：
    当前节点「大于」目标值，搜索当前节点的「左子树」，也就是当前矩阵位置的「左方格子」，即 c--
    当前节点「小于」目标值，搜索当前节点的「右子树」，也就是当前矩阵位置的「下方格子」，即 r++
 * @param {*} matrix 
 * @param {*} target 
 */
var searchMatrixByBst = function (matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let i = 0;
    let j = m - 1;
    while (i >= 0 && i < n && j >= 0 && j < m) {
        if (matrix[i][j] == target) {
            return true;
        }
        matrix[i][j] > target ? j-- : i++;
    }

    return false;
}

console.log(searchMatrixByBst([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5));
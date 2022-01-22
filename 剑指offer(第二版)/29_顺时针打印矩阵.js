/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let col = matrix.length;
    let row = matrix[0].length;
    let record = new Array(col);
    for (let i = 0; i < col; i++) {
        record[i] = new Array(row).fill(0)
    }
    let num = 0;
    let t = 0;
    let h = 0, s = 0;
    let res = [];
    while (num < col * row) {
        res.push(matrix[h][s])
        record[h][s] = 1;
        if (t == 0) {
            if (s == row - 1 || record[h][s + 1] == 1) {
                t = 1;
                h++;
            } else {
                s++;
            }
        } else if (t == 1) {
            if (h == col - 1 || record[h + 1][s] == 1) {
                t = 2;
                s--;
            } else {
                h++
            }
        } else if (t == 2) {
            if (s == 0 || record[h][s - 1] == 1) {
                t = 3;
                h--;
            } else {
                s--;
            }
        } else {
            if (record[h - 1][s] == 1) {
                t = 0;
                s++;
            } else {
                h--;
            }
        }

        num++;
    }

    return res;
};

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
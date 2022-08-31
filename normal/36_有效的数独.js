/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let n = board.length;
    let ans = true;
    let row = new Map(), column = new Map();
    for (let i = 0; i < n; i++) {
        row.set(i, []);
        column.set(i, []);
    }
    for (let i = 0; i < n; i++) {
        let rowD = row.get(i);
        for (let j = 0; j < n; j++) {
            let colD = row.get(j);
        }
    }
};


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let n = board.length;
    let row = new Map(), column = new Map(), mod = new Map();
    for (let i = 0; i < n; i++) {
        row.set(i, []);
        column.set(i, []);
        mod.set(i, []);
    }
    for (let i = 0; i < n; i++) {
        let rowD = row.get(i);
        let r = Math.floor(i / 3);
        for (let j = 0; j < n; j++) {
            let colD = column.get(j);
            let index = r * 3 + Math.floor(j / 3);
            let modD = mod.get(index);
            if(modD.includes(board[i][j]) && board[i][j] != '.') {
                return false;
            }
            if (colD.includes(board[i][j]) && board[i][j] != '.') {
                return false;
            }
            if (rowD.includes(board[i][j]) && board[i][j] != '.') {
                return false;
            }
            colD.push(board[i][j]);
            rowD.push(board[i][j]);
            modD.push(board[i][j]);
        }
    }

    return true;
};

isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]])


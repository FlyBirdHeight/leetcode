/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rl = board.length;
        let cl = board[0].length;
        if (rl == 1) {
            if (board[0].join('').indexOf(word) != -1) {
                return true;
            } else if (board[0].reverse().join('').indexOf(word) != -1) {
                return true;
            } else {
                return false;
            }
        }
        let arr = new Array(rl);
        for (let i = 0; i < rl; i++) {
            arr[i] = new Array(cl);
        }
        function find(i, j, length) {
            if (length == word.length) {
                return true;
            }
            if (i > (rl - 1) || j > (cl - 1) || i < 0 || j < 0) {
                return false;
            }
            if (arr[i][j] || board[i][j] != word[length]) {
                return false;
            }
            arr[i][j] = true;
    
            const canFindRest = find(i + 1, j, length + 1) || find(i - 1, j, length + 1) ||
                find(i, j + 1, length + 1) || find(i, j - 1, length + 1);
    
            if (canFindRest) {
                return true;
            }
            arr[i][j] = false;
    
            return false;
        }
    
        for (let i = 0; i < rl; ++i) {
            for (let j = 0; j < cl; ++j) {
                if (board[i][j] == word[0] && find(i, j, 0)) {
                    return true;
                }
            }
        }
    
        return false;
    };
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let rowL = grid.length;
    let colL = grid[0].length;
    let row = new Array(rowL).fill(0);
    let col = new Array(colL).fill(0);
    let res = 0;
    for (let i = 0; i < rowL; i++) {
        for(let j = 0; j < colL; j++){
            if(grid[i][j] > row[i]){
                row[i] = grid[i][j];
            }
            if(grid[i][j] > col[j]){
                col[j] = grid[i][j]
            }
        }
    }
    
    for(let i = 0; i < rowL; i++){
        for(let j = 0; j < colL; j++){
            res += (row[i] > col[j] ? col[j] : row[i]) - grid[i][j];
        }
    }

    return res;
};

console.log(maxIncreaseKeepingSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]))
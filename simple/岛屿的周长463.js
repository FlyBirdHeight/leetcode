const findA = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
]

/**
 * @param {character[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let cl = grid.length;
    let rl = grid[0].length;
    let f = new Array(cl);
    let res = 0;
    function dfs(c, r) {
        let res = 4;
        if (!inArea(c, r)) {
            return 0;
        }
        if (f[c][r]) {
            return grid[c][r] == 1 ? -1 : 0;
        }
        f[c][r] = true;
        if (grid[c][r] != 1) {
            return 0;
        }
        for (let i = 0; i < findA.length; i++) {
            res += dfs(c + findA[i][0], r + findA[i][1]);
        }
        return res - 1;
    }
    function inArea(c, r) {
        return c >= 0 && c < cl && r >= 0 && r < rl;
    }
    for (let i = 0; i < cl; i++) {
        f[i] = new Array(rl).fill(false)
    }
    for (let i = 0; i < cl; i++) {
        for (let j = 0; j < rl; j++) {
            if (grid[i][j] == 1) {
                let c = dfs(i, j) + 1;
                if(c != 0){
                    return c;
                }
            }
        }
    }

    return 0;
};

console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]))
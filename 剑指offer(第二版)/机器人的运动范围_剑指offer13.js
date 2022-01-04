/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    const path = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    let arr = new Array(m).fill(0);
    for (let i = 0; i < m; i++) {
        arr[i] = new Array(n).fill(0)
    }
    let res = 0;
    function getSum(r, c) {
        let rs = r.toString();
        let cs = c.toString();
        let rN = 0;
        rs.split("").map(v => {
            rN += Number(v);
        })
        cs.split("").map(v => {
            rN += Number(v)
        })
        return rN;
    }
    function dfs(rol, col) {
        let sum = getSum(rol, col);
        if(sum > k){
            arr[rol][col]++;
            return;
        }
        res++;
        arr[rol][col]++;
        for (let i = 0; i < path.length; i++) {
            let rc = rol + path[i][0];
            let cc = col + path[i][1];
            if (rc < 0 || rc > (m - 1) || cc < 0 || cc > (n - 1)) {
                continue;
            }
            if (arr[rc][cc] != 0) {
                continue;
            }
            dfs(rc, cc);
        }
        return;
    }
    dfs(0, 0);
    return res;
};

console.log(movingCount(2, 3, 1))
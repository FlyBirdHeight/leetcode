/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let bMap = new Array(n).fill(0);
    let map = new Array(n).fill(0);
    for (let i = 0; i < trust.length; i++) {
        bMap[trust[i][1] - 1]++;
        map[trust[i][0] - 1]++;
    }
    for (let i = 0; i < n; i++) {
        if (map[i] == 0 && bMap[i] == n - 1) {
            return i + 1;
        }
    }

    return -1;
};

console.log(findJudge(4, [[1, 2], [2, 3]]))
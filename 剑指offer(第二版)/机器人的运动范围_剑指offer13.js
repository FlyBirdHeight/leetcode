/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    let map = new Array(m).fill(0);
    for (let i = 0; i < m; i++) {
        map[i] = new Array(n).fill(0);
    }
    console.log(map);
};

console.log(movingCount(2, 3, 1))
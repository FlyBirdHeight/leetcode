/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    let arr = new Array(m - 1).fill(0);
    for(let i = 0; i < m; i++){
        arr[i] = new Array(n - 1).fill(0)
    }
    let res = 0;
    console.log(arr)

    return res;
};

console.log(movingCount(2, 3, 1))
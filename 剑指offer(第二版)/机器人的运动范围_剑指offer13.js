/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    function getSum(v) {
        let row = i.toString().split("");
        let col = j.toString().split("");
        let sum = 0;
        row.map(v => {
            sum += Number(v);
        })
        col.map(v => {
            sum += Number(v)
        })
        return sum;
    }
    let res = 0;

    return res;
};

console.log(movingCount(100, 100, 1))
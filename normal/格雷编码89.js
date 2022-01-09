/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    const ret = [0];
    for (let i = 1; i <= n; i++) {
        const m = ret.length;
        for (let j = m - 1; j >= 0; j--) {
            ret.push(ret[j] | (1 << (i - 1)));
        }
    }
    return ret;
};

console.log(grayCode(3))
console.log(1 | 1)
console.log(1 | 0)
console.log(0 | 0)
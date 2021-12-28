/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n < 2) {
        return 1;
    }
    let q = 0, p = 1, r = 1;
    for (let i = 2; i < n + 1; i++) {
        q = p;
        p = r;
        r = (p + q) % 1000000007
    }
    return r;
};
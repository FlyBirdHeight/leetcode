//TAG 快速幂
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let ns = n.toString();
    qPow = function (n, p) {
        let res = 1;
        for (let i = p; i != 0; i >>= 1) {
            if (i & 1 != 0) {
                res = res * n;
            }
            n = n * n;
        }
        return res;
    }
    let res = qPow(x, Number(ns[0]));
    for (let i = 1; i < ns.length; i++) {
        res = qPow(res, 10) * qPow(x, Number(ns[i]));
    }
    if (n < 0) {
        return 1 / res;
    }

    return res;
};

console.log(myPow(2.1, 3));
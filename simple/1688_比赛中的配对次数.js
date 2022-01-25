/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
    if (n == 1) {
        return 0;
    }
    let res = 0;
    while (n != 1) {
        if (n % 2 == 0) {
            n = n / 2;
            res = res + n;
        } else {
            res += (n - 1) / 2;
            n = ((n - 1) / 2) + 1;
        }
    }

    return res;
};
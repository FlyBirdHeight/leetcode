/**
 * @param {number} n
 * @return {number}
 */
 var countDigitOne = function (n) {
    let f = [0, 1, 20, 300, 4000, 50000, 600000, 7000000, 80000000, 900000000, 10000000000];
    let res = 0;
    let str = n + '';
    const len = str.length;
    let m = Math.pow(10, len - 1);
    let p = len - 1; //解析中的n
    for (let i = 0; i < len; i++) {
        res += str[i] * f[p];
        if (str[i] === '1' && i !== len - 1) {
            res += Number(str.slice(i + 1)) + 1;
        } else if (str[i] === '1' && i === len - 1) {
            res += 1;
        }
        if (str[i] > 1) res += m;
        m /= 10, p -= 1;
    }
    return res;
};
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    let index = 0;
    let ans = 0;
    while (index < s.length) {
        let str = index + 1 < s.length ? s[index] + s[index + 1] : s[index];
        if (map[str]) {
            ans += map[str];
            index += 2;
        } else {
            ans += map[s[index]];
            index += 1;
        }
    }
    return ans;
};
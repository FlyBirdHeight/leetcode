/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n == 1) { return "1" };
    let ans = "11";
    const find = function (str) {
        let ch = str[0];
        let count = 1;
        let res = "";
        for (let i = 1; i < str.length; i++) {
            if (ch !== str[i]) {
                res += String(count) + ch;
                ch = str[i];
                count = 1;
            } else {
                count++;
            }
        }
        if (count != 0) {
            res += String(count) + ch
        }
        return res;
    }
    for (let i = 3; i <= n; i++) {
        ans = find(ans);
    }

    return ans;
};

console.log(countAndSay(3))
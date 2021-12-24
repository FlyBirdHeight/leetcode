/**
 * @description 这里p数组的作用是用来记录字符串哈希的b的数值的，字符串哈希的构建式子为(s[i] * b^(l - i) (mod M))，所以这里的p就是存放不同层的b的幂指数之后的值
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function (s) {
    let P = 1313131, n = s.length;
    let h = new Array(n + 10).fill(0), p = new Array(n + 10).fill(0);
    p[0] = 1;
    for (let i = 0; i < n; i++) {
        p[i + 1] = p[i] * P;
        h[i + 1] = h[i] * P + s[i].charCodeAt();
    }
    let res = "";
    let l = 0, r = n;
    function check(s, len) {
        let n = s.length;
        let set = new Set();
        for (let i = 1; i + len - 1 <= n; i++) {
            let right = i + len - 1;
            let cur = h[right] - h[i - 1] * p[right - i + 1];
            if (set.has(cur)) {
                return s.substring(i - 1, right);
            }
            set.add(cur)
        }
        return ""
    }
    while (l < r) {
        let mid = (l + r + 1) >> 1;
        let t = check(s, mid);
        if (t.length != 0) {
            l = mid;
        } else {
            r = mid - 1;
        }
        res = t.length > res.length ? t : res;
    }

    return res;
};

console.log(longestDupSubstring('banana'))
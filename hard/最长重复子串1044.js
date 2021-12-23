/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function (s) {
    let P = 1313131, n = s.length;
    let h = new Array(n + 10).fill(0), p = new Array(n + 10).fill(0);
    p[0] = 1;
    for (let i = 1; i < n; i++) {
        p[i] = p[i - 1] * P;
        h[i] = h[i - 1] * P + String.fromCharCode(s[i]);
    }
    console.log(p)
    console.log(h)
    let res = "";
    // let l = 0, r = n;
    // function check(s, len) {
    //     let n = s.length;
    //     let set = new Set();
    //     for (let i = 1; i + len - 1 <= n; i++) {
    //         let j = i + len - 1;
    //         let cur = h[j] - h[i - 1] * p[j - i + 1];
    //         if(set.has(cur)){
    //             return s.substr(i - 1, j);
    //         }
    //         set.add(cur)
    //     }
    //     return ""
    // }
    // while (l < n) {
    //     let mid = (l + r + 1) >> 1;
    //     let t = check(s, mid);
    //     if (t.length != 0) {
    //         l = mid;
    //     } else {
    //         r = mid - 1;
    //     }
    //     res = t.length > res.length ? t : res;
    // }

    // return res;
};

console.log(longestDupSubstring('AAAAACCCCCAAAAACCCCCCAAAAA'))
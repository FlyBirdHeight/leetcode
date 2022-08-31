/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let h = haystack.length;
    let n = needle.length;
    if (n == 0 || (n == h && haystack == needle)) {
        return 0;
    }
    if (n > h || (n == h && haystack !== needle)) {
        return -1
    }
    let ans = -1;
    for (let i = 0; i < h; i++) {
        if (haystack[i] === needle[0]) {
            let flag = true;
            for (let j = 0; j < n; j++) {
                if (haystack[i + j] === needle[j]) {
                    continue
                } else {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return i;
            }
        }
    }
    return ans;
};
var aroundCenter = function (s, start, end) {
    let l = start, r = end;
    while (l >= 0 && r < s.length && s[r] == s[l]) {
        l--;
        r++;
    }
    return r - l - 1;
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let sl = s.length;
    if (sl == 0 || sl == 1) {
        return s;
    }
    let start = 0, end = 0, mLen = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = aroundCenter(s, i, i);
        let len2 = aroundCenter(s, i, i + 1);
        mLen = Math.max(Math.max(len1, len2), mLen);
        if (mLen > end - start + 1) {
            start = i - parseInt((mLen - 1) / 2);
            end = i + parseInt(mLen / 2);
        }
    }
    return s.substr(start, mLen);
};

console.log(longestPalindrome("babab"))
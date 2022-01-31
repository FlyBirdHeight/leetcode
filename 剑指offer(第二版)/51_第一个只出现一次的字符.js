/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        k = s.indexOf(s[i]);
        e = s.indexOf(s[i], k + 1);
        if (e == -1) return s[i];
    }
    return " ";
};
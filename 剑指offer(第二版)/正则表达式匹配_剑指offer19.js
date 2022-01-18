/**
 * TODO: 赖皮使用正则实现
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatchByRegExp = function (s, p) {
    let match = s.match(p);
    if (match == null) {
        return false;
    }
    return match[0].length === s.length;
};

console.log(isMatch("ab", ".*"))

/**
 * TODO: 使用dp来实现
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {

};
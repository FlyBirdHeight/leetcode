/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let data = s.split(' ');
    let resData = data.slice(0, k);
    return resData.join(' ');
};
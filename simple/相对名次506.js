/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let len = score.length;
    let res = new Array(len);
    let s = [];
    for (let i = 0; i < len; i++) {
        s.push([score[i], i]);
    }
    s.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < len; i++) {
        if (i == 0) {
            res[s[i][1]] = "Gold Medal"
        } else if (i == 1) {
            res[s[i][1]] = "Silver Medal"
        } else if (i == 2) {
            res[s[i][1]] = "Bronze Medal"
        } else {
            res[s[i][1]] = (i + 1).toString();
        }
    }
    return res;
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
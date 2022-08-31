/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.length === 1){
        return strs[0]
    }
    let ans = [];
    let n = strs.length;
    let index = 0;
    while (true) {
        let ch = strs[0][index];
        ans.push(ch);
        for (let i = 1; i < n; i++) {
            if (strs[i].length < index) {
                ans.pop();
                return ans.length === 0 ? "" : ans.join("")
            }
            if (strs[i][index] === ch) {
                continue;
            } else {
                ans.pop();
                return ans.length === 0 ? "" : ans.join("")
            }
        }
        index++;
    }
};

console.log(longestCommonPrefix(["a"]))
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];
    let len = candidates.length
    if (len == 1 && candidates[0] > target) {
        return res
    } else if (len == 1 && target % candidates[0] == 0) {
        let len2 = target / candidates[0]
        return [new Array(len2).fill(candidates[0], 0, len2)]
    } else if (len == 1) {
        return res
    }
    function dfs(tar, arr, level) {
        if (level == len) {
            return;
        }
        if (tar == 0) {
            res.push(arr);
            return;
        }
        dfs(tar, arr, level + 1);
        let num = tar - candidates[level]
        if (num >= 0) {
            dfs(num, [...arr, candidates[level]], level)
        }
    }
    dfs(target, [], 0);

    return res
};

console.log(combinationSum([1], 1))
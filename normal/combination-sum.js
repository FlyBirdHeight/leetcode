/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];
    let len = candidates.length;
    if (len == 1 && target < candidates[0]) {
        return [];
    } else if (len == 1 && target % candidates[0] == 0) {
        for (let i = 0; i < target / candidates[0]; ++i) {
            res.push(candidates[0])
        }
        return [res];
    }
    function dfs(target, arr, level) {
        if (level == candidates.length) {
            return;
        }
        if (target == 0) {
            res.push(arr)
            return;
        }
        dfs(target, arr, level + 1)
        if (target - candidates[level] >= 0) {
            dfs(target - candidates[level], [...arr, candidates[level]], level)
        }
    }
    dfs(target, [], 0, res);


    return res;
};

console.log(combinationSum([2, 3, 5], 8))
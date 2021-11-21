/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [], path = [];
    let len = nums.length;
    function dfs(arr, data, length) {
        if (path.length == nums.length) {
            res.push(Array.from(path));
            return;
        }
        for (let i = 0; i < length; ++i) {
            if (arr[i]) continue;
            path.push(data[i]);
            arr[i] = true;
            dfs(arr, data, length);
            path.pop();
            arr[i] = false
        }
    }
    dfs([], nums, len);

    return res;
};

console.log(permute([1, 2, 3]))
//TAG 回溯
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let len = nums.length;
    let res = [];
    function add(arr, data, start, eL) {
        if (start == eL) {
            res.push(data);
            return
        }
        res.push(arr[start].concat(data));
        add(arr, data, start + 1, eL);
    }
    for (let i = 0; i < len; i++) {
        if (res.length > 0) {
            add(res, [nums[i]], 0, res.length);
        }else {
            res.push([nums[i]])
        }
    }
    res.push([])

    return res;
};

console.log(subsets([1]))
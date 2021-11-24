/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let len = nums.length
    if (len < 2) {
        return len;
    }
    let map = new Set();
    let res = 1;
    for (let i = 0; i < len; i++) {
        map.add(nums[i]);
    }
    for (let value of map) {
        let l = 0;
        let pK = value - 1;
        if (map.has(pK)) {
            continue;
        }
        while (map.has(value)) {
            l++;
            value++;
        }
        res = Math.max(res, l)
    }
    return res;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
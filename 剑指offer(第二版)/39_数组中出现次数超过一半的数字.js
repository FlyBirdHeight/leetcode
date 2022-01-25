/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length < 2) {
        return nums[0]
    }
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let d = map.get(nums[i]) + 1;
            if (d > Math.floor(nums.length / 2)) {
                return nums[i]
            }
            map.set(nums[i], d);
        } else {
            map.set(nums[i], 1);
        }
    }
};
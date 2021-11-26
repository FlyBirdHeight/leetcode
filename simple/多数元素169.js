/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map();
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            let n = map.get(nums[i]) + 1;
            if (n > map.get(max)) {
                max = nums[i];
            }
            map.set(nums[i], n)
        }
    }
    return max;
};

majorityElement([3, 2, 3])
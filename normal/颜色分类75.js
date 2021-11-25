//TAG: 双指针
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let len = nums.length;
    if (len == 0) {
        return nums;
    }
    let L = 0, R = 1, target = R;
    while (R < len) {
        if (nums[L] > nums[target]) {
            [nums[L], nums[target]] = [nums[target], nums[L]];
            if (L == 0) {
                L = R;
                R++;
                target = R;
                continue
            }
            L--;
            target--;
        } else {
            L = R;
            R++;
            target = R;
        }
    }

    return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]))
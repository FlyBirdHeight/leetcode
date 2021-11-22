/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//输入: [0, 1, 2, 3, 0, 3, 12]
//输出: [1, 2, 3, 3, 12, 0, 0]
var moveZeroes = function (nums) {
    let L = 0, R = 0;
    let len = nums.length, i = 0;
    if (len < 2) {
        return nums;
    }
    while (R < len && L < len) {
        if (nums[L] == 0 && !R) {
            R = L + 1;
            if (R >= len) {
                break;
            }
        }
        if (R) {
            if (nums[R] != 0) {
                [nums[L], nums[R]] = [nums[R], nums[L]]
                L++;
                R++;
            } else {
                R++;
            }
        } else {
            L++
        }
    }

    return nums;
};

console.log(moveZeroes([0,1]));
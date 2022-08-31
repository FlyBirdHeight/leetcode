/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let pre = nums[0];
    let ans = 0;
    for (let i = 1; i < nums.length; i++) {
        if (pre !== nums[i]) {
            pre = nums[i];
            ans++;
            nums[ans] = nums[i];
        }
    }

    return ans + 1;
};
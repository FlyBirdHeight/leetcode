/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let len = nums.length;
    if (len == 1) {
        return nums[0] == target ? 0 : -1;
    }
    let l = 0, r = len - 1;
    while (r > l) {
        let mid = (l + r + 1) >> 1;
        if (target == nums[mid]) {
            return mid;
        }
        if (nums[0] <= nums[mid]) {
            if (target >= nums[0] && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[len - 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    if(nums[l] != target){
        return -1;
    }
    return l;
};
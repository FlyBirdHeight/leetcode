// TAG 二分查找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let len = nums.length;
    if (len == 0) {
        return [-1, -1]
    }
    if(len == 1 && nums[0] == target){
        return [0, 0]
    }
    function mid(l, r, lower) {
        let ans = null;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            console.log(l, r, mid)
            if (nums[mid] > target || (nums[mid] >= target && lower)) {
                r = mid - 1;
                ans = mid;
            } else {
                l = mid + 1;
            }
        }
        console.log(ans)
        return ans;
    }

    let left = mid(0, len - 1, true);
    let right = mid(0, len - 1, false) - 1;
    console.log(left, right)
    if(left <= right && right < len && nums[left] == target && nums[right] == target){
        return [left, right]
    }
    return [-1, -1]
};
console.log(searchRange([2, 2], 2));
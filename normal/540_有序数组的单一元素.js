var singleNonDuplicate = function(nums) {
    let low = 0, high = nums.length - 1;
    while (low < high) {
        let mid = Math.floor((high - low) / 2) + low;
        mid -= mid & 1;
        if (nums[mid] === nums[mid + 1]) {
            low = mid + 2;
        } else {
            high = mid;
        }
    }
    return nums[low];
};
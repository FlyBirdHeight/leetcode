//TAG 双指针
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let len = nums.length;
    function clamp(s, m) {
        let t = nums[s];
        nums[s] = nums[m];
        nums[m] = t;
    }
    if (len == 1) {
        return nums;
    } else if (len == 2) {
        return nums.sort((a, b) => b - a)
    }
    let s = null, m = null;
    for (let i = len - 1; i >= 0; i--) {
        if (nums[i] > nums[i - 1]) {
            s = i - 1;
            m = i;
            break;
        }
    }
    if (!m) {
        return nums.sort((a, b) => a - b)
    }
    if (m == len - 1) {
        clamp(s, m)
        return nums;
    }
    let f = false;
    let las = null;
    for (let i = m + 1; i < len; ++i) {
        if (nums[i] > nums[s]) {
            las = i;
        }
    }
    if (las == null) {
        clamp(s, m);
    }else{
        clamp(s, las)
    }
    let l = s + 1;
    let r = len - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }

    return nums;
};

console.log(nextPermutation([2,2,7,5,4,3,2,2,1]))
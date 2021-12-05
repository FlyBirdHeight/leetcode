/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let s = [];
    let sum = 0;
    //先把小于等于0的全部取出来
    for (let i = 0; i < len; i++) {
        if (nums[i] <= 0) {
            s.push(nums[i]);
            nums[i] = 0;
        } else {
            continue;
        }
    }
    nums = nums.filter(value => value > 0)
    if (s.length > 0) {
        if (k >= s.length) {
            for (let i = 0; i < s.length; i++) {
                s[i] = -1 * s[i]
                sum += s[i];
            }
            let ns = k - s.length;
            s[s.length - 1] > nums[0] ? (nums[0] = nums[0] * Math.pow(-1, ns)) : (sum = sum - s[s.length - 1] + s[s.length - 1] * Math.pow(-1, ns));
        } else {
            for (let i = 0; i < s.length; i++) {
                if (i < k) {
                    s[i] = -1 * s[i]
                    sum += s[i];
                } else {
                    sum += s[i]
                }
            }
        }
    } else {
        nums[0] = nums[0] * Math.pow(-1, k);
    }

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    return sum;
};


console.log(largestSumAfterKNegations([4, 2, 3], 1))
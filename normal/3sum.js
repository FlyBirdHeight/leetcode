//三数之和

//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
//答案中不可以包含重复的三元组。

//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let len = nums.length;
    let rd = [];
    nums = nums.sort((a, b) => {
        return a - b;
    });
    if (nums.length < 3 || nums[0] >= 0) {
        return [];
    }
    for (let i = 0, j = 0; i < len; i++) {
        let L = i + 1, R = len - 1;
        if (nums[i] > 0) {
            break;
        }
        if (nums[i] == nums[i - 1]) {
            continue;
        }
        while (L < R) {
            if (nums[i] + nums[L] + nums[R] == 0) {
                rd.push([nums[i], nums[L], nums[R]])
                while (L < R && nums[L] == nums[L + 1]) {
                    L++;
                }
                while (R > L && nums[R] == nums[R - 1]) {
                    R--;
                }
                L++;
                R--;
            }
            if (nums[i] + nums[L] + nums[R] < 0) L++;
            if (nums[i] + nums[L] + nums[R] > 0) R--;

        }
    }
    return rd;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))
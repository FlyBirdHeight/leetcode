/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
    let len = nums.length;
    let save = new Array(1000).fill(0);
    let res = 0;
    for (let b = len - 3; b > 0; b--) {
        for (let d = b + 2; d < len; d++) {
            save[nums[d] - nums[b + 1] + 200]++;
        }
        for (let a = 0; a < b; a++) {
            res += save[nums[a] + nums[b] + 200];
        }
    }

    return res;
};

console.log(countQuadruplets([1, 1, 1, 3, 5]));
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let len = nums.length;
    if(len < 2) return 0;
    let res = 0;
    let map = new Array(101).fill(0);
    for(let i = 0; i < len; i++){
        map[nums[i]]++;
    }
    for(let i = 1; i < 101; i++){
        if(i + k > 100) continue;
        res += map[i] * map[i + k];
    }

    return res;
};
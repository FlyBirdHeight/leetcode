//TAG 位运算
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    if(nums.length != 0){
        res = nums[0];
        for(let i = 1; i < nums.length; ++i){
            res = res ^ nums[i];
        }
    }

    return res;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let a = [], b = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            b.push(nums[i])
        }else {
            a.push(nums[i])
        }
    }

    return a.concat(b);
};
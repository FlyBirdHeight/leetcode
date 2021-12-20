//原地hash
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let len = nums.length;
    for (let value of nums) {
        const x = (value - 1) % len;
        nums[x] += len;
    }
    const res = [];
    for (let [i, num] of nums.entries()) {
        if (num <= len) {
            res.push(i + 1)
        }
    }

    return res;
};

var findDisappearedNumbers02 = function (nums) {
    let len = nums.length;
    for(let i = 0; i < len; i++){
        if(nums[i] != i + 1){
            if(nums[i] != nums[nums[i] - 1]){
                let n = nums[i] - 1;
                [nums[i], nums[n]] = [nums[n], nums[i]];
                i--
            }
        }
    }
    let res = [];
    for(let i = 0; i < len; i++){
        if(nums[i] != i + 1) res.push(i + 1);
    }
    return res;
}

console.log(findDisappearedNumbers02([4, 3, 2, 7, 8, 2, 3, 1]))
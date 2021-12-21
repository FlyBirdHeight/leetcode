/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let len = nums.length;
    let res = [];
    let l = new Array(len).fill(0), r = new Array(len).fill(0);
    l[0] = 1;
    r[len - 1] = 1;
    for(let i = 1; i < len; i++){
        l[i] = l[i - 1] * nums[i - 1];
    }
    for(let i = len - 2; i >= 0; i--){
        r[i] = r[i + 1] * nums[i + 1];
    }
    for(let i = 0; i < len; i++){
        res.push(r[i] * l[i]);
    }

    return res;
};

var productExceptSelf01 = function (nums) {
    let len = nums.length;
    let res = new Array(len).fill(0);
    res[0] = 1;
    for(let i = 1; i < len; i++){
        res[i] = res[i - 1] * nums[i - 1]
    }
    let R = 1;
    for(let i = len - 1; i >= 0; i--){
        res[i] = res[i + 1] * R;
        R = R * nums[i]
    }

    return res;
}
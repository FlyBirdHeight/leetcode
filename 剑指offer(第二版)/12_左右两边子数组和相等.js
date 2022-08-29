var pivotIndex = function (nums) {
    let len = nums.length;
    let preSum = new Array(len + 1).fill(0);
    for (let i = 0; i < len; i++) {
        preSum[i + 1] = preSum[i] + nums[i];
    }
    let res = -1;
    for (let i = 0; i < preSum.length; i++) {
        if (preSum[i] === preSum[len] - preSum[i + 1]) {
            res = i;
            break;
        }
    }
    return res;
};

pivotIndex([1, 7, 3, 6, 5, 6])
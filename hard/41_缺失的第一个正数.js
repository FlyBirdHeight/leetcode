/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const N = nums.length;
    for (let i = 0; i < N; i++) {
        if (nums[i] <= 0) nums[i] = N + 1;
    }
    for (let i = 0; i < N; i++) {
        let x = Math.abs(nums[i]);
        if (x >= 1 && x <= N) {
            nums[x - 1] = nums[x - 1] < 0 ? nums[x - 1] : -nums[x - 1];
        }
    }

    for (let i = 0; i < N; i++) {
        if (nums[i] >= 0) return i + 1;
    }

    return N + 1;
};

/**
 * NOTE: 本题思路
 * 1. 首先求得数组的长度，那么我们就可以知道在这个数组中，如果每一个数都符合其在数组中位置，那么返回的就是N+1，如果不是就需要特殊处理
 * 2. 因为存在负数和0的情况，所以我们需要先处理这些内容，让这些内容全部变成N+1
 * 3. 然后就去判断数组上的每一个数，看看是不是在[1, N]之间的，如果是在[1, N]之间的，就对其对应位置的下标进行标识， 标识为负数方便后面进行判断，如果不是在[1, N]之间的，就不需要去处理，保持原位就可以。
 * 4. 进行完标记之后，再次遍历原数组，找到第一位大于等于0的位置，然后返回下标+1即可，如果没有的话，最后返回N+1就可以了
 */
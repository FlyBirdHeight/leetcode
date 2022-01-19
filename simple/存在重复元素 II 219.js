/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let len = nums.length;
    if (k == 0) {
        return false;
    }
    let map = new Map();
    if (len < k) {
        for (let i = 0; i < len; i++) {
            if (map.has(nums[i])) {
                return true;
            }
            map.set(nums[i], i);
        }
    } else {
        for (let i = 0; i < len; i++) {
            if (map.has(nums[i])) {
                let d = map.get(nums[i]);
                for (let value of d) {
                    if (i - value <= k) {
                        return true;
                    }
                }
                d.push(i)
                map.set(nums[i], d);
            } else {
                map.set(nums[i], [i])
            }
        }
    }
    return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 1))

//滑动窗口
var containsNearbyDuplicate01 = function (nums, k) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {//找到了重复的元素
            return true;
        }
        set.add(nums[i]);//没找到就加入set中 扩大窗口
        if (set.size > k) {//滑动窗口超过了指定大小，缩小窗口
            set.delete(nums[i - k]);
        }
    }
    return false;
};
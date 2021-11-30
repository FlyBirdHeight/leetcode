//TAG 双指针问题 很重要的一道题目，究竟什么是快慢指针，数组是否可以作为一个链表等等。
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let len = nums.length;
    if (len == 1) {
        return nums[0]
    }
    let slow = 0, fast = 0;
    console.log(nums);
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        if (slow == fast) {
            break;
        }
    }
    let find = 0;
    while (true) {
        find = nums[find];
        slow = nums[slow];
        if (slow == find) {
            break
        }
    }
    return slow;
};

console.log(findDuplicate([1, 3, 4, 2, 2]))
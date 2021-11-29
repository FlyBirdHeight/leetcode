/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head) {
        return false;
    }
    if (!head.next) {
        return true;
    }
    let stack = [];
    while (head !== null) {
        stack.push(head.val);
        head = head.next;
    }
    for (let i = 0, j = stack.length - 1; i < stack.length / 2; i++ , j--) {
        if (stack[i] != stack[j]) {
            return false;
        }
    }

    return true;
};
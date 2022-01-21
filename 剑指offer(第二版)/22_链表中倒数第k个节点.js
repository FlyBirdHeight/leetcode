/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let f = head, s = head;
    for (let i = 0; i < k; i++) {
        if (f.next == null) {
            return s;
        }
        f = f.next;
    }
    while (f != null && s != null) {
        f = f.next;
        s = s.next;
    }

    return s;
};
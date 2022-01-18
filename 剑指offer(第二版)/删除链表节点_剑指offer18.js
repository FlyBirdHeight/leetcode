/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (head == null) {
        return;
    }
    let node = head.next;
    let pre = head;
    if(pre.val == val){
        return pre.next;
    }
    while (node != null) {
        if(node.val === val){
            pre.next = node.next;
            break;
        }else{
            pre = node;
            node = node.next;
        }
    }

    return head;
};
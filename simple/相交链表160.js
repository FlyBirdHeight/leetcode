//TAG 双指针可以解决本题目，也可以使用hash
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let node = headA;
    let map = new Set()
    while(node !== null){
        map.add(node);
        node = node.next;
    }
    let n = headB;
    while(n !== null){
        if(map.has(n)){
            return n;
        }else{
            n = n.next;
        }
    }

    return null;
};
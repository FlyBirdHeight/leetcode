/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head){
        return null;
    }
    let list = [];
    while(head !== null){
        list.push(head);
        head = head.next;
    }
    let node = list[list.length - 1];
    let nodeH = node;
    for(let i = list.length - 2; i >= 0;i--){
        list[i].next = null;
        node.next = list[i];
        node = node.next;
    }
    
    return nodeH;
};
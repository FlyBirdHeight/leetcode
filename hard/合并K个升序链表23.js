/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length < 1) {
        return null;
    }
    function merge(node1, node2) {
        let h = new ListNode();
        let n = h;
        while (node1 != null && node2 != null) {
            if (node1.val <= node2.val) {
                n.next = new ListNode(node1.val);
                node1 = node1.next;
            } else {
                n.next = new ListNode(node2.val);
                node2 = node2.next;
            }
            n = n.next;
        }
        n.next = node1 == null ? node2 : node1;

        return h.next;
    }
    const mergeLists = (lists, start, end) => {
        if (start + 1 == end) {
            return lists[start];
        }
        let mid = (start + end) >> 1;
        let head1 = mergeLists(lists, start, mid);
        let head2 = mergeLists(lists, mid, end);
        return merge(head1, head2);
    };

    return mergeLists(lists, 0, lists.length);
};
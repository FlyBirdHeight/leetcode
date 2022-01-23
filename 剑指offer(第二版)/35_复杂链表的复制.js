/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) {
        return head;
    }
    let map = new Map(), i = 0;
    let node = head;
    let resNode = new Node();
    let rN = resNode;
    while (node != null) {
        rN.val = node.val;
        node.index = i;
        map.set(i, rN);
        if (node.next != null) {
            rN.next = new Node();
            rN.random = null;
            rN = rN.next;
        }
        i = i + 1;
        node = node.next;
    }
    let rNN = resNode;

    while (head != null) {
        if (head.random == null) {
            rNN.random = null;
        } else {
            rNN.random = map.get(head.random.index);
        }
        rNN = rNN.next;
        head = head.next;
    }

    return resNode;
};
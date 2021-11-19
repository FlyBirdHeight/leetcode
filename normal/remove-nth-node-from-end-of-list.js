function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let f = head;
    let s = head;
    if (!head.next) {
        return null;
    }
    let node = head;
    for (let i = 0; i < n; ++i) {
        node = node.next;
    }
    f = node;
    if (!f) {
        return head.next;
    }
    while (f.next) {
        f = f.next;
        s = s.next;
    }
    s.next = s.next.next;

    return head;
};

const l1 = () => {
    let l1 = [1, 2];
    let headNode = new ListNode();
    let node = headNode;
    for (let i = 0; i < l1.length; i++) {
        node.val = l1[i];
        if (i == l1.length - 1) {
            node.next = null;
        } else {
            node.next = new ListNode;
            node = node.next;
        }
    }

    return headNode;
}

let n = 2;


var removeNthFromEnd2 = function (head, n) {
    let len = 0;
    let node = head;
    while (node) {
        node = node.next;
        len++;
    }
    let t = head;
    for (let i = 1; i < len - n; ++i) {
        t = t.next;
    }
    t.next = t.next.next;

    return head;
};
const l2 = () => {
    let l1 = [1, 2, 3, 4, 5];
    let headNode = new ListNode();
    let node = headNode;
    for (let i = 0; i < l1.length; i++) {
        node.val = l1[i];
        if (i == l1.length - 1) {
            node.next = null;
        } else {
            node.next = new ListNode;
            node = node.next;
        }
    }

    return headNode;
}

let m = 2;
console.log(removeNthFromEnd2(l2(), m));
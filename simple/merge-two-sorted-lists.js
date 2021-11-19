function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) {
        return null;
    }
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    let lN = null, head = null, sN = null;
    if (l1.val > l2.val) {
        head = l2;
        sN = l1;
    } else {
        head = l1;
        sN = l2;
    }
    lN = head.next;
    let t = head;
    t.next = null;
    if (!lN) {
        t.next = sN;
        return head;
    }
    while (lN) {
        if (!lN) {
            console.log(sN)
            t.next = sN;
            break;
        } else if (!sN) {
            t.next = lN;
            break;
        }
        if (lN.val < sN.val) {
            t.next = new ListNode(lN.val);
            t = t.next;
            lN = lN.next;
        } else {
            t.next = new ListNode(sN.val);
            t = t.next;
            sN = sN.next;
        }
    }
    if (sN) {
        t.next = sN;
    }
    if (lN) {
        t.next = lN;
    }

    return head;
};

const l1 = () => {
    let l1 = [5];
    if (l1.length == 0) {
        return null;
    }
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

const l2 = () => {
    let l2 = [1, 2, 4];
    if (l2.length == 0) {
        return null;
    }
    let headNode = new ListNode();
    let node = headNode;
    for (let i = 0; i < l2.length; i++) {
        node.val = l2[i];
        if (i == l2.length - 1) {
            node.next = null;
        } else {
            node.next = new ListNode;
            node = node.next;
        }
    }

    return headNode;
}


let list1 = l1();
let list2 = l2();

console.log(mergeTwoLists(list1, list2));
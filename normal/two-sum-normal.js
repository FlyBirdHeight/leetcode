/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l1Node = l1;
    let l2Node = l2;
    let a = 0;
    let b = 0;
    let addSum = 0;
    let resNode = new ListNode();
    let node = resNode;
    while (l1Node || l2Node) {
        a = l1Node ? l1Node.val : 0;
        b = l2Node ? l2Node.val : 0;
        let sum = a + b + addSum;
        addSum = sum >= 10 ? parseInt(sum / 10) : 0;
        node.val = sum % 10;
        l1Node = l1Node ? l1Node.next : null;
        l2Node = l2Node ? l2Node.next : null;
        if (!l1Node && !l2Node) {
            if (addSum != 0) {
                node.next = new ListNode;
                node = node.next;
                node.val = addSum;
                node.next = null;
            } else {
                node.next = null;
            }

        } else {
            node.next = new ListNode;
            node = node.next;
        }
    }


    return resNode;

};

const l1 = () => {
    let l1 = [9, 9, 9, 9, 9, 9, 9];
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
    let l2 = [9, 9, 9, 9];
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

let list = addTwoNumbers(list1, list2);
while (list) {
    console.log(list.val);
    list = list.next;
}
//TAG hashmap 或者快慢指针
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//HashMap的解法
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    node = head;
    let i = 0, map = new Map();
    while (node !== null) {
        if(map.has(node)){
            return node
        }
        map.set(node, i++);
        node = node.next;
    }

    return null;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description slow = nb + a, fast = a + 2nb, slow = step, fast = 2*step, step = nb,当slow == fast时, 
 * slow走过了nb圈，那么slow总的走过数量为a+nb,a是未进入环的步数，如果说要让slow再次走到入口，
 * 那么需要走过a步数，所以我们可以在创建一个指针，从链表头开始走就可以了
 */
var detectCycleSlowFast = function (head) {
    if (head === null) {
        return null;
    }
    let slow = head, fast = head;
    while (fast !== null) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (fast === slow) {
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null;
};
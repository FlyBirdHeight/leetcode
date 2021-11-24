/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    let current = null;
    let count = 0;
    let max = -Infinity;
    let res = [];
    function bst(node) {
        if (!node) {
            return;
        }
        bst(node.left);
        if (current == null) {
            current = node.val;
            count++;
        } else if (current == node.val) {
            count++;
        } else {
            if (count > max) {
                res = [];
                res.push(current);
            } else if (count == max) {
                res.push(current)
            }
            current = node.val;
            max = Math.max(count, max);
            count = 1;
        }
        bst(node.right);
    }
    bst(root);
    if (res.indexOf(current) == -1) {
        if (count > max) {
            res = [];
            res.push(current);
        } else if (count == max) {
            res.push(current)
        }
    }
    return res;
};
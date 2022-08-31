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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
    let parent = null;
    let cur = root;
    while (cur) {
        if (val > cur.val) {
            if (!parent) {
                return new TreeNode(val, cur);
            } else {
                parent.right = new TreeNode(val, cur);
                return root;
            }
        } else {
            parent = cur;
            cur = cur.right;
        }
    }

    return cur;
};

insertIntoMaxTree([4, 1, 3, null, null, 2], 5);
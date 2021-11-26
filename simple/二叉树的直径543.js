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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let depth = -Infinity;
    if (root == null) {
        return 0;
    }
    if (root.left == null && root.right == null) {
        return 0;
    }
    function dfs(root, level) {
        let left = 0;
        let right = 0;
        if (root.left == null && root.right == null) {
            return level;
        }
        if (root.left) {
            left = dfs(root.left, level + 1);
        }
        if (root.right) {
            right = dfs(root.right, level + 1)
        }
        depth = Math.max(depth, left + right - 2 * level);

        return Math.max(left, right)
    }
    let d1 = (root.left ? dfs(root.left, 1) : 0) + (root.right ? dfs(root.right, 1) : 0);
    let res = Math.max(depth, d1);

    return res;
};
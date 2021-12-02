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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    function dfs(root) {
        if (root == null) {
            return;
        }
        let node = root.left;
        root.left = root.right;
        root.right = node;
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root)

    return root;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (p == root || q == root) {
        return root;
    }
    let pStack = [], qStack = [];
    let qF = false, pF = false;
    function dfs(root) {
        if (qF && pF) {
            return;
        }
        if (root == null) {
            return;
        }
        if (root.left == p) {
            pF = true;
            pStack.push(root);
        } else if (root.right == p) {
            pF = true;
            pStack.push(root);
        }
        if (root.left == q) {
            qStack.push(root);
            qF = true;
        } else if (root.right == q) {
            qStack.push(root);
            qF = true;
        }
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
};
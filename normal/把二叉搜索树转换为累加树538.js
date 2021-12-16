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
var convertBST = function (root) {
    if (root == null) {
        return root;
    }
    dfs = function (node, val = 0) {
        if (node == null || node.left == null && node.right == null) {
            if (node != null) {
                node.val = node.val + val;
            }
            return node == null ? val : node.val;
        }
        node.val += dfs(node.right, val);
        let resL = dfs(node.left, node.val);

        return resL
    }
    let res = dfs(root.right, 0);
    root.val += res;
    dfs(root.left, root.val);
    return root;
};
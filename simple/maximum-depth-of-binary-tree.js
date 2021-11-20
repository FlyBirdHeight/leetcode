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
var maxDepth = function (root) {
    let head = root;
    let depth = 1;
    if(!root){
        return 0;
    }
    function dfs(node, d) {
        if (node) {
            depth = Math.max(depth, d);
            dfs(node.left, d + 1);
            dfs(node.right, d + 1);
        } 
        return depth;
    }
    dfs(head, depth);

    return depth
};
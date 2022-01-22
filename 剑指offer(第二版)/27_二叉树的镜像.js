/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    let node = root;
    let reverse = (a) => {
        if (a == null) {
            return;
        }
        let n = a.right;
        a.right = a.left;
        a.left = n;
        reverse(a.left);
        reverse(a.right);
        return;
    }
    reverse(node);
    return root;
};
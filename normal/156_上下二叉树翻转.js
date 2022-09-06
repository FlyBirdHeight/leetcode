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
var upsideDownBinaryTree = function (root) {
    if (!root) {
        return null;
    }
    if (!root.left && !root.right) {
        return root;
    }
    let res = null;
    const dfs = (node) => {
        if (!node) {
            return null;
        }
        let newN = new TreeNode(node.val);
        let head = node.left && dfs(node.left);
        if (!head) {
            if (res == null) {
                res = newN;
            }
            return newN;
        }
        let nL = node.right && dfs(node.right);
        head.right = newN;
        head.left = nL;
        if (res == null) {
            res = head;
        }
        return newN;
    }
    let end = dfs(root.left);
    end.left = dfs(root.right);
    end.right = new TreeNode(root.val);

    return res;
};
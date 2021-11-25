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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if(!root){
        return []
    }
    let res = [];
    let f = [];
    f.push(root);
    let node;
    while (f.length) {
        let level = [];
        let nodeL = [];
        for (let i = 0; i < f.length; i++) {
            node = f[i];
            level.push(node.val)
            if (node.left) {
                nodeL.push(node.left)
            }
            if (node.right) {
                nodeL.push(node.right)
            }
            
        }
        f = nodeL;
        res.push(level)
    }

    return res;
};
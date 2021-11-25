/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let len = preorder.length;
    if(len == 1){
        return new TreeNode(preorder[0])
    }
    let head = new TreeNode(preorder[0]);
    let left = [];
    let right = [];
    let map = new Map();
    for (let i = 0; i < len; i++) {
        if (inorder[i] == head.val) {
            right = inorder.slice(i + 1);
            break;
        } else {
            left.push(inorder[i]);
        }
    }
    for(let i = 0; i < len; i++){
        map.set(preorder[i], i);
    }
    if(left.length == 0){
        head.left == null;
    }
    if(right.length == 0){
        head.right == null;
    }
    console.log(left)
    console.log(right)
};
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (root == null) {
        return 0;
    }
    let map = new Map();
    map.set(0, 1);
    let res = 0;
    function dfs(data, curr) {
        if (root == null) {
            return 0;
        }
        let res = 0;
        curr += root.val;
        map.has(curr - targetSum) ? res = map.get(curr - targetSum) : res = 0;
        map.set(curr, map.has(curr) ? (map.get(curr) + 1) : 1)
        res += dfs(root.left, curr);
        res += dfs(root.right, curr);
        map.set(curr, map.has(curr) ? (map.get(curr) - 1) : -1)

        return res;
    }
    res = dfs(root, 0);
    console.log(res);
};
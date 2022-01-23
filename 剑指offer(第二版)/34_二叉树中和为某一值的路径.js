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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
    if (root === null) return [];
    let res = [];
    let dfs = (root, sum, path) => {
        //一定是叶子结点才放进去
        if (sum - root.val == 0 && !root.left && !root.right) {
            res.push(path);
        }
        path.push(root.val);
        if (root.left) {
            dfs(root.left, sum - root.val, path.slice());
        }
        if (root.right) {
            dfs(root.right, sum - root.val, path.slice())
        }
    };
    dfs(root, target, []);
    return res;
};

console.log(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 22));
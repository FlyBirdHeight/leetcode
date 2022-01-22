/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    let res = [];
    res.push([root.val])
    let dfs = (queue) => {
        if (queue.length == 0) {
            return;
        }
        let req = [], d = [];
        for (let i = 0; i < queue.length; i++) {
            if (queue[i].left != null) {
                req.push(queue[i].left);
                d.push(queue[i].left.val)
            }
            if (queue[i].right != null) {
                req.push(queue[i].right)
                d.push(queue[i].right.val)
            }
        }
        d.length != 0 && res.push(d.reverse());
        dfs(req);
        return;
    }
    dfs([root])

    return res;
};
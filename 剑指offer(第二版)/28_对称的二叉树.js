/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if(!root){
        return false
    }
    let node = root;
    let dfs = (queue) => {
        if (queue.length == 0) {
            return true;
        }
        let req = [], judge = [];
        for (let i = 0; i < queue.length; i++) {
            if (queue[i].left != null) {
                req.push(queue[i].left)
                judge.push(queue[i].left.val)
            } else {
                judge.push(null)
            }
            if (queue[i].right != null) {
                req.push(queue[i].right)
                judge.push(queue[i].right.val)
            } else {
                judge.push(null)
            }
        }
        for (let i = 0; i < Math.floor(judge.length / 2); i++) {
            if (judge[i] != judge[judge.length - 1 - i]) {
                return false;
            }
        }

        return dfs(req);
    }

    return dfs([node]);
};

//简单写法
var isSymmetricS = function (root) {
    if(!root){
        return true;
    }
    let check = (a, b) => {
        if(!a && !b) return true;
        if(!a || !b) return false;

        return a.val === b.val && check(a.left, b.right) && check(a.right, b.left);
    }

    return check(root.left, root.right)
}
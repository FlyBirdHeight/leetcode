/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 本方法就是查看节点是否都找到了，如果找到了就不需要再找了直接返回
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let ans;
    const dfs = (root, p, q) => {
        if (root === null) return false;
        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);
        if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
            ans = root;
        }
        return lson || rson || (root.val === p.val || root.val === q.val);
    }
    dfs(root, p, q);
    return ans;
};
//超内存了，但是其实也是可以的，就是都记录他们的父节点，然后进行比较。
var lowestCommonAncestor = function (root, p, q) {
    if (p == root || q == root) {
        return root;
    }
    let pStack = [], qStack = [];
    let qF = false, pF = false;
    function dfs(root, pre) {
        if (pF && qF) {
            return;
        }
        let nextL = [].concat(pre);
        let nextR = [].concat(pre);
        if (root == null) {
            return;
        }
        if (root == p && !pF) {
            pStack = pre;
            pF == true;
        }
        if (root == q && !qF) {
            qStack = pre;
            qF = true;
        }
        nextR.push(root);
        nextL.push(root);
        dfs(root.left, nextL);
        dfs(root.right, nextR);
    }
    dfs(root, []);
    let parent = null;
    while (qStack.length != 0 && pStack.length != 0) {
        if (qStack[0] == pStack[0]) {
            parent = qStack[0];
        }
        qStack.splice(0, 1);
        pStack.splice(0, 1);
    }
    if (qStack[0] == p) {
        return p;
    }
    if (pStack[0] == q) {
        return q;
    }

    return parent;
};
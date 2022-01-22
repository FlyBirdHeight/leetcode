/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var isSubStructure = function (A, B) {
    if (A == null || B == null) {
        return false;
    }
    return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

var isSameTree = (a, b) => {
    if (b == null) {
        return true;
    }
    if (a == null) {
        return false;
    }

    return a.val == b.val && isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}
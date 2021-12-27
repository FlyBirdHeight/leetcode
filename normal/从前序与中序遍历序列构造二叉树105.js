/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let len = preorder.length;
    if (len == 1) {
        return new TreeNode(preorder[0])
    }
    let map = new Map();
    for (let i = 0; i < len; i++) {
        map.set(inorder[i], i);
    }
    function handle(pS, pE, iS, iE) {
        if (pS === pE) {
            return null;
        }
        const rootVal = preorder[pS];
        const root = new TreeNode(rootVal);

        const irI = map.get(rootVal);
        const lS = irI - iS;

        root.left = handle(pS + 1, pS + lS + 1, iS, irI);
        root.right = handle(pS + 1 + lS, pE, irI + 1, iE);
    }


    return handle(0, len, 0, len);
};
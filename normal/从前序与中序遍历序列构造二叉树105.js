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
// var buildTree = function (preorder, inorder) {
//     let len = preorder.length;
//     if (len == 1) {
//         return new TreeNode(preorder[0])
//     }
//     let head = new TreeNode(preorder[0]);
//     let map = new Map();
//     for (let i = 0; i < len; i++) {
//         map.set(preorder[i], i);
//     }
//     function find(arr) {
//         let inD = Infinity;
//         let d = null;
//         for (let i = 0; i < arr.length; i++) {
//             if (map.get(arr[i]) < inD) {
//                 inD = map.get(arr[i]);
//                 d = i;
//             }
//         }

//         return arr[d];
//     }
//     function handle(inA, head) {
//         let left = [];
//         let right = [];
//         let r = false, l = false;
//         for (let i = 0; i < len; i++) {
//             if (inA[i] == head.val) {
//                 right = inA.slice(i + 1);
//                 break;
//             } else {
//                 left.push(inA[i]);
//             }
//         }
//         if (left.length > 1) {
//             let nextHead = new TreeNode(find(left), null, null);
//             head.left = nextHead;
//             handle(left, nextHead)
//         } else if (left.length == 1) {
//             head.left = new TreeNode(left[0], null, null);
//             l = true;
//         } else if (left.length == 0) {
//             l = true;
//         }
//         if (right.length > 1) {
//             let nextHead = new TreeNode(find(right), null, null);
//             head.right = nextHead;
//             handle(right, nextHead)
//         } else if (right.length == 1) {
//             head.right = new TreeNode(right[0], null, null);
//             r = true;
//         } else if (right.length == 0) {
//             r = true;
//         }
//         if(r && l){
//             return ;
//         }
//     }
//     handle(inorder, head);

//     return head;
// };
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
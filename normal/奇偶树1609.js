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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    if(root == null){
        return false;
    }
    let queue = [];
    function bfs(level){
        if(queue.length == 0){
            return true;
        }
        let len = queue.length;
        if(level % 2 == 0){
            let idx = -Infinity;
            for(let i = 0; i < len; i++){
                let node = queue.shift();
                if(node.val % 2 == 0){
                    return false;
                }
                if(idx < node.val){
                    idx = node.val
                }else {
                    return false;
                }
                if(node.left !== null){
                    queue.push(node.left)
                }
                if(node.right !== null){
                    queue.push(node.right)
                }
            }
        }else { 
             let idx = Infinity;
            for(let i = 0; i < len; i++){
                let node = queue.shift();
                if(node.val % 2 != 0){
                    return false;
                }
                if(idx > node.val){
                    idx = node.val
                }else {
                    return false;
                }
                if(node.left !== null){
                    queue.push(node.left)
                }
                if(node.right !== null){
                    queue.push(node.right)
                }
            }
        }
        if(queue.length != 0){
           return bfs(++level);
        }
        return true;
    }
    queue.push(root);
    return bfs(0);
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) {
        return "[]"
    }
    let res = [];
    res.push(root.val.toString())
    const dfs = function (queue) {
        if (queue.length == 0) {
            return;
        }
        let req = [], add = [];
        for (let i = 0; i < queue.length; i++) {
            if (queue[i].left != null) {
                req.push(queue[i].left);
                add.push(queue[i].left.val);
            } else {
                add.push('null');
            }
            if (queue[i].right != null) {
                req.push(queue[i].right);
                add.push(queue[i].right.val);
            } else {
                add.push('null');
            }
        }
        if (req.length != 0) {
            res = res.concat(add);
        }
        dfs(req);
        return;
    }
    dfs([root]);

    return `[${res.join(',')}]`;
};



/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data.length == 2) {
        return null;
    }
    let s = data.slice(1, data.length - 1).split(',')
    const root = new TreeNode(s[0]);
    const queue = [root];
    let cursor = 1;
    while (cursor < s.length) {
        const node = queue.shift();

        const leftVal = s[cursor];
        const rightVal = s[cursor + 1];

        if (leftVal != 'null') { 
            const leftNode = new TreeNode(leftVal);
            node.left = leftNode;                  
            queue.push(leftNode);
        }
        if (rightVal != 'null') {
            const rightNode = new TreeNode(rightVal);
            node.right = rightNode;
            queue.push(rightNode);
        }
        cursor += 2;
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
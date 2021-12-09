function dfs(root) {
    if (root == null) {
        return;
    }
    let node = root.left;
    root.left = root.right;
    root.right = node;
    dfs(root.left);
    dfs(root.right);
}
dfs(root.right)

return JSON.stringify(root.left) == JSON.stringify(root.right);
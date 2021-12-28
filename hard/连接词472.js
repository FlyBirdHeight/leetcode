var Trie = function () {
    this.trieTree = {};
};

Trie.prototype.insert = function (word) {
    let node = this.trieTree;
    for (const ch of word) {
        if (!node[ch]) {
            node[ch] = {};
        }
        node = node[ch];
    }
    node.isEnd = true;
}

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
    if (words.length < 3) {
        return [];
    }
    let tree = new Trie();
    words.sort((a, b) => a.length - b.length);
    let res = [];
    function dfs(str, idx) {
        if (str.length == idx) {
            return true;
        }
        let node = tree.trieTree;
        for (let i = idx; i < str.length; i++) {
            let c = str[i];
            node = node[c];
            if (node == null) {
                return false;
            }
            if (node.hasOwnProperty("isEnd") && node.isEnd) {
                if (dfs(str, i + 1)) {
                    return true;
                }
            }
        }

        return false;
    }
    for (let value of words) {
        if (value.length == 0) {
            continue;
        }
        if (dfs(value, 0)) {
            res.push(value)
        } else {
            tree.insert(value);
        }
    }

    return res;
};

console.log(findAllConcatenatedWordsInADict(["cat","dog","catdog"]))
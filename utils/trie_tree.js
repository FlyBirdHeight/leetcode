var Trie = function() {
    this.trieTree = {};
};

Trie.prototype.insert = function(word){
    let node = this.trieTree;
    for (const ch of word) {
        if (!node[ch]) {
            node[ch] = {};
        }
        node = node[ch];
    }
    node.isEnd = true;
}
Trie.prototype.search = function(word){
   let node = this.searchPrefix(word);
   return node !== undefined && node.isEnd !== undefined
}
Trie.prototype.searchPrefix = function(word){
    let node = this.trieTree;
    for(const ch of word){
        if(!node[ch]){
            return false;
        }
        node = node[ch]
    }
    return node;
}

Trie.prototype.startsWith = function(prefix) {
    return this.searchPrefix(prefix);
};

var obj = new Trie;
obj.insert("apple");
obj.search("app")
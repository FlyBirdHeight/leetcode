//字典树
class TrieTree {
    constructor(data){
        this.data = data;
        this.tree = {};
    }

    /**
     * @method insert 向字典树中添加数据
     * @param {string} str 待添加数据
     */
    insert(str){
        let node = this.tree;
        for(let i = 0; i < str.length; i++){
            if(!node[str[i]]){
                node[str[i]] = {}
            }
            node = node[str[i]]
        }
        node['isEnd'] = true;
    }

    /**
     * @method searchPrefix 寻找前置
     * @param {string} prefix 前置字符
     */
    searchPrefix(prefix){
        let node = this.tree;
        for(let ch of prefix){
            if(!node[ch]){
                return undefined
            }
            node = node[ch]
        }
        return node;
    }

    /**
     * @method search 查找完整字符串
     * @param {string} word
     */
    search(word){
        let node = this.searchPrefix(word);
        return node !== undefined && node.isEnd == true;
    }
}

export default TrieTree
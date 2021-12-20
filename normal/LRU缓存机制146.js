var Node = function (key, val, next, pre) {
    this.val = val;
    this.key = key;
    this.next = next;
    this.pre = pre;
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.threshold = capacity;
    this.container = new Map();
    this.head = null;
    this.end = null;
};

LRUCache.prototype.use = function (node) {
    if (node.pre == null) {
        return;
    }
    let nodeNext = null;
    let nodePre = null;
    if (node.next != null && node.pre != null) {
        nodeNext = this.container.get(node.next);
        nodePre = this.container.get(node.pre);
        nodeNext.pre = node.pre;
        nodePre.next = node.next;
    } else if (node.next == null) {
        nodePre = this.container.get(node.pre);
        nodePre.next = null;
        this.end = nodePre.key;
    }
    node.pre = null;
    node.next = this.head.key;
    let nodeT = this.container.get(this.head.key);
    nodeT.pre = node.key;
    this.head = node;
}

LRUCache.prototype.delete = function () {
    if (this.container.size <= this.threshold) {
        return;
    }
    let end = this.container.get(this.end);
    let endPre = this.container.get(end.pre);
    endPre.next = null;
    this.end = endPre.key;
    this.container.delete(end.key);
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    console.log(this.container)
    if (this.container.has(key)) {
        this.use(this.container.get(key));
        return this.container.get(key).val;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.container.has(key)) {
        let n = this.container.get(key);
        n.val = value;
        this.use(n);
        return;
    }
    let node = new Node(key, value, null, null);
    if (this.head != null) {
        node.next = this.head.key;
        let nodeT = this.container.get(this.head.key);
        nodeT.pre = node.key;
    }
    this.head = node;
    this.container.set(key, node)
    if (this.end == null) {
        this.end = key
    }
    this.delete();
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let obj = new LRUCache(2);
obj.put(2, 1);
obj.put(1, 1);
obj.put(2, 3);    // 返回 1
obj.put(4, 1);
console.log(obj.get(1))
console.log(obj.get(2))
class PriorityQueue {
    constructor(
        compare = (a, b) => a > b
    ) {
        this.data = [];
        this.size = 0;
        this.compare = compare;
    }

    /**
     * @method top 返回堆顶最大元素 
     */
    top() {
        return this.size === 0 ? null : this.data[0]
    }

    /**
     * @method set 添加入优先队列中，同时对齐进行提升操作
     * @param {number} val 
     */
    set(val) {
        this.data.push(val)
        this._shifUp(this.size++)
    }

    /**
     * @method pop 弹出堆顶元素，并且进行层级变换，维护优先队列堆顶
     */
    pop() {
        if (this.size === 0) { return null }
        this._swap(0, --this.size)
        this._shifDown(0)
        return this.data.pop()
    }

    /**
     * @method _parent 返回根节点
     * @param {*} index 
     */
    _parent(index) {
        return index - 1 >> 1
    }

    /**
     * @method _child 返回子节点
     * @param {*} index 
     */
    _child(index) {
        return (index << 1) + 1
    }

    /**
     * @method _shifDown 层级下调
     * @param {*} index 
     */
    _shifDown(index) {
        while (this._child(index) < this.size) {
            let child = this._child(index)
            if (child + 1 < this.size
                && this.compare(this.data[child + 1], this.data[child])) {
                child = child + 1
            }
            if (this.compare(this.data[index], this.data[child])) {
                break
            }
            this._swap(index, child)
            index = child
        }
    }

    /**
     * @method _shifUp 层级上调
     * @param {*} index 
     */
    _shifUp(index) {
        while (this._parent(index) >= 0
            && this.compare(this.data[index], this.data[this._parent(index)])) {
            this._swap(index, this._parent(index))
            index = this._parent(index)
        }
    }

    _swap(a, b) {
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
    }
}

var StockPrice = function () {
    this.min = new PriorityQueue((a, b) => a[1] < b[1]);
    this.max = new PriorityQueue((a, b) => a[1] > b[1]);
    this.map = new Map();
    this.currentValue = null
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
    if (this.map.has(timestamp)) {
        this.map.delete(timestamp);
        this.map.set(timestamp, price)
    } else {
        this.currentValue = this.currentValue == null ? timestamp : (this.currentValue > timestamp ? this.currentValue : timestamp);
        this.map.set(timestamp, price);
    }
    this.max.set([timestamp, price]);
    this.min.set([timestamp, price]);
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
    return this.map.get(this.currentValue);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
    while (this.max.size != 0) {
        let t = this.max.top();
        if (this.map.has(t[0]) && this.map.get(t[0]) != t[1]) {
            this.max.pop()
        } else {
            return t[1];
        }
    }
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
    while (this.min.size != 0) {
        let t = this.min.top();
        if (this.map.has(t[0]) && this.map.get(t[0]) != t[1]) {
            this.min.pop()
        } else {
            return t[1];
        }
    }
    
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */

var obj = new StockPrice()
obj.update(1, 10)
obj.update(2, 5)
var param_2 = obj.current()
var param_3 = obj.maximum()
obj.update(1, 3)
var param_4 = obj.minimum()
console.log(param_2);
console.log(param_3);
console.log(param_4)
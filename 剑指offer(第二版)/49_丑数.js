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
        if (this.size === 0) {
            return null
        }
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
            if (child + 1 < this.size &&
                this.compare(this.data[child + 1], this.data[child])) {
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
        while (this._parent(index) >= 0 &&
            this.compare(this.data[index], this.data[this._parent(index)])) {
            this._swap(index, this._parent(index))
            index = this._parent(index)
        }
    }

    _swap(a, b) {
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
    }
}
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let q = new PriorityQueue((a, b) => a < b);
    let map = new Map();
    map.set(1, 0);
    q.set(1);
    n = n - 1;
    while (n > 0) {
        let v = q.pop();
        let add = [v * 2, v * 3, v * 5];
        for (let a of add) {
            if (map.has(v)) {
                continue;
            } else {
                map.set(a, 0);
                q.set(a);
            }
        }
        n--;
    }

    return q.top();
};


//dp写法
/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function (n) {
    let a = 0, b = 0, c = 0
    const dp = new Array(n + 1).fill(0)
    dp[0] = 1
    for (let i = 1; i < n; i++) {
        let n2 = dp[a] * 2, n3 = dp[b] * 3, n5 = dp[c] * 5;
        dp[i] = Math.min(Math.min(n2, n3), n5);
        if (dp[i] == n2) a++;
        if (dp[i] == n3) b++;
        if (dp[i] == n5) c++;
    }
    return dp[n - 1];
};
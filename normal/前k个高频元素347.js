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
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    nums.sort((a, b) => a - b)
    let pq = new PriorityQueue((a, b) => a.num < b.num);
    let num = 0;
    let idx = nums[0];
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (idx == nums[i]) {
            num++
        } else if ((idx != nums[i])) {
            if (pq.size >= k) {
                let top = pq.top();
                if (top.num <= num) {
                    pq.pop();
                    pq.set({
                        key: idx,
                        num: num
                    });
                }
            } else {
                pq.set({
                    key: idx,
                    num: num
                });
            }
            idx = nums[i];
            num = 1;
        }
        if (i == nums.length - 1) {
            if (pq.size >= k) {
                let top = pq.top();
                if (top.num <= num) {
                    pq.pop();
                    pq.set({
                        key: idx,
                        num: num
                    });
                }
            } else {
                pq.set({
                    key: idx,
                    num: num
                });
            }
        }
    }

    let size = pq.size
    for (let i = 0; i < size; i++) {
        res.push(pq.pop().key);
    }

    return res;
};

console.log(topKFrequent([5, -3, 9, 1, 7, 7, 9, 10, 2, 2, 10, 10, 3, -1, 3, 7, -9, -1, 3, 3], 3));
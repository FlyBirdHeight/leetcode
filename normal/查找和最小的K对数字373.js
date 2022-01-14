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
     * @param {*} val 
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
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    let res = [];
    let pq = new PriorityQueue((a, b) => a.sum < b.sum)
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        pq.set({
            sum: nums1[i] + nums2[0],
            res: [i, 0]
        });
    }

    while (pq.size > 0 && k > 0) {
        let pp = pq.pop();
        res.push([nums1[pp.res[0]], nums2[pp.res[1]]]);
        k--;
        if(pp.res[1] < nums2.length - 1){
            pq.set({
                sum: nums1[pp.res[0]] + nums2[pp.res[1] + 1],
                res: [pp.res[0], pp.res[1] + 1]
            });
        }
    }

    return res;
};
/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
    let t = 0;
    courses.sort((a, b) => a[1] - b[1]);
    const pq = new PriorityQueue();
    for (let value of courses) {
        if (value[0] > value[1]) {
            continue;
        }
        if (t + value[0] > value[1] && pq.size > 0 && pq.peek() > value[0]) {
            t -= pq.poll();
        }
        if (t + value[0] <= value[1]) {
            t += value[0];
            pq.offer(value[0])
        }
    }

    return pq.size;
};
class PriorityQueue {
    constructor(
        compare = (a, b) => a > b
    ) {
        this.data = []
        this.size = 0
        this.compare = compare
    }
    /**
     * @method peek 返回堆顶最大元素 
     */
    peek() {
        return this.size === 0 ? null : this.data[0]
    }

    /**
     * @method offer 添加入优先队列中，同时对齐进行提升操作
     * @param {number} val 
     */
    offer(val) {
        this.data.push(val)
        this._shifUp(this.size++)
    }

    /**
     * @method poll 弹出堆顶元素，并且进行层级变换，维护优先队列堆顶
     */
    poll() {
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

console.log(scheduleCourse([[100, 200], [100, 400], [110, 360], [150, 250]]));
/**
 * @class 二分查找
 * @description 这里有基于普通的二分查找以及旋转数组的二分查找方式
 */
class HalfFind {
    constructor(data) {
        this.data = data;
    }

    /**
     * @method normalFind 普通查找方式，原数组内元素按照升序排列
     * @param {*} target 待查找数据
     * @return {number}
     */
    normalFind(target) {
        let l = 0, r = this.data.length - 1;
        while (r > l) {
            let mid = l + (r - l) >> 1;
            if (this.data[mid] == target) {
                return mid;
            }
            if (this.data[mid] > target) {
                r = mid - 1;
            } else {
                l = mid;
            }
        }
        if (this.data[l] != target) {
            return -1;
        }
        return l;
    }

    /**
     * @method reverseDataFind 翻转一段升序数组的二分查找
     * @param {*} target
     * @return {number}
     */
    reverseDataFind(target) {
        let l = 0, r = this.data.length;
        while (r > l) {
            let mid = l + (r - l) >> 1;
            if (this.data[mid] == target) {
                return mid;
            }
            if (this.data[0] < this.data[mid]) {
                if (target >= this.data[0] && target < this.data[mid]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else {
                if (target > this.data[mid] && target <= this.data[this.data.length - 1]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }
        if (nums[l] != target) {
            return -1;
        }
        return l;
    }

    /**
     * @method searchReverseMin 寻找旋转数组中最小的元素
     * @return {number}
     */
    searchReverseMin() {
        let l = 0, r = this.data.length - 1;
        while (r > l) {
            let mid = l + (r - l) >> 1;
            //因为这里是返回的最小元素，所以如果右边比中间小的话，说明旋转数组的时候，小的放在了右边
            if (this.data[r] < this.data[mid]) {
                l = mid + 1;
            } else if (this.data[r] > this.data[mid]) {
                r = mid;
            } else {
                r--;
            }
        }

        return this.data[l];
    }
}
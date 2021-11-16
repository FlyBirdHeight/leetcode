// var findMedianSortedArrays = function (nums1, nums2) {
//     let d1L = nums1.length;
//     let d2L = nums2.length;
//     let len = d1L + d2L;
//     let left = -1;
//     let right = -1;
//     let nums1S = 0;
//     let nums2S = 0;
//     for (let i = 0; i <= len / 2; i++) {
//         left = right;
//         if (nums1S < d1L && (nums2S >= d2L || nums1[nums1S] < nums2[nums2S])) {
//             right = nums1[nums1S++];
//         } else {
//             right = nums2[nums2S++];
//         }
//     }
//     if((len & 1) == 0){
//         return ((left + right) / 2)
//     }else{
//         return (right)
//     }
// };



var getKth = function(nums1, s1, e1, nums2, s2, e2, k){
    var n = e1 - s1 + 1;
    var m = e2 - s2 + 1;
    if(n > m){
        return getKth(nums2, s2, e2, nums1, s1, e1, k)
    }
    if(n == 0){
        return nums2[s2 + k - 1];
    }

    if(k == 1){
        return Math.min(nums1[s1], nums2[s2])
    }
    //这里就是取出nums1与nums2中k折半之后的数据下标，同时判断当前k / 2的大小是否大于了数组的长度，如果大于数组长度，直接去数组的最后一位进行比较
    let i = s1 + Math.min(n, Math.floor(k / 2)) - 1;
    let j = s2 + Math.min(m, Math.floor(k / 2)) - 1;
    if(nums1[i] > nums2[j]){
        return getKth(nums1, s1, e1, nums2, j + 1, e2, Math.floor(k  - (j - s2 + 1)));
    }else{
        return getKth(nums1, i + 1, e1, nums2, s2, e2, Math.floor(k - (i - s1 + 1)));
    }
}

var findMedianSortedArrays = function (nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    let len = n + m;
    let left = (len + 1) / 2;
    let right = (len + 2) / 2;
    return (getKth(nums1, 0, n - 1, nums2, 0, m - 1, Math.floor(left)) + getKth(nums1, 0, n - 1, nums2, 0, m - 1, Math.floor(right))) * 0.5;
};

var nums1 = [0, 0]; 
var nums2 = [0, 0];

// findMedianSortedArrays(nums1, nums2)

console.log(findMedianSortedArrays(nums1, nums2));
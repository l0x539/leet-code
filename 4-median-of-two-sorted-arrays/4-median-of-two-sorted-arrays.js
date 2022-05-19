/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const sorted = [...nums1, ...nums2].sort((a, b) => a-b)
    mPos = sorted.length/2
    return parseFloat(sorted.length%2 ? sorted[parseInt(mPos)] : (sorted[parseInt(mPos-1)] + sorted[parseInt(mPos)])/2)
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    return nums.reduce((prev, num, i) => {
        const newNums = [...nums]
        newNums.splice(i, 1)
        const res = newNums.findIndex(x => x + num === target)
        return res >= 0 ? [res, i] : prev
    } , [])
};
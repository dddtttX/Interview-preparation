function bubble(nums) {
    let length = nums.length
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1)
            }
        }
    }
    return nums
}

let arr = [1, 2, 3, 4, 1, 2, 3, 5, 7, 8, 8, 1, 2, 3, 1, 2]
const swap = function (nums, a, b) {
    let temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
}

function select(nums) {
    let length = nums.length
    for (let i = 0; i < length; i++) {
        let minIndex = i
        for (let j = i + 1; j < length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        swap(nums, i, minIndex)
    }

    return nums
}

let arr = [1, 2, 3, 4, 1, 2, 3, 5, 7, 8, 8, 1, 2, 3, 1, 2]
console.log(select(arr))
const swap = function (nums, a, b) {
    let temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
}

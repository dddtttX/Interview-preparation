function insert(nums) {
    let length = nums.length
    // 从第二项开始遍历
    for (let i = 1; i < length; i++) {
        let j = i
        // 取当前未排序的第一项为target
        let target = nums[j]
        // 此时从当前未排序的第一项开始往前遍历

        while (j > 0 && target < nums[j - 1]) {
            // 只要当前项的前一项比target要大 就替换当前项和前一项
            nums[j] = nums[j - 1]
            j--
        }
        // 遍历完成，此时j因为上面--，为当前插入的位置
        nums[j] = target
    }
    return nums
}
let arr = [1, 2, 3, 4, 1, 2, 3, 5, 7, 8, 8, 1, 2, 3, 1, 2]
console.log(insert(arr))

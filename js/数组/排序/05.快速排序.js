function quickSort(arr) {
    let length = arr.length
    // 确定递归终止条件
    if (length < 2) return arr

    // 去最后一位为临界值
    let point = arr[length - 1]
    let left = arr.filter((val, idx) => val <= point && idx !== length - 1)
    let right = arr.filter(val => val > point)

    return [...quickSort(left), point, ...quickSort(right)]
}

let arr = [1, 2, 3, 4, 1, 2, 3, 5, 7, 8, 8, 1, 2, 3, 1, 2]
console.log(quickSort(arr))

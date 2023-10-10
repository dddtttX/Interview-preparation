// 先创建递归分组的方法
function mergeSort(arr) {
    // 确认递归出口
    if (arr.length < 2) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    let array = merge(left, right)
    return array
}

function merge(left, right) {
    let res = []
    let i = 0,
        j = 0
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            res.push(right[j])
            j++
        } else {
            res.push(left[i])
            i++
        }
    }
    i < left.length ? res.push(...left.slice(i)) : res.push(...right.slice(j))
    return res
}

let arr = [1, 2, 3, 4, 1, 2, 3, 5, 7, 8, 8, 1, 2, 3, 1, 2]
console.log(mergeSort(arr))

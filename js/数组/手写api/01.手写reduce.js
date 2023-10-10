Array.prototype.myReduce = function (cb, initialVal) {
    let arr = this
    let len = arr.length

    if (typeof cb !== "function") {
        throw new TypeError(cb + "is not a function")
    }
    if (len == 0 && typeof initialVal == "undefined") {
        throw new TypeError("Reduce of empty array with no initial value")
    }

    // 初始值
    let preVal, curVal, curIdx
    if (typeof initialVal == "undefined") {
        // 说明没有赋初始值
        preVal = arr[0]
        curVal = arr[1]
        curIdx = 1
    } else {
        preVal = initialVal
        curVal = arr[0]
        curIdx = 0
    }

    for (let i = curIdx; i < len; i++) {
        const curItem = arr[i]
        preVal = cb(preVal, curItem, i, arr)
    }

    return preVal
}
let arr = [1, 2, 3, 4]
let sum = arr.myReduce((pre, cur) => {
    return pre + cur
})
console.log(sum)

function unique(arr) {
    const map = new Map()
    arr.map(i => map.set(i, i))
    arr.length = map.size
    arr.splice(0, arr.length, ...map.values())
    return arr
}

let arr = [1, 2, 3, 4, 1, 2, 3, 5, 7, 8, 8, 1, 2, 3, 1, 2]
console.log(unique(arr))

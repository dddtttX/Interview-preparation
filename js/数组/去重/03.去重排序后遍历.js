function unique(arr) {
    arr.sort()
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            arr.splice(i, 1)
            i--
        }
    }
    return arr
}

let arr = [1, 2, 3, 4, 1, 2, 3, 5, 7, 8, 8, 1, 2, 3, 1, 2]
console.log(unique(arr))

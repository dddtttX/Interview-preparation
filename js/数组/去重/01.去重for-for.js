function unique(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(i, 1)
                i--
            }
        }
    }
    return arr
}
let arr = [1, 2, 3, 4, 1, 2, 3, 5, 7, 8, 8, 1, 2, 3, 1, 2]
console.log(unique(arr))

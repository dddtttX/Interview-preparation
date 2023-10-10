function shuffle(arr) {
    let len = arr.length
    while (len > 1) {
        let randomIndex = Math.floor(Math.random() * len--)
        ;[arr[randomIndex], arr[len]] = [arr[len], arr[randomIndex]]
    }
    return arr
}
let arr = [1, 2, 3, 4, 1, 2, 3, 5, 7, 8, 8, 1, 2, 3, 1, 2]
console.log(shuffle(arr))

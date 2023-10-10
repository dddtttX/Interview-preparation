function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
}
let arr = [1, 2, 3, 4, 1, 2, 3, 5, 7, 8, 8, 1, 2, 3, 1, 2]
console.log(shuffle(arr))

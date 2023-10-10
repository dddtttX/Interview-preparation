function shuffle(arr) {
    let newArr = arr.map(num => {
        return { val: num, ram: Math.random() }
    })
    newArr.sort((a, b) => a.ram - b.ram)
    return [...newArr.map(i => i.val)]
}

let arr = [1, 2, 3, 4, 1, 2, 3, 5, 7, 8, 8, 1, 2, 3, 1, 2]
console.log(shuffle(arr))

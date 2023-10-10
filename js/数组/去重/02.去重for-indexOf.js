function unique(arr) {
    let newArr = []
    arr.map(v => {
        if (newArr.indexOf(v) === -1) newArr.push(v)
    })
    return newArr
}

let arr = [1, 2, 3, 4, 1, 2, 3, 5, 7, 8, 8, 1, 2, 3, 1, 2]
console.log(unique(arr))

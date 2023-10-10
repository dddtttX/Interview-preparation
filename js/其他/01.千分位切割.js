function getThousand(num) {
    const numFormat = (num + "").split(".")
    let int = numFormat[0].split("")
    let double = numFormat[1] || null

    let res = ""

    int.reverse().forEach((v, i) => {
        if (i !== 0 && i % 3 == 0) {
            res = v + "," + res
        } else {
            res = v + res
        }
    })

    res = double ? res + "." + double : res

    return res
}
console.log(getThousand(100000.0001))

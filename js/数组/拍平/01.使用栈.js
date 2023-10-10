function flat(arr) {
    const res = []
    const stack = [].concat(arr)

    while (stack.length) {
        const val = stack.pop()
        if (Array.isArray(val)) {
            stack.push(...val)
        } else {
            res.unshift(val)
        }
    }
}

const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
flat(arr)

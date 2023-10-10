function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("红")
            resolve()
        }, 2000)
    })
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("黄")
            resolve()
        }, 2000)
    })
}
function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("蓝")
            resolve()
        }, 2000)
    })
}

function step() {
    // f1().then(() => {
    //     f2().then(() => {
    //         f3()
    //     })
    // })
    // 再次改写
    Promise.resolve()
        .then(() => f1())
        .then(() => f2())
        .then(() => f3())
        .then(() => step())
}
step()

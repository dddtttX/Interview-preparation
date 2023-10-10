/**
 * Promise集合中，返回第一个执行成功的Promise
 */

let Promise1 = new Promise(resolve =>
    setTimeout(() => {
        resolve("请求成功")
    }, 2000)
)

function timeout() {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("图片请求超时")
        }, 1000)
    })
    return p
}

let p = Promise.any([Promise1, timeout()])

p.then(
    function (res) {
        console.log(res)
    },
    function (err) {
        console.log(err)
    }
)

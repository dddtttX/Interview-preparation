/**
 * 	Promise集合中，返回第一个执行完成（无论成功与失败）的 Promise
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
        }, 5000)
    })
    return p
}

let p = Promise.race([Promise1, timeout()])

p.then(
    function (res) {
        console.log(res)
    },
    function (err) {
        console.log(err)
    }
)

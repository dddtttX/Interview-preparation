/**
 * 	Promise集合中，返回第一个执行完成（无论成功与失败）的 Promise
 */
function myRace(promiseArr) {
    return new Promise((resolve, reject) => {
        promiseArr.forEach(promise => {
            Promise.resolve(promise).then(
                val => {
                    resolve(val)
                },
                err => {
                    reject(err)
                }
            )
        })
    })
}
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

let p = myRace([Promise1, timeout()])

p.then(
    function (res) {
        console.log(res)
    },
    function (err) {
        console.log(err)
    }
)

const promise = new Promise((resolve, reject) => {
    reject("qianguyihao")
})
// then()方法是 Promise实例上的一个方法。它其实是放在Promise的原型上的 Promise.prototype.then。

promise.then(
    res => {
        console.log("res:", res)
    },
    err => {
        console.log("err:", err)
    }
)

promise
    .then(res => {
        console.log("res:", res)
    })
    .catch(err => {
        console.log("err:", err)
    })

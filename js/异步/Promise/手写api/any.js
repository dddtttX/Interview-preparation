/**
 * Promise集合中，返回第一个执行成功的Promise
 */
function myAny(arr) {
    let count = 0
    let res = []
    return new Promise((resolve, reject) => {
        arr.forEach((promise, index) => {
            promise.then(
                val => {
                    resolve(val)
                },
                err => {
                    count++
                    res[index] = err
                    if (count === arr.length) {
                        reject(res)
                    }
                }
            )
        })
    })
}

myAny([
    new Promise((resolve, reject) => reject("promise1")),
    new Promise((resolve, reject) => reject("promise2")),
    new Promise((resolve, reject) => reject("promise3")),
])
    .then(res => console.log("result:", res))
    .catch(err => console.log("err:", err))

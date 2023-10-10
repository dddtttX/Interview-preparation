myAll = function (promiseArr) {
    let res = []
    let counter = 0

    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseArr.length; i++) {
            let promise = promiseArr[i]
            promise.then(
                val => {
                    counter++
                    res[i] = val
                    if (counter === promiseArr.length) {
                        resolve(res)
                    }
                },
                reason => {
                    reject(reason)
                }
            )
        }
    })
}

myAll([
    new Promise(resolve => resolve("promise1")),
    new Promise((_, reject) => _("promise2")),
    new Promise(resolve => resolve("promise3")),
])
    .then(res => console.log("result:", res))
    .catch(err => console.log("err:", err))

myAll([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 200)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 100)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 400)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 300)
    }),
])
    .then(res => console.log("result:", res))
    .catch(err => console.log("err:", err))

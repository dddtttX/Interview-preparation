function promiseRetry(retry, times) {
    let retryTime = 1
    return new Promise((resolve, reject) => {
        const attempt = function () {
            retry()
                .then(res => {
                    console.log(res)
                    resolve(res)
                })
                .catch(err => {
                    console.log(err)
                    if (retryTime === times) {
                        reject(err)
                    } else {
                        retryTime++
                        console.log(retryTime)
                        attempt()
                    }
                })
        }
        attempt()
    }).then(
        () => {
            console.log("在第" + retryTime + "次成功")
        },
        () => {
            console.log("全部失败了")
        }
    )
}
const retry = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = Math.random() > 0.4
            if (flag) resolve("当前请求成功")
            else reject("当前请求失败")
        })
    }, 200)
}
promiseRetry(retry, 5)

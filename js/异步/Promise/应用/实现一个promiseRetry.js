// 实现一个promiseRetry，promiseRetry 的作用是执行一个函数，
// 如果不成功最多可以尝试 times 次。传参有两个：所要执行的promise、次数times

function promiseRetry(asyncFn, maxRetries) {
    return new Promise((resolve, reject) => {
        let retries = 0

        function attempt() {
            asyncFn()
                .then(res => {
                    console.log(res, retries)
                    resolve()
                })
                .catch(error => {
                    retries++
                    if (retries <= maxRetries) {
                        attempt()
                    } else {
                        reject(error)
                    }
                })
        }

        attempt()
    })
}

const retry = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = Math.random() > 0.9
            if (flag) resolve("当前请求成功")
            else reject("当前请求失败")
        })
    }, 200)
}
promiseRetry(retry, 5000, 15)

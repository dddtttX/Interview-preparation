function upLoad(count, timer) {
    return new Promise((resolve, reject) => {
        let isValid = Math.random() > 0.5
        console.log(isValid)
        setTimeout(() => {
            if (isValid) {
                reject(count)
            } else {
                resolve(count)
            }
        }, timer)
    })
}

let promiseList = [upLoad(1, 1500), upLoad(2, 1000), upLoad(3, 900), upLoad(4, 700)]

let p = Promise.allSettled(promiseList)
    .then(res => {
        console.log("成功")

        console.log(res)
        // let success = res.filter(r => r.status === "fulfilled")
        // console.log([...success].map(item => item.value).toString() + "success")
    })
    .catch(err => {
        // let fail = err.filter(r => r.status === "rejected")
        // console.log([...fail].map(item => item.reason).toString() + "fail")
        console.log("失败")
        console.log(err)
    })

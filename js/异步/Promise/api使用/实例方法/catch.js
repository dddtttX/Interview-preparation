Promise.resolve()
    .then(() => {
        return new Error("error!!!")
        // 当成resolve(new error("error!!!"))处理
        // 故不会被catch捕获到
    })
    .then(res => {
        console.log("then: ", res)
    })
    .catch(err => {
        console.log("catch: ", err)
    })

Promise.resolve()
    .then(() => {
        // return a
        // a没有定义 所以会被catch捕获到错误
        // catch:  ReferenceError: a is not defined

        throw new Error("错误")
        // throw的也会被catch到
    })
    .then(res => {
        console.log("then: ", res)
    })
    .catch(err => {
        console.log("catch: ", err)
    })

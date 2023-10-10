const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

class myPromise {
    constructor(executor) {
        this.state = PENDING
        this.value = undefined
        this.reason = undefined

        // 用于存放回调
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []

        let resolve = value => {
            if (this.state === PENDING) {
                this.state = FULFILLED
                this.value = value
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }

        let reject = reason => {
            if (this.state === PENDING) {
                this.state = REJECTED

                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFulfilled, onRejected) {
        if (this.state === FULFILLED) {
            onFulfilled(this.value)
        }
        if (this.state === REJECTED) {
            onRejected(this.reason)
        }

        if (this.state === PENDING) {
            this.onResolvedCallbacks.push(() => {
                onFulfilled(this.value)
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason)
            })
        }
    }
}

// 同步操作，成功！
const p = new myPromise((resolve, reject) => {
    // resolve("成功")
    reject("失败")
}).then(
    data => {
        // console.log("success" + data)
    },
    err => {
        // console.log("fail" + err)
    }
)

// 异步操作,失效了~
const pp = new myPromise((resolve, reject) => {
    setTimeout(() => {
        reject("失败")
    }, 1000)
}).then(
    data => console.log("success" + data),
    err => console.log("fail" + err)
)

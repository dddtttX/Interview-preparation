// Promise.all()的参数是一个数组，数组里可以填写多个 Promise；Promise.all()的返回值是一个新的 Promise。这里我们以三个 Promise 为例，比如 Promise.all([p1, p2, p3])。它的作用是将p1、p2、p3 这三个 Promise 包裹在一起，组成一个新的 Promise。

// 新 Promise 的状态由 p1、p2、p3 这三个 Promise 共同决定：

// 当 p1、p2、p3等所有的 Promise 状态都变为 fulfilled 时，新的 Promise 将变为 fulfilled 状态，并会将 p1、p2、p3 等所有 Promise 的返回值组成一个数组，作为 then() 的参数。

// 当p1、p2、p3 等 Promise中有一个 Promise 状态为 rejected 时，新的 Promise 将立马变为 rejected 状态，并会将第一个 reject() 的返回值作为 catch() 的参数。

// Promise.all([p, p2, p3]) 的使用场景：并发处理多个异步任务，所有任务都执行成功，才算成功（才会走到 then）；只要有一个任务失败，就会马上走到 catch，整体都算失败。参数里传的是多个 Promise 实例组成的数组。

// Promise.all() 在实际开发中使用得非常频繁，真的很好用。我们在开发一个前端页面时，经常需要同时调用多个接口，等待这些接口的数据都准备好之后，前端再来做接下来的事。如果你也遇到这样的需求，那么 Promise.all() 适合你。

let Promise1 = new Promise(resolve => resolve())
let Promise2 = new Promise((_, reject) => reject())
let Promise3 = new Promise(resolve => resolve())

let p = Promise.allSettled([Promise1, Promise2, Promise3])

p.then(
    function (res) {
        // 三个都成功则成功
        console.log(res)
    },
    function (err) {
        // 只要有失败，则失败
        console.log(err)
    }
)

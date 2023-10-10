/**
 * Promise.resolve()	返回一个成功状态的 Promise 对象
 * Promise.reject()	返回一个失败状态的 Promise 对象
 */

// 1.使用场景

// 当我们在定义一个 Promise 的过程中，如果涉及到异步操作，那就需要通过new Promise的方式创建一个 Promise 实例。

// 但有些场景下，我们已经有一个现成的内容了，希望将其转成 Promise 来使用。此时，我们可以用 Promise.resolve() 将其封装为成功的状态。同理，用Promise.reject()可以封装为失败的状态。

// 比如说，有时候，promise 里面并没有异步操作，我只是单纯地想通过 promise 的方式返回一个字符串（有的业务就是有这样的需求），那就可以通过 Promise.resolve('字符串')、 Promise.reject('字符串') 这种简写的方式返回。

// Promise.resolve('a') 这种写法似乎过于啰嗦，直接 return 'a'不行吗？
// 举个例子，我们在调用别人的方法时，对方如果要求返回值必须是 Promise对象，那么，Promise.resolve() 就能派上用场了。

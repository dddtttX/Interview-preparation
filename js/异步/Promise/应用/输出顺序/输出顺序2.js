let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success")
    }, 1000)
})
let p2 = p1.then(() => {
    throw new Error("error!!!")
})
console.log("promise1", p1)
console.log("promise2", p2)
setTimeout(() => {
    console.log("promise1", p1)
    console.log("promise2", p2)
}, 2000)

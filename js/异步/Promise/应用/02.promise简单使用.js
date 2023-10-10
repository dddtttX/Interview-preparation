//需求1: 三秒后喝咖啡，等两秒后看电影，在等两秒睡觉
// setTimeout(() => {
//     console.log("喝咖啡")
//     setTimeout(() => {
//         console.log("看电影")
//         setTimeout(() => {
//             console.log("睡觉")
//         }, 2000)
//     }, 2000)
// }, 3000)

function todo(thing, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(thing)
            resolve()
        }, delay)
    })
}

todo("喝咖啡", 3000)
    .then(() => todo("看电影", 2000))
    .then(() => todo("睡觉", 2000))

// 1. promise实现一个红绿灯+倒计时功能

const colorTime = {
    red: 2000,
    green: 3000,
    yellow: 4000,
}

function showColor(color) {
    console.log("现在是", color, "灯")
}

function light(color, time) {
    return new Promise(resolve => {
        let tempTime = time / 1000
        console.log(tempTime)

        let interval = setInterval(() => {
            console.log(--tempTime)
        }, 1000)
        setTimeout(() => {
            clearInterval(interval)
            interval = null
            showColor(color)
            resolve()
        }, time)
    })
}

Promise.resolve()
    // .then(() => showTime(colorTime.red))
    .then(res => light("红", colorTime.red))
    // .then(() => showTime(colorTime.yellow))
    .then(res => light("黄", colorTime.yellow))
    // .then(() => showTime(colorTime.green))
    .then(res => light("绿", colorTime.green))

function showTime(time) {
    const fn = function () {
        let tempTime = time / 1000
        let interval = null
        return (function () {
            // setTimeout(() => {
            //     clearInterval(interval)
            // }, time)
        })()
    }
    return new Promise(resolve => {
        fn()
        resolve()
    })
}

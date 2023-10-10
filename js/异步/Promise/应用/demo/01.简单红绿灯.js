function light(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(color)
            resolve()
        }, delay)
    })
}

function step() {
    Promise.resolve()
        .then(() => light("红", 2000))
        .then(() => light("黄", 2000))
        .then(() => light("绿", 2000))
        .then(() => step())
}

step()

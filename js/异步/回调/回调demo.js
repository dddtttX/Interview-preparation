function f1() {
    setTimeout(() => {
        console.log("红")
    }, 2000)
}
function f2() {
    setTimeout(() => {
        console.log("绿")
    }, 2000)
}
function f3() {
    setTimeout(() => {
        console.log("黄")
    }, 2000)
}
function step() {
    // 目前是并行执行，需求是改为逐步执行
    f1()
    f2()
    f3()
}

step()

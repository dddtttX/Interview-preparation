// 改良成功 但目前的耦合关系太高了

function f1() {
    setTimeout(() => {
        console.log("红")
        f2()
    }, 200)
}
function f2() {
    setTimeout(() => {
        console.log("绿")
        f3()
    }, 2000)
}
function f3() {
    setTimeout(() => {
        console.log("黄")
    }, 2000)
}
f1()

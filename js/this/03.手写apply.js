Function.prototype.myApply = function (thisArg, args) {
    if (typeof thisArg !== "object") {
        return new Error("first args is not a obj")
    }
    if (!Array.isArray(args)) {
        return new Error("second args is not an array")
    }
    const _fun = Symbol("fun")
    thisArg[_fun] = this
    const res = thisArg[_fun](...args)
    delete thisArg[_fun]
    return res
}

// --------------------------
const person = {
    name: "叶波",
}

function func(num1, num2) {
    console.log(this)
    console.log(num1, num2)
    return num1 + num2
}
const res = func.myApply(person, [2, 8])
console.log("返回值：" + res)

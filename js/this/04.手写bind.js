Function.prototype.myBind = function (thisArg, ...args) {
    if (typeof thisArg !== "object") {
        return new Error("first args is not a obj")
    }
    return (...reArgs) => {
        // this还是指向函数
        return this.call(thisArg, ...args, ...reArgs)
    }
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
const fun = func.myBind(person, 2)
const res = fun(8)

console.log("返回值：" + res)

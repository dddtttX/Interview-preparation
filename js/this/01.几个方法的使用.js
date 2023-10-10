function func(a, b) {
    console.log(this)
    console.log(a, b)
}

const person = {
    name: "person",
}

// 1. apply，数组形式传入
// func.apply(person, [1, 2])
// 2. call，挨个传入
// func.call(person, 1, 2)

// ------------------------
// 3. bind，挨个传入，需要调用
// const test = func.bind(person, 1, 2)
// test()
// 4. 箭头函数
const food = {
    name: "西蓝花",
    eat() {
        console.log(this)
        // 箭头函数，输出food
        // setTimeout(() => console.log(this), 1000)
        // ----------------
        // 普通函数，输出全局对象
        setTimeout(function () {
            console.log(this)
        }, 1000)
    },
}
food.eat()

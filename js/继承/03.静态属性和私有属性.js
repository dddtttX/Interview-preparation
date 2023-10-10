class Father {
    // 可以理解为挂载在类上的属性和方法
    static info = "我是静态属性"
    static getInfo() {
        console.log("我是静态方法")
    }

    // 私有属性
    #name = "私有name"
    #age = "私有age"
    constructor() {}
    getName() {
        console.log(this.#name)
    }
    setName(name) {
        this.#name = name
    }
}
console.log(Father.info) // 我是静态属性
Father.getInfo() // 我是静态方法

// console.log(Father.#name) // Private field '#name' must be declared in an enclosing class

// Father.getName() // Father.getInfo is not a function

const fat = new Father()
fat.getName() // 私有属性只能通过实例方法获取到

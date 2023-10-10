class Father {
    name
    age

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
}

class Son extends Father {
    score
    constructor(name, age, score) {
        super(name, age)
        this.score = score
    }
    getAge() {
        console.log("儿子的getAge方法")
    }
}

const son = new Son("儿子", 18, 100)
son.getAge() // 可以直接使用父类的方法
son.getAge() // 如果子类有定义相同名字的，就用子类的

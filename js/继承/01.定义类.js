class Person {
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

const p = new Person("叶波", 19)
console.log(p.name)
console.log(p.age)
console.log(p.getName())
console.log(p.getAge())
